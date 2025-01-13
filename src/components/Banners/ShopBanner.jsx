import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ShopBanner() {

    
  const settings = {
    slidesToShow: 3,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {            
          centerMode: true,
          centerPadding: '60px',
          arrows: false,
          swipe: true,
          draggable: true,
          slidesToShow: 1,
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
    <section class="bully-shop-home">
        <div class="ruk-bully-container">
            <div class="row shops-section">
                <div class="show-heading">
                    <h2>SHOPS <span class="bully-q-mark"><small>? <div class="tooltip">
                                    <p>Lorem Ipsum is simply dummy text of the printing and <br />typesetting industry. Lorem
                                        Ipsum has been the</p>
                                </div></small> </span></h2>
                </div>
                <div class="shop-banner-listing">
                    <Slider {...settings}>
                        <div class="ruk-col shop">
                            <div class="shop-card-content">
                                <div class="shop-heading">
                                    <h1>Exciting News</h1>
                                    <p>
                                        More food stores are joining the pack! Stay tuned for fresh
                                        choices
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="ruk-col shop shop-center-banner">
                            <div class="shop-card-content">
                                <div class="shop-heading">
                                    <h1>Welcome To The Bully Supply Store!</h1>
                                    <p>
                                        Sniff out the perfect food for your pup’s happy, healthy life!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="ruk-col shop">
                            <div class="shop-card-content">
                                <div class="shop-heading">
                                    <h1>Want The Spotlight?</h1>
                                    <p>
                                        Feature your store here for the ultimate bully community
                                        exposure!
                                    </p>
                                </div>

                            </div>
                        </div>
                    </Slider>       
                </div>
            </div>
        </div>
    </section>      
    </>
  )
}

export default ShopBanner
