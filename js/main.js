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
	$( ".row-text" ).waypoint(function( direction ) {
			//$( ".row-text").hide();
			console.log( $( this ).text() )
			$( this ).show( 500 );
		
	});
	// Apply active style to menu items as we scroll
  $( ".scroll-link" ).waypoint(function(){
    $( "nav .active" ).removeClass( "active" );
    $( "[href$='" + this.id + "']" ).parent().addClass( "active" );
  });

});
