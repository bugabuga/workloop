<?php
/**
 * The template for displaying the header
 *
 * Displays all of the head element and everything up until the "site-content" div.
 *
 * @package Workloop
 * @since Workloop 1.0
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<link rel="profile" href="http://gmpg.org/xfn/11">

	<!-- Styles -->
	<link href="/wp-content/themes/workloop/style.css" rel="stylesheet">

	<!-- Favicons -->
	<!--<link rel="apple-touch-icon" sizes="180x180" href="./images/favicons/apple-touch-icon.png">-->
	<!--<link rel="icon" type="image/png" sizes="32x32" href="./images/favicons/favicon-32x32.png">-->
	<!--<link rel="icon" type="image/png" sizes="16x16" href="./images/favicons/favicon-16x16.png">-->
	<!--<link rel="manifest" href="./images/favicons/site.webmanifest">-->
	<!--<link rel="mask-icon" href="./images/favicons/safari-pinned-tab.svg" color="#5bbad5">-->
	<!--<link rel="shortcut icon" href="./images/favicons/favicon.ico">-->
	<meta name="msapplication-TileColor" content="#00172b">
	<meta name="msapplication-config" content="./images/favicons/browserconfig.xml">
	<meta name="theme-color" content="#ffffff">

	<!-- Social Sharing -->
	<meta property="og:image" content="/wp-content/themes/workloop/images/home/brain_illu.svg.svg" />
	<meta property="og:description" content="We provide our partners with with outstanding customer engagement and back office support." />
	<meta property="og:url" content="<?php global $wp; echo home_url( $wp->request ) ?>" />
	<meta property="og:title" content="Workloop - employee owned outsourcing company" />

	<?php if ( is_singular() && pings_open( get_queried_object() ) ) : ?>
	<link rel="pingback" href="<?php echo esc_url( get_bloginfo( 'pingback_url' ) ); ?>">
	<?php endif; ?>

	<?php if (is_page (95)){?>
	    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
	<?php } ?>
</head>

<body <?php body_class(); ?>>
	<nav id="navigation" class="navigation">
		<div class="container">
			<div class="logo-wrapper">
				<a href="/" class="logo">
					<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
						 viewBox="0 0 258.9 52.2" style="enable-background:new 0 0 258.9 52.2;" xml:space="preserve">
						<style type="text/css">
							.st0{fill:#793089;}
							.st1{fill:#EE2E72;}
							.st2{fill:url(#SVGID_1_);}
						</style>
						<g>
							<path class="st0 fade" d="M34.9,10.7c-0.9,0-1.7,0.2-2.4,0.6s-1.2,1.1-1.4,1.9l-4.8,13L23,17.3c-0.3-0.8-0.8-1.4-1.3-1.8
								s-1.3-0.6-2.2-0.6c-1.7,0-2.9,0.8-3.6,2.5l-3.4,9.2L7.6,13.3c-0.3-0.8-0.7-1.5-1.4-1.9C5.6,11,4.8,10.8,4,10.8
								c-1.2,0-2.1,0.4-2.9,1.2C0.4,12.8,0,13.7,0,14.8c0,0.5,0.1,1,0.3,1.5l8,21.5c0.3,0.8,0.7,1.4,1.4,1.9s1.4,0.7,2.3,0.7h0.4
								c1-0.1,2.4-0.5,3.4-2.5l3.5-10.6L23,38c0.9,1.9,2.3,2.4,3.3,2.4l0.5,0.1c0.8,0,1.5-0.2,2.2-0.7s1.2-1.1,1.4-1.9l8-21.6
								c0.2-0.6,0.2-1,0.2-1.4c0-1.1-0.4-2.1-1.1-2.9C36.8,11.1,35.9,10.7,34.9,10.7z"/>
							<path class="st0 fade" d="M63.1,11.7L63.1,11.7c-2.3-1.3-4.9-2-7.6-2c-2.8,0-5.3,0.7-7.6,2s-4.1,3.2-5.4,5.5c-1.3,2.3-2,5-2,7.9
								s0.7,5.6,2,7.9s3.2,4.2,5.4,5.5c2.3,1.3,4.8,1.9,7.6,1.9c2.7,0,5.3-0.7,7.6-1.9c2.3-1.3,4.1-3.1,5.5-5.5c1.3-2.3,2-5,2-7.9
								s-0.7-5.6-2-7.9C67.2,14.8,65.4,13,63.1,11.7z M59.1,32c-1.1,0.7-2.3,1-3.6,1s-2.5-0.3-3.6-1s-1.9-1.6-2.6-2.8
								c-0.6-1.2-1-2.6-1-4.2s0.3-3,1-4.2c0.6-1.2,1.5-2.2,2.6-2.8c1.1-0.7,2.3-1,3.6-1s2.5,0.3,3.6,1s1.9,1.6,2.6,2.8
								c0.6,1.2,1,2.6,1,4.2s-0.3,3-1,4.2C61,30.4,60.2,31.3,59.1,32z"/>
							<path class="st0 fade" d="M92.7,11.3c-0.9-0.7-1.9-1.1-3.2-1.1c-1.8,0-3.6,0.4-5.2,1.2c-1,0.5-1.8,1.1-2.5,1.9c-0.2-0.5-0.5-1-0.9-1.4
								c-0.7-0.8-1.7-1.2-2.8-1.2s-2.1,0.4-2.8,1.2c-0.7,0.8-1.1,1.7-1.1,2.8v21.6c0,1.1,0.4,2.1,1.1,2.8c0.7,0.8,1.7,1.2,2.8,1.2
								s2.1-0.4,2.8-1.2c0.7-0.8,1.1-1.7,1.1-2.8V23.9c0-1.4,0.2-2.7,0.7-3.7s1.1-1.7,1.8-2.2c1-0.7,2.2-0.8,3.1-0.6
								c0.4,0.1,0.6,0.2,0.7,0.2c1.9,0.7,3.4,0.5,4.6-0.6c0.7-0.7,1.1-1.7,1.1-3C94,13,93.6,12,92.7,11.3z"/>
							<path class="st0 fade" d="M113,24.2l7.3-6.7c1-0.9,1.5-1.9,1.5-3c0-0.9-0.4-1.7-1.1-2.5c-1.6-1.7-4-1.5-5.5,0l-9.8,9.5V4
								c0-1.1-0.4-2.1-1.1-2.8c-0.7-0.8-1.7-1.2-2.8-1.2c-1.1,0-2.1,0.4-2.8,1.2C98,2,97.6,2.9,97.6,4v32.3c0,1.1,0.4,2.1,1.1,2.8
								c0.7,0.8,1.7,1.2,2.8,1.2c1.1,0,2.1-0.4,2.8-1.2c0.7-0.8,1.1-1.7,1.1-2.8v-5.1l1.7-1.6L116,39c1.4,1.6,3.8,1.8,5.6,0.2
								c0.9-0.8,1.3-1.7,1.3-2.8c0-1.1-0.4-2.1-1.2-2.9L113,24.2z"/>
							<path class="st0 fade" d="M130.9,0c-1.1,0-2.1,0.4-2.8,1.2c-0.8,0.8-1.2,1.7-1.2,2.8v32.3c0,1.1,0.4,2.1,1.1,2.8
								c0.7,0.8,1.7,1.2,2.8,1.2c1.1,0,2.1-0.4,2.8-1.2c0.8-0.8,1.2-1.7,1.2-2.8V4c0-1.1-0.4-2.1-1.1-2.8C132.9,0.4,132,0,130.9,0z"/>
							<path class="st1 fade" d="M257.1,19.1L257.1,19.1c-1.2-2.3-2.9-4.2-4.9-5.5c-2.1-1.3-4.4-2-7-2c-1.8,0-3.5,0.4-5.1,1.3
								c-1,0.5-1.9,1.1-2.6,1.7c-0.2-0.5-0.5-0.9-0.9-1.3c-0.7-0.8-1.7-1.2-2.8-1.2c-1.1,0-2.1,0.4-2.8,1.2c-0.7,0.8-1.1,1.7-1.1,2.8v32.1
								c0,1.2,0.4,2.1,1.1,2.9c0.7,0.7,1.7,1.1,2.8,1.1c1.1,0,2.1-0.4,2.8-1.2c0.7-0.8,1.1-1.7,1.1-2.8v-8.5c0.8,0.6,1.6,1,2.6,1.5
								c1.6,0.7,3.3,1.1,5.1,1.1c2.5,0,4.8-0.7,6.8-2c2.1-1.3,3.7-3.2,4.9-5.5c1.2-2.3,1.8-5,1.8-7.9C258.9,24.1,258.3,21.4,257.1,19.1z
								 M251.3,27c0,2.3-0.6,4.2-2,5.8c-1.3,1.5-2.9,2.2-4.9,2.2s-3.7-0.7-4.9-2.2c-1.3-1.5-2-3.4-2-5.8c0-2.3,0.6-4.2,2-5.7
								c1.3-1.5,2.9-2.2,4.9-2.2s3.6,0.7,4.9,2.2C250.6,22.7,251.3,24.7,251.3,27z"/>

							<linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="138.6841" y1="27.1569" x2="225.0266" y2="27.1569" gradientTransform="matrix(1 0 0 -1 0 52.4)">
								<stop  offset="0" style="stop-color:#793089"/>
								<stop  offset="1" style="stop-color:#EE2E72"/>
							</linearGradient>
							<path class="st2" d="M204.8,4.4c-8.2-0.3-15.4,4.3-19.1,11c-1.9,3.5-5.5,5.7-9.5,5.7l0,0c-3.6,0-6.9-1.9-9-4.8
								c-2.9-4.2-7.8-6.8-13.3-6.7c-8.1,0.3-14.8,7-15.2,15.1c-0.4,8.9,6.8,16.3,15.7,16.3c5.3,0,10-2.7,12.9-6.8c2-2.9,5.4-4.8,8.9-4.8
								l0,0c3.9,0,7.6,2.1,9.4,5.5c3.5,6.7,10.5,11.2,18.5,11.2c11.9,0,21.5-9.9,20.9-21.9C224.5,13.5,215.6,4.7,204.8,4.4z M154.3,32.6
								c-4,0-7.3-3.3-7.3-7.3s3.3-7.3,7.3-7.3s7.3,3.3,7.3,7.3C161.7,29.3,158.4,32.6,154.3,32.6z M204.1,37.8c-6.9,0-12.6-5.6-12.6-12.6
								c0-6.9,5.6-12.6,12.6-12.6c6.9,0,12.6,5.6,12.6,12.6S211.1,37.8,204.1,37.8z"/>
						</g>
					</svg>
				</a>
			</div>
			<ul>
				<li>
                    <div class="nav-link _solutions">
                        <span>SOLUTIONS</span>
                        <div class="submenu">
                            <a class="nav-link" href="/solutions">Customer Engagement</a>
                            <a class="nav-link" href="/back-office">Back Office Solutions</a>
                            <div class="mask"></div>
                        </div>
                    </div>
                </li>
				<li><a class="nav-link <?php if (is_page(37)) echo 'active'; ?>" href="/our-edge">OUR EDGE</a></li>
				<li><a class="nav-link <?php if (is_page(43)) echo 'active'; ?>" href="/our-story">OUR STORY</a></li>
				<li><a class="nav-link <?php if (is_page(51)) echo 'active'; ?>" href="/careers">CAREERS</a></li>
				<li><a class="nav-link <?php if (is_home()) echo 'active'; ?>" href="/blog">RESOURCES</a></li>
				<li class="contact-link"><a href="/contact" class="btn btn-primary">Contact</a></li>
			</ul>
		</div>
	</nav>
