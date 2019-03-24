<?php get_header(); ?>

<section id="article" class="article">
    <div class="article-red-shape"></div>
    <div class="article-purple-shape"></div>
    <div class="left-border"></div>
    <div class="right-border"></div>
    <div class="article-container">

        <div class="article-thumbnail">
            <?php the_post_thumbnail() ?>
            <div class="article-share">
                <div class="article-share-title">SHARE:</div>
                <div class="article-share-links">
                    <a href="#" class="article-share-link _linkedin"></a>
                    <a href="#" class="article-share-link _facebook"></a>
                    <a href="#" class="article-share-link _twitter"></a>
                </div>
            </div>
        </div>

        <div class="article-related blog">
            <div class="article-related-title">Related posts</div>
            <div class="article-related-post blog-post">
                <div class="blog-image">
                    <img src="./images/home/blog_1.png" alt="" width="100%" height="100%">
                </div>
                <div class="blog-content">
                    <div class="blog-specs">
                        Jan 15 | Admin
                    </div>
                    <div class="blog-title">
                        <a class="blog-title-link" href="#">Customer Experience is Way to Success in Automotive Industry</a>
                    </div>
                </div>
            </div>
            <div class="article-related-post blog-post">
                <div class="blog-image">
                    <img src="./images/home/blog_2.png" alt="" width="100%" height="100%">
                </div>
                <div class="blog-content">
                    <div class="blog-specs">
                        Jan 15 | Admin
                    </div>
                    <div class="blog-title">
                        <a class="blog-title-link" href="#">Customer Experience is Way to Success in Automotive Industry</a>
                    </div>
                </div>
            </div>
            <div class="article-related-post blog-post">
                <div class="blog-image">
                    <img src="./images/home/blog_3.png" alt="" width="100%" height="100%">
                </div>
                <div class="blog-content">
                    <div class="blog-specs">
                        Jan 15 | Admin
                    </div>
                    <div class="blog-title">
                        <a class="blog-title-link" href="#">Customer Experience is Way to Success in Automotive Industry</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="article-post">
            <div class="article-specs">
                <a href="/blog" class="back-to-list">BACK TO THE LIST</a>
                <div class="article-specs-info">
                    <div class="date">
                        <span>POSTED:</span>
                        03/11/19
                    </div>
                    <div class="author">
                        <span>BY:</span>
                        <?php the_author(); ?>
                    </div>
                </div>
            </div>
            <div class="article-post-title">
                Customer Experience is Way to Success in Automotive Industry
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
        <a href="#" class="btn btn-secondary">Contact form</a>
        <a href="#" class="btn btn-primary">Contact details</a>
    </div>
</section>
<?php get_footer(); ?>