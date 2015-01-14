$(function(){
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
	$( window ).on( "load", function(){
		console.log( $( ".row-text" ).last().offset().top );
		$( ".row-text" ).waypoint({
			handler: function( direction ) {
				//console.log( $( this ).text() )
				$( this ).animate({
					opacity: 0.8
				}, 1000);
			},
			offset: "55%"
		});
		$( ".row-text" ).waypoint({
			handler: function( direction ) {
				//console.log( $( this ).text() )
				$( this ).animate({
					opacity: 0.8
				}, 1000);
			},
			offset: "20%"
		});
		$( ".row-text" ).waypoint({
			handler: function(){
				$( this ).css({
					opacity: 0
				});
			},
			offset: "-300"
		});
		$( ".row-text" ).waypoint({
			handler: function(){
				$( this ).css({
					opacity: 0
				});
			},
			offset: "100%"
		});
		$( ".row-text" ).last().waypoint({
			handler: function( direction ) {
				//console.log( $( this ).text() )
				$( this ).animate({
					opacity: 0.8
				}, 1000);
			},
			offset: "80%"
		});
		$( ".row-text" ).css({
			opacity: 0
		});

	});
	// Apply active style to menu items as we scroll
  $( ".scroll-link" ).waypoint(function(){
    $( "nav .active" ).removeClass( "active" );
    $( "[href$='" + this.id + "']" ).parent().addClass( "active" );
  });

});
