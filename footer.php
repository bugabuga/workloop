<?php
/**
 * The template for displaying the footer
 *
 * @package Workloop
 * @since Workloop 1.0
 */
?>

	<footer id="footer" class="footer">

		<div class="left-border-bottom"></div>
		<div class="right-border-bottom"></div>

		<div class="container">
			<div class="footer-content footer-flex">
				<div class="footer-description footer-flex-col">
					<a href="#" class="footer-logo"></a>
					<div class="footer-description-text">
						We are an employee owned outsourcing company who provide its partners with feel good customer engagement and back office solutions.
					</div>
				</div>

				<div class="footer-links footer-flex-col">
					<div class="footer-links-block">
						<div class="footer-links-block-title">SOLUTIONS</div>
						<a href="/solutions" class="footer-link">Customer Engagement</a>
						<a href="/back-office" class="footer-link">Back Office Solutions</a>
					</div>
					<div class="footer-links-block">
						<div class="footer-links-block-title">OUR EDGE</div>
						<a href="#our-edge" class="footer-link">Our Edge</a>
					</div>
					<div class="footer-links-block">
						<div class="footer-links-block-title">OUR STORY</div>
						<a href="/our-story" class="footer-link">Our Story</a>
					</div>
					<div class="footer-links-block">
						<div class="footer-links-block-title">CAREERS</div>
						<a href="/careers" class="footer-link">Careers</a>
					</div>
				</div>
			</div>

			<div class="footer-social footer-flex">
				<div class="footer-social-links footer-flex-col">
					<a href="#" class="footer-social-link _linkedin"></a>
					<a href="#" class="footer-social-link _facebook"></a>
					<a href="#" class="footer-social-link _instagram"></a>
					<a href="#" class="footer-social-link _twitter"></a>
				</div>
			</div>

			<div class="footer-copyright footer-flex">
				<div class="footer-copyright-text footer-flex-col">
					Workloop ⓒ <?php echo date("Y"); ?> All rights Reserved.
				</div>

				<div class="footer-contacts footer-flex-col">
					<a href="mailto:admin@theworkloop.com" class="footer-email">admin@theworkloop.com</a>
					<a href="tel:+14162273400" class="footer-phone">+1 416 227 3400</a>
				</div>
			</div>
		</div>
	</footer>

	<script type="text/javascript" src="/wp-content/themes/workloop/js/jquery.min.js"></script>
	<script type="text/javascript" src="/wp-content/themes/workloop/js/jquery-ui.min.js"></script>
	<script type="text/javascript" src="/wp-content/themes/workloop/js/swiper.min.js"></script>

	<?php if (is_page (58)){?>

	  <script type="text/javascript" src="/wp-content/themes/workloop/js/scripts_home.js"></script>
	  <script type="text/javascript" src="/wp-content/themes/workloop/js/ajax_email.js"></script>

	<?php } elseif ( is_page (10)){?>

	  <script type="text/javascript" src="/wp-content/themes/workloop/js/scripts_solutions.js"></script>

	<?php } elseif ( is_page (14)) { ?>

	  <script type="text/javascript" src="/wp-content/themes/workloop/js/scripts_solutions_ext.js"></script>

	<?php } elseif ( is_page (37)) { ?>

	  <script type="text/javascript" src="/wp-content/themes/workloop/js/scripts_our_edge.js"></script>

	<?php } elseif ( is_page (43)) { ?>

	  <script type="text/javascript" src="/wp-content/themes/workloop/js/scripts_our_story.js"></script>

	<?php } elseif ( is_page (51)) { ?>

	  <script type="text/javascript" src="/wp-content/themes/workloop/js/scripts_careers.js"></script>

	<?php } elseif ( is_page (95)) { ?>

	  <script type="text/javascript" src="/wp-content/themes/workloop/js/scripts_contact.js"></script>
	  <script type="text/javascript" src="/wp-content/themes/workloop/js/ajax_email.js"></script>

	<?php } elseif ( is_blog() ) { ?>

	  <script type="text/javascript" src="/wp-content/themes/workloop/js/scripts_article.js"></script>
	  <script>
            var getWindowOptions = function() {
            var width = 500;
            var height = 350;
            var left = (window.innerWidth / 2) - (width / 2);
            var top = (window.innerHeight / 2) - (height / 2);

            return [
              'resizable,scrollbars,status',
              'height=' + height,
              'width=' + width,
              'left=' + left,
              'top=' + top,
            ].join();
            };

            var twitterBtn = document.querySelector('.twitter-share');
            var text = encodeURIComponent('Workloop Blog | <?php the_title(); ?>');
            var shareUrl = 'https://twitter.com/intent/tweet?url=' + location.href + '&text=' + text;
            twitterBtn.href = shareUrl; // 1

            twitterBtn.addEventListener('click', function(e) {
                e.preventDefault();
                var win = window.open(shareUrl, 'ShareOnTwitter', getWindowOptions());
                win.opener = null; // 2
            });
	  </script>

	<?php } elseif ( is_home ()) { ?>

	  <script type="text/javascript" src="/wp-content/themes/workloop/js/ajax_pagination.js"></script>
	  <script type="text/javascript" src="/wp-content/themes/workloop/js/scripts_blog.js"></script>

	<?php } ?>

	<script type="text/javascript" src="/wp-content/themes/workloop/js/smooth_scroll.js"></script>

	<script
			type="text/javascript"
			id="cookieinfo"
			src="/wp-content/themes/workloop/js/cookieinfo.min.js"
			data-bg="#000000"
			data-fg="#FFFFFF"
			data-link="#F1D600"
			data-cookie="CookieInfoScript"
			data-text-align="left"
			data-close-text=""
			data-message="This website stores cookies on your computer. These cookies are used to collect information about how you interact with our website and allow us to remember you. We use this information in order to improve and customize your browsing experience and for analytics and metrics about our visitors both on this website and other media. To find out more about the cookies we use, see our <a class='warning-link' target='_blank' href='/confidential.html'>Privacy Policy</a>. <br>If you decline, your information won’t be tracked when you visit this website. A single cookie will be used in your browser to remember your preference not to be tracked."
			data-moreinfo="/confidential.html">
	</script>

    <!-- begin olark code -->
    <script type="text/javascript" async> ;(function(o,l,a,r,k,y){if(o.olark)return; r="script";y=l.createElement(r);r=l.getElementsByTagName(r)[0]; y.async=1;y.src="//"+a;r.parentNode.insertBefore(y,r); y=o.olark=function(){k.s.push(arguments);k.t.push(+new Date)}; y.extend=function(i,j){y("extend",i,j)}; y.identify=function(i){y("identify",k.i=i)}; y.configure=function(i,j){y("configure",i,j);k.c[i]=j}; k=y._={s:[],t:[+new Date],c:{},l:a}; })(window,document,"static.olark.com/jsclient/loader.js");
    /* custom configuration goes here (www.olark.com/documentation) */
    olark.identify('9890-252-10-6248');</script>
    <!-- end olark code -->
</body>
</html>
