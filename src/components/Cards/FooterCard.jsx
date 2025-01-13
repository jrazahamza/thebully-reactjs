import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function FooterCard() {    
    
        const settings = {
            centerMode: false,
            slidesToShow: 3,
            slidesToScroll: 0,
            autoplay: false,
            arrows: false,
            dots: false,
            swipe: false,
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
  <section class="feature-section">
    <div class="container-footer">
        <div class="row text-center feature-three-cards">
        <Slider {...settings}>
            <div class="col-md-4 mb-4">
                <div class="feature-card p-4">
                    <div class="card-ruk-img">
                        <img src="https://thebullysupply.com/wp-content/uploads/2024/10/findbully.png" alt="car-img" />
                    </div>
                    <h5>Find Bully</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore.</p>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="feature-card fture2 p-4 feature-card-bgcolor">
                    <div class="card-ruk-img">
                        <img src="https://thebullysupply.com/wp-content/uploads/2024/10/call.png" alt="car-img" />
                    </div>
                    <h5>Contact Seller</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore.</p>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="feature-card p-4">
                    <div class="card-ruk-img">
                        <img src="https://thebullysupply.com/wp-content/uploads/2024/10/Groups.png" alt="car-img" />
                    </div>
                    <h5>Adopt Bully</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore</p>
                </div>
            </div>
        </Slider>
        </div>
    </div>
  </section>      
    </>
  )
}

export default FooterCard
