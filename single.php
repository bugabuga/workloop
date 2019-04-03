<?php get_header(); ?>

<div id="fb-root"></div>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/ru_RU/sdk.js#xfbml=1&version=v3.2"></script>

<section id="article" class="article">
    <div class="article-red-shape"></div>
    <div class="article-purple-shape"></div>
    <div class="left-border"></div>
    <div class="right-border"></div>
    <div class="article-container">

        <?php
            while ( have_posts() ) : the_post();
                get_template_part( 'content', 'page' );
            endwhile;
        ?>
        <div class="article-thumbnail">
            <div class="article-thumbnail-mask"></div>
            <?php the_post_thumbnail() ?>
            <div class="article-share">
                <div class="article-share-title">SHARE:</div>
                <div class="article-share-links">
                    <a href="#" class="article-share-link _linkedin"></a>
                    <div class="fb-share-button"
                        data-href="http://connex.thebuga.com/our-people-our-people/"
                        data-layout="button"
                        data-size="small"><a target="_blank"
                            href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fconnex.thebuga.com%2Four-people-our-people%2F&amp;src=sdkpreparse"
                            class="fb-xfbml-parse-ignore fb-share article-share-link _facebook"></a>
                    </div>
                    <a href="javascript"void(0); class="twitter-share article-share-link _twitter"></a>
                </div>
            </div>
        </div>

        <div class="article-related blog">

        <?php

        if( $my_related_post_ids = get_post_meta($post->ID, 'my_related_posts', true)) :
            $related_args = array(
                'posts_per_page' => -1,
                'post__in'=> explode(',', $my_related_post_ids),
                'orderby' => 'post__in'
            );
            $related_posts = new WP_Query( $related_args );

            if( $related_posts->have_posts() ) :

                echo '<div class="article-related-title">Related posts</div>';

                while( $related_posts->have_posts() ) : $related_posts->the_post(); ?>
                    <div class="article-related-post blog-post">
                        <div class="blog-image">
                           <?php the_post_thumbnail() ?>
                        </div>
                        <div class="blog-content">
                            <div class="blog-specs">
                                <?php echo get_the_date('M j'); ?> | <?php the_author(); ?>
                            </div>
                            <div class="blog-title">
                                <a class="blog-title-link" href="<?php the_permalink() ?>"><?php the_title() ?></a>
                            </div>
                        </div>
                    </div>
                    <?php
                endwhile;
            endif;

            wp_reset_postdata();
        endif;
        ?>

        </div>

        <div class="article-post">
            <div class="article-specs">
                <a href="/blog" class="back-to-list">BACK TO THE LIST</a>
                <div class="article-specs-info">
                    <div class="date">
                        <span>POSTED:</span>
                        <?php echo get_the_date('m/d/y'); ?>
                    </div>
                    <div class="author">
                        <span>BY:</span>
                        <?php the_author(); ?>
                    </div>
                </div>
            </div>
            <div class="article-post-title">
                <?php the_title(); ?>
            </div>
            <div class="article-post-excerpt">
                <?php the_excerpt(); ?>
            </div>
            <div class="article-post-text">
                <?php $pagecopy = get_extended( $post->post_content ); ?>
                <?=wpautop( $pagecopy['main'] )?>
            </div>
        </div>
    </div>


</section>

<section id="interested" class="interested">
    <div class="interested-title">
        <span>Got</span> interested?
    </div>
    <div class="interested-buttons">
       <a href="https://workloop.breezy.hr/" target="_blank" rel="nofollow noopener noreferrer" class="btn btn-primary">Apply now</a>
    </div>
</section>

<?php get_footer(); ?>