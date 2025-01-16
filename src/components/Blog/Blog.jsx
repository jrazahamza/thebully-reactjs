import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axiosUrl from '../../config/axiosUrl'
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

// State to hold categories data
const [blogs, setBlogs] = useState([]);    
// Fetch categories data when component mounts listingsBullies
useEffect(() => {
   axiosUrl.get('/home')  // Laravel API endpoint for fetching categories
          .then((response) => {
           // console.log("RUK API ", response.data.listingsBullies);
           setBlogs(response.data.blogs);
           //    setLoading(false);
          })
          .catch((error) => {
              console.error("There was an error fetching the categories:", error);
           //    setLoading(false);
          });
  }, []);

//   console.log("Blogs Form API",blogs);

    
  return (
    <>
    <section class="thebully-blog-page">
        <div class="ruk-bully-container">
            <div class="bully-blog-main-heading">
                <h2 class="buly-heading">Useful pet knowledge <span class="bully-q-mark"><small>? 
                    <div class="tooltip">
                                <p>Lorem Ipsum is simply dummy text of the printing and <br />typesetting industry. Lorem
                                    Ipsum has been the </p>
                    </div>
                            </small></span>
                </h2>
            </div>
            <div class="list-blog-post">
            <Slider {...settings}>
                { blogs.map((blog, index) => (
                <div key={index} class="blog-post-dev">
                    <div class="img-dv">
                        <a href="#">
                        <img src={`http://127.0.0.1:8000/${blog.image}`} class="blog-post-img wp-post-image" alt="" />                             
                            {/* <img src="https://thebullysupply.com/wp-content/uploads/2024/05/Picture1-24-300x245.png" class="blog-post-img wp-post-image" alt="" />  */}
                        </a>
                    </div>
                    <div class="blog-content">
                        <h2 class="blog-post-heading"> <a href="#" class="post-tile">{blog.name}</a> </h2>
                        <p>{blog.desc}....</p>
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

export default Blog
