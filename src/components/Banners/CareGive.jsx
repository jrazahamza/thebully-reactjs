import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function CareGive() {

  const settings = {
    centerMode: true,
    slidesToShow: 2,
    slidesToScroll: 0,
    autoplay: false,
    arrows: false,
    dots: false,
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
   <section class="home-banner-2">
      <div class="ruk-bully-container">
        <div class="bully-care-and-service">
          {/* <Slider {...settings}> */}
              <div class="bully-dog">
                <div class="bully-dog-heading">
                <h1>Care You Can Count On!</h1>
                <p>
                  Explore top grooming, Training and Health services for your Bully
                </p>
                </div>
              </div>
              <div class="bully-dog1">
                <div class="bully-dog-heading1">
                <h1>Give A Bully A Loving Home</h1>
                <p>
                  They Will return the love unconditionally. Adopt today and make
                  the difference.
                </p>
                </div>
              </div>
            {/* </Slider> */}
        </div>
      </div>
   </section>      
    </>
  )
}

export default CareGive
