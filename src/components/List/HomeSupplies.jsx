import React, { useEffect, useState } from 'react'
import Bullies from '../Cards/Bullies'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axiosUrl from '../../config/axiosUrl'

function HomeSupplies() {

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

// State to hold categories data
const [supplies, setSupplies] = useState([]);    
// Fetch categories data when component mounts listingsBullies
useEffect(() => {
   axiosUrl.get('/home')  // Laravel API endpoint for fetching categories
          .then((response) => {
           // console.log("RUK API ", response.data.listingsBullies);
           setSupplies(response.data.supplies_listings);
           //    setLoading(false);
          })
          .catch((error) => {
              console.error("There was an error fetching the categories:", error);
           //    setLoading(false);
          });
  }, []);

  // console.log("Bullies Form API",bullies);

  return (
    <>
    <section class="ruk-dogs-list-sec">
        <div class="ruk-bully-container">
            <div class="dog-listing-heading remo-ex-space">
                <h2 class="text-uppercase fw-bold">Take a look at some of our Supplies </h2>
                <a href="#" class="text-dark text-decoration-none fw-semibold">See All</a>
            </div>
            <div class="g-4 ruk-dog-card-row row-firs-space">
            <Slider {...settings}>
              {
              supplies.map((supplie, index) => (
              <div class="dog-list-col">    
                  <div class="dog-card">
                      <a href="#" class="box-link">
                          <img src={`http://127.0.0.1:8000${supplie.gallery1}`} alt="American" class="img-fluid rounded" />
                          <span class="heart-icon">
                          </span></a><a class="favourite-button">
                          <i class="fa fa-heart-o" aria-hidden="true"></i>
                      </a>
                      <div class="dog-card-body">
                          <h3 class="dog-title scape-line">{supplie.title}</h3>
                          <p class="dog-category scape-line">Category: {supplie.categoryName}</p>
                          <p class="dog-price">${supplie.price}</p>
                      </div>
                  </div> 
              </div>
              ))
              }                             
            </Slider>
            </div>
        </div>
    </section>      
    </>
  )
}

export default HomeSupplies
