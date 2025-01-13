import React from 'react'
import Bullies from '../Cards/Bullies'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function HomeFeatured() {

  const settings = {
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    nextArrow: <i className="fa fa-angle-right"></i>,
    prevArrow: <i className="fa fa-angle-left"></i>,
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
          centerMode: false,
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
    <section class="ruk-dogs-list-sec">
          <div class="ruk-bully-container">
              <div class="dog-listing-heading remo-ex-space">
                  <h2 class="text-uppercase fw-bold">Take a look at some of our featured products </h2>
                  <a href="#" class="text-dark text-decoration-none fw-semibold">See All</a>
              </div>
              <div class="g-4 ruk-dog-card-row row-firs-space">
              <Slider {...settings}>
                <Bullies />
                <Bullies />
                <Bullies />
                <Bullies />        
              </Slider>              
              </div>
          </div>
      </section>         
    </>
  )
}

export default HomeFeatured
