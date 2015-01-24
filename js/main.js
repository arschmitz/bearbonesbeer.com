$(function(){
window.beer = {
	table: function(){
		$( "table" ).each(function(){
			$( this ).sheetrock({
				url: $( this ).attr( "src" ),
				userCallback: beer.waypoints
			});
		});
	},
	push: function() {
		beer.moving();
	},
	pull: function() {
		beer.moving();
	},
	moving: function(){
		var pulling = $( ".moving" ),
			ele = pulling.parent(),
			width = ele.width(),
			windowWidth = $( window ).width(),
			step = ( windowWidth - width ) / 200,
			top = ele.offset() ? ele.offset().top : 0,
			current = 200 - ( top - $( window ).scrollTop() ),
			newWidth = width + ( step * current ),
			margin = newWidth / 2;
		current =  current > 200 ? 200 : current;
		current =  current < 0 ? 0 : current;
		pulling.css({
			width: newWidth,
			"margin-left": -1 * margin,
			left: "50%"
		});
		$( ".stuck" ).css({
			top: -1 * current
		});
	},
	waypoints: function(){
		$( ".row-text" ).waypoint({
			handler: function( dir ) {
				$( this.element ).animate({
					opacity: dir === "down" ? 0 : .8
				}, 500);
			},
			offset: function(){
				return ( $( this.element ).height() * .5 ) * -1;
			}
		});
		$( ".image-header" ).each(function(){
			var ele = $( this ).wrap( "<div>" ),
				parent = ele.parent(),
				id = ele.uniqueId()[ 0 ].id;

			parent
				.height( ele.height() )
				.width( ele.width() )
				.waypoint({
					offset: "200px",
					handler: function( dir ){
						if ( dir === "down" ){
							ele.addClass( "moving" );
							$( window ).on( "scroll." + id, beer.push );
						} else {
							ele.removeClass( "moving" );
							ele.attr( "style", "" );
							$( window ).off( "scroll." + id, beer.pull );
						}
					}
				});
			parent.waypoint(function( dir ){
				if ( dir === "down" ) {
					ele.addClass( "stuck" );
					ele.removeClass( "moving" );
					ele.attr( "style", "" );
					$( window ).off( "scroll." + id, beer.push );
				} else {
					ele.addClass( "moving" );
					ele.removeClass( "stuck" );
					$( window ).on( "scroll." + id, beer.pull );
				}
			});
		});

		$( ".image-header-text" ).css({
			opacity: 0
		}).waypoint({
			handler: function( dir ) {
				$( this.element ).animate({
					opacity: dir === "up" ? 0 : .8
				}, 500);
			},
			offset: 50
		});
		$( ".row-text" ).waypoint({
			handler: function( dir ) {
				$( this.element ).animate({
					opacity: dir === "up" ? 0 : .8
				}, 500);
			},
			offset: function(){
				return $( window ).height() - ( $( this.element ).height() / 2 );
			}
		});
		$( ".row-text" ).css({
			opacity: 0
		});
		// Apply active style to menu items as we scroll
		$( ".scroll-link" ).waypoint(function(){
			$( "nav .active" ).removeClass( "active" );
			$( "[href$='" + this.element.id + "']" ).parent().addClass( "active" );
		});
	},
	navbar: function(){
		var headers = $( "#main h1" ),
			html = "";

		headers.each(function(){
			var text = $( this ).text();
			$( this ).append( "<span class='scroll-link' id='" + encodeURI( text ) + "'>&nbsp;</span>" );
			html += "<li><a href='#" + encodeURI( text ) + "'>" + text + "</a></li>";
		});

		$( ".nav" ).prepend( html );
	},
	fetchRows: function() {
		var template = Handlebars.compile( $( "#entry-template" ).html() );
		$( "#main" ).sheetrock({
			url: "https://docs.google.com/spreadsheets/d/1ExZ37s1BYLBWFX1A5UuAg2MZ9ioKmWTYZ6h8aqGes7w/edit#gid=793522145",
			rowHandler: template,
			rowGroups: false,
			userCallback: function(){
				beer.table();
				beer.navbar();
			}
		});
	},
	confirmAge: function() {
		if ( !$.cookie( "ageConfirmed" ) ) {
			$( "#confirm-age" ).dialog({
				modal: true,
				buttons: {
					"Yes": function(){
						beer.scrolling( false );
						$.cookie( "ageConfirmed", true );
						$( this ).dialog( "close" );
					},
					"No": function(){
						window.location.href = "http://google.com";
					}
				},
				width: "auto",
				classes: {
					"ui-dialog-titlebar": "hide"
				}
			});
			beer.scrolling( true );
		}
	},
	interval: null,
	scrolling: function( kill ){
		$( "#confirm-age" ).parent().css({
			position: "fixed"
		});
		$( "body" ).css({
			height: kill ? "100%" : "auto",
			overflow: kill ? "hidden" : "initial"
		});
	},
	brew: function(){
		beer.confirmAge();
		beer.fetchRows();
	}
};

beer.brew();

});
