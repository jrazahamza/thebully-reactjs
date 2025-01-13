import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function OurPartner() {
    
        const settings = {
            centerMode: true,
            slidesToShow: 6,
            slidesToScroll: 0,
            autoplay: false,
            arrows: false,
            dots: false,
            swipe: false,
            responsive: [
              {
                breakpoint: 1124,
                settings: {
                  slidesToShow: 6,
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
                  slidesToShow: 3,
                },
              },
              {
                breakpoint: 576,
                settings: {
                  centerMode: true,
                  centerPadding: '60px',
                  arrows: false,
                  swipe: true,
                  draggable: true,
                  slidesToShow: 2,
                },
              },
            ],
          };
        
  return (
    <>
      <div classs="our-partners">
          <div class="container-footer">
              <h2 class="text-left">Our Partners</h2>
              <div class="partners-logos d-flex justify-content-between gap-2">
              {/* <Slider {...settings}> */}
                    <div class="logo">
                        <img src="https://thebullysupply.com/wp-content/uploads/2024/10/Group-1321316255.png" />
                    </div>
                    <div class="logo">
                        <img src="https://thebullysupply.com/wp-content/uploads/2024/10/Group-1321316256.png" />
                    </div>
                    <div class="logo">
                        <img src="https://thebullysupply.com/wp-content/uploads/2024/10/Group-1321316257.png" />
                    </div>
                    <div class="logo">
                        <img src="https://thebullysupply.com/wp-content/uploads/2024/10/Group-1321316258.png" />
                    </div>
                    <div class="logo">
                        <img src="https://thebullysupply.com/wp-content/uploads/2024/10/Group-1321316259.png" />
                    </div>
                    <div class="logo">
                        <img src="https://thebullysupply.com/wp-content/uploads/2024/10/Group-1321316255.png" />
                    </div>
                {/* </Slider> */}
              </div>
          </div>
      </div>
      
    </>
  )
}

export default OurPartner
