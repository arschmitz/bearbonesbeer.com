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
		$( document ).on( "pageshow", function(){
			if( $( this ).attr("id") !== "home" ) {
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
		}
		.ui-page-theme-a .icon-block, .ui-page-theme-a .icon-block:active, .ui-page-theme-a .icon-block:visited, .ui-page-theme-a .icon-block:hover{
			background: rgb( 200, 200, 200 ); /* The Fallback */
			background: rgba( 20, 20, 20, 0.7 );
			height: 150px;
			width: 250px;
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
		}

		.menu-icon{
			height:80%;
			display: block;
			margin-left: 25%;
		}

		.map-icon{
			height:80%;
			display: block;
			margin-left: 35%;
		}
		.bear-icon{
			height:80%;
			display: block;
			margin-left: 35%;
		}
		.panel-image{
			width: 50%;
			margin-left: 25%;
		}
		div.footer.ui-footer{
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			text-align: center;
			background: rgb( 200, 200, 200 ); /* The Fallback */
			background: rgba( 20, 20, 20, 0.7 );
			color: white;
		}
	</style>
</head>
<body>
	<div data-role="page" id="home">
		<div class="ui-content" role="main">
			<div class="grid-3">
				<a href="#menu" class="icon-block" data-transition="slide">
					<img src="/images/menu.png" alt="menu" title="menu" class="menu-icon"/>
					Menu
				</a>
				<a class="icon-block">
					<img src="/images/map-pin.svg" alt="map" title="map" class="map-icon"/>
					Map & Directions
				</a>
			</div>
			<div class="grid-3">
				<img src="images/bitmap.png" alt="Bear Bones Beer" class="main-image" title="Bear Bones Beer"/>
			</div>
			<div class="grid-3">
				<a class="icon-block">
					<img src="/images/bear.png" alt="about us" title="about us" class="bear-icon"/>
					About Us
				</a>
				<a class="icon-block">
					<img src="/images/events-icon.png" alt="eventss" title="events" class="menu-icon"/>
					Menu
				</a>
			</div>
		</div><!-- content -->
		<div class="footer" data-role="footer" data-fullscreen="true">
			<h1>223 Lisbon St. Lewiston Maine</h1>
		</div>
	</div><!-- page -->
	<div id="panel" data-theme="a">
			<img src="images/bitmap.png" alt="Bear Bones Beer" class="panel-image" title="Bear Bones Beer"/>

			<ul class="ui-listview ui-listview-inset ui-corner-all ui-shadow ui-body-b">
				<li class="ui-li-has-thumb ui-first-child">
					<a href="#home" class="ui-btn ui-btn-icon-right ui-icon-carat-r">
						<img src="/images/menu.png" alt="menu" title="menu"/>
						<h1>Home</h1>
					</a>
				</li>
				<li class="ui-li-has-thumb ui-first-child">
					<a href="#home" class="ui-btn ui-btn-icon-right ui-icon-carat-r">
						<img src="/images/menu.png" alt="menu" title="menu"/>
						<h1>Menu</h1>
					</a>
				</li>
				<li class="ui-li-has-thumb ui-first-child">
					<a href="#map" class="ui-btn ui-btn-icon-right ui-icon-carat-r">
						<img src="/images/map-pin.svg" alt="map" title="map"/>
						<h1>Map & Directions</h1>
					</a>
				</li>
				<li class="ui-li-has-thumb ui-first-child">
					<a href="#about" class="ui-btn ui-btn-icon-right ui-icon-carat-r">
						<img src="/images/bear.png" alt="about us" title="about us"/>
						<h1>About Us</h1>
					</a>
				</li>
				<li class="ui-li-has-thumb ui-first-child">
					<a href="#events" class="ui-btn ui-btn-icon-right ui-icon-carat-r">
						<img src="/images/events-icon.png" alt="events" title="events"/>
						<h1>Events</h1>
					</a>
				</li>
			</ul>
		</div>
	<div data-role="page" id="menu">
		
	</div>
</body>
</html>
