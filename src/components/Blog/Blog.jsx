import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Blog() {

    const settings = {
        centerMode: false,
        slidesToShow: 4,
        slidesToScroll: 0,
        autoplay: false,
        arrows: false,
        dots: false,
        swipe: false,
        responsive: [
          {
            breakpoint: 1124,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 992,
            settings: {
              centerMode: false,
              centerPadding: '60px',
              arrows: false,
              swipe: true,
              draggable: true,
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 576,
            settings: {
              centerMode: false,
              centerPadding: '60px',
              arrows: false,
              swipe: true,
              draggable: true,
              slidesToShow: 1,
            },
          },
        ],
      };
    
  return (
    <>
    <section class="thebully-blog-page">
        <div class="ruk-bully-container">
            <div class="bully-blog-main-heading">
                <h2 class="buly-heading">Useful pet knowledge <span class="bully-q-mark"><small>? <div class="tooltip">
                                <p>Lorem Ipsum is simply dummy text of the printing and <br />typesetting industry. Lorem
                                    Ipsum has been the </p>
                            </div></small></span></h2>
            </div>
            <div class="list-blog-post">
            <Slider {...settings}>
                {/* <!-- blog post --> */}
                <div class="blog-post-dev">
                    <div class="img-dv">
                        <a href="#">
                            <img src="https://thebullysupply.com/wp-content/uploads/2024/05/Picture1-24-300x245.png" class="blog-post-img wp-post-image" alt="" /> 
                        </a>
                    </div>
                    <div class="blog-content">
                        <h2 class="blog-post-heading"> <a href="#" class="post-tile">Spotlight on Rescues: Success Stories of Bully Breeds</a> </h2>
                        <p>In the world of dog rescue and rehabilitation, bully breeds often face the hardest
                            challenges due to misconceptions and biases....</p>
                    </div>
                </div>
                {/* <!-- blog post --> */}
                <div class="blog-post-dev">
                    <div class="img-dv">
                        <a href="#">
                            <img src="https://thebullysupply.com/wp-content/uploads/2024/05/Picture1-24-300x245.png" class="blog-post-img wp-post-image" alt="" /> 
                        </a>
                    </div>
                    <div class="blog-content">
                        <h2 class="blog-post-heading"> <a href="#" class="post-tile">Spotlight on Rescues: Success Stories of Bully Breeds</a> </h2>
                        <p>In the world of dog rescue and rehabilitation, bully breeds often face the hardest
                            challenges due to misconceptions and biases....</p>
                    </div>
                </div>
                {/* <!-- blog post --> */}
                <div class="blog-post-dev">
                    <div class="img-dv">
                        <a href="#">
                            <img src="https://thebullysupply.com/wp-content/uploads/2024/05/Picture1-24-300x245.png" class="blog-post-img wp-post-image" alt="" /> 
                        </a>
                    </div>
                    <div class="blog-content">
                        <h2 class="blog-post-heading"> <a href="#" class="post-tile">Spotlight on Rescues: Success Stories of Bully Breeds</a> </h2>
                        <p>In the world of dog rescue and rehabilitation, bully breeds often face the hardest
                            challenges due to misconceptions and biases....</p>
                    </div>
                </div>
                {/* <!-- blog post --> */}
                <div class="blog-post-dev">
                    <div class="img-dv">
                        <a href="#">
                            <img src="https://thebullysupply.com/wp-content/uploads/2024/05/Picture1-24-300x245.png" class="blog-post-img wp-post-image" alt="" /> 
                        </a>
                    </div>
                    <div class="blog-content">
                        <h2 class="blog-post-heading"> <a href="#" class="post-tile">Spotlight on Rescues: Success Stories of Bully Breeds</a> </h2>
                        <p>In the world of dog rescue and rehabilitation, bully breeds often face the hardest
                            challenges due to misconceptions and biases....</p>
                    </div>
                </div>
            </Slider>
            </div>
        </div>
    </section>      
    </>
  )
}

export default Blog
