$(function(){
var beer = {
	table: function(){
		$( "table" ).each(function(){
			$( this ).sheetrock({
				url: $( this ).attr( "src" ),
				userCallback: beer.waypoints
			});
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
			new Waypoint.Sticky({
				element: this
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
		$( "#confirm-age" ).dialog({
			modal: true,
			buttons: {
				"Yes": function(){
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
	},
	brew: function(){
		beer.confirmAge();
		beer.fetchRows();
	}
};

beer.brew();

});
