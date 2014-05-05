<!DOCTYPE>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet"  href="http://code.jquery.com/mobile/git/jquery.mobile-git.css"> 
	<script src="http://code.jquery.com/jquery-1.10.1.js"></script> 
	<script src="http://code.jquery.com/mobile/git/jquery.mobile-git.js"></script>
	<script>
		$( function() {
			$( "#panel" ).panel();
		});
		$( document ).on( "pageshow", "div[data-role='page']", function(){
			if( $( this ).attr("id") !== "home" ) {
				$( "#panel" ).panel();
				$( "#panel" ).panel( "open" );
			}
		});
	</script>
	<style type="text/css">
		.ui-page, .ui-content, .ui-page-theme-a .ui-panel-wrapper {
			background: none !important;
		}
		html body.ui-mobile-viewport {
			background: url( images/brick.jpg );
			background-size: 100% 100%;
		}
		.grid-3{
			width: 30%;
			margin: 1.5%;
			float: left;
			text-align: center;
			height: 90%;
		}
		.ui-page-theme-a .icon-block, .ui-page-theme-a .icon-block:active, .ui-page-theme-a .icon-block:visited, .ui-page-theme-a .icon-block:hover{
			background: rgb( 200, 200, 200 ); /* The Fallback */
			background: rgba( 20, 20, 20, 0.7 );
			height: 30%;
			width: 75%;
			color: white;
			font-size: 30px;
			text-align: center;
			padding: 20px;
			margin-top:1em;
			margin-left:auto;
			margin-right:auto;
			display:block;
			text-decoration: none;
		}
		.main-image{
			width:100%;
			max-height: 100%;
		}

		.icon-block img{
			width: 40%;
			display:block;
			margin-left: 30%;
		}
		.panel-image{
			width: 50%;
			margin-left: 25%;
		}
		sddiv.footer.ui-footer{
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			text-align: center;
			background: rgb( 200, 200, 200 ); /* The Fallback */
			background: rgba( 20, 20, 20, 0.7 );
			color: white;
		}
		.portrait-main-image{
			width:100%;
			padding-left: 25%;
		}
		.portrait-main-image img {
			width:50%;
		}
		.portrait-content{
			display:none;
		}
		.landscape-content{
			height:100%;
		}
		#home {
			height: 100%;
		}
		@media screen and ( orientation:portrait ) {
			.landscape-content{
				display:none;
			}
			.portrait-content{
				display:block;
			}
		}
	</style>
</head>
<body>
	<div data-role="page" id="home">
		<div class="landscape-content" role="main">
			<div class="grid-3">
				<a href="#menu" class="icon-block" data-transition="slide">
					<img src="/images/menu.png" alt="menu" title="menu"/>
					Menu
				</a>
				<a class="icon-block">
					<img src="/images/map-pin.png" alt="map" title="map"/>
					Directions
				</a>
			</div>
			<div class="grid-3">
				<img src="images/bitmap.png" alt="Bear Bones Beer" class="main-image" title="Bear Bones Beer"/>
			</div>
			<div class="grid-3">
				<a class="icon-block">
					<img src="/images/bear.png" alt="about us" title="about us"/>
					About Us
				</a>
				<a class="icon-block">
					<img src="/images/events-icon.png" alt="eventss" title="events"/>
					Menu
				</a>
			</div>
		</div><!-- content -->
		<div class="ui-content portrait-content" role="main">
			<div class="portrait-main-image">
				<img src="images/bitmap.png" alt="Bear Bones Beer" class="main-image" title="Bear Bones Beer"/>
			</div>
		</div><!-- content -->
		
	</div><!-- page -->
	
	<div data-role="page" id="menu">
		
	</div>
</body>
</html>
