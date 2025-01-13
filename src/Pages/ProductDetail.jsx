import React from 'react'
import Header from '../components/HeaderFooter/DesktopHeader'
import Footer from '../components/HeaderFooter/Footer'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "font-awesome/css/font-awesome.min.css";
import HomeBullies from '../components/List/HomeBullies';
import Bullies from '../components/Cards/Bullies';

function ProductDetail() {
    const settings = {
        centerMode: false,
        centerPadding: "40px",
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: false,
        nextArrow: <i className="fa fa-angle-down slick-next"></i>,
        prevArrow: <i className="fa fa-angle-up slick-prev"></i>,
      };

  return (
    <>
     <Header />
     {/* <!-- Products Detail Content Sec --> */}
     <div class="product-detail-page">
        <div class="container-footer">
            <section class="pd_product-details">
                <div class="pd_left-column">
                    <div className="title-price">
                        <div className="pro-detail-title">
                            <div class="pd_navigation-indicator">
                                Home &gt; Dogs &gt; American </div>
                            <h2 class="pd_product-title">American</h2>
                            <h4 className='pd-detail-sub-title'>Bullies</h4>
                        </div>
                        <div className="pro-detail-price">
                            <div class="pd_price">$1111</div>
                            <div className="icons-shar-heart">
                                <i class="fa fa-share" aria-hidden="true"></i>
                                <i class="fa fa-heart-o" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                    <div class="pd_images-sec">
                        <div class="pd_product-image">
                            <img class="productDescriptionMainImage"
                                src="https://thebullysupply.com/wp-content/themes/amtopm-child/uploaded/listing/1732303573_9pip1oohtsh91.jpg"
                                alt="American" />
                            <span class="heart-icon">
                                <a class="favourite-button" data-listing-id="151" data-user-id="5" data-action="remove">
                                    <i class="fa fa-heart" aria-hidden="true"></i>
                                </a>
                            </span>
    
                        </div>
                        <div class="pd_horizontal-gallery ruk-dog-pro-detail">
                        <Slider {...settings}>
                            <img class="productDescriptionMainSingle"
                                src="https://thebullysupply.com/wp-content/themes/amtopm-child/uploaded/listing/1732303573_Neapolitan-Mastiff.jpg"
                                alt="American" />
                            <img class="productDescriptionMainSingle"
                                src="https://thebullysupply.com/wp-content/themes/amtopm-child/uploaded/listing/1732303573_Neapolitan-Mastiff.jpg"
                                alt="American" />
                            <img class="productDescriptionMainSingle"
                                src="https://thebullysupply.com/wp-content/themes/amtopm-child/uploaded/listing/1732303573_Neapolitan-Mastiff.jpg"
                                alt="American" />
                            <img class="productDescriptionMainSingle"
                                src="https://thebullysupply.com/wp-content/themes/amtopm-child/uploaded/listing/1732303573_Neapolitan-Mastiff.jpg"
                                alt="American" />
                            <img class="productDescriptionMainSingle"
                                src="https://thebullysupply.com/wp-content/themes/amtopm-child/uploaded/listing/1732303573_Neapolitan-Mastiff.jpg"
                                alt="American" />
                            <img class="productDescriptionMainSingle"
                                src="https://thebullysupply.com/wp-content/themes/amtopm-child/uploaded/listing/1732303573_Neapolitan-Mastiff.jpg"
                                alt="American" />
                            <img class="productDescriptionMainSingle"
                                src="https://thebullysupply.com/wp-content/themes/amtopm-child/uploaded/listing/1732303573_Neapolitan-Mastiff.jpg"
                                alt="American" />
                            <img class="productDescriptionMainSingle"
                                src="https://thebullysupply.com/wp-content/themes/amtopm-child/uploaded/listing/1732303573_Neapolitan-Mastiff.jpg"
                                alt="American" />
                         </Slider>
                        </div>
                    </div>
    
                </div>
                <div class="pd_right-column">
                    
                    {/* <div class="pd_buttons">
    
                        <button type="button" class="contact-button btn pd_button1"
                            fdprocessedid="ii63ve">Inquire</button>
    
                        <div class="pd_share">
                            <button class="pd_share-button" fdprocessedid="q3e7a5">Share item:</button>
                            <div class="pd_social-icons">
                                <a href="https://www.facebook.com/thebullysupply" target="_blank"><i
                                        class="fa fa-facebook ruk-fb" aria-hidden="true"></i></a>
                                <a href="https://www.instagram.com/the_bully_supply?igsh=MTN5NnBuNzlzbWUxaA=="
                                    target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                            </div>
                        </div>

                    </div> */}
                    <div className="vender-profile-detail">
                        <div className="seller-profile">
                            <div className="pro-heading">
                                <h2 className='seller-h'>Seller Profile</h2>
                            </div>
                            <div className="seller-pro-heading">
                                <img src="https://thebullysupply.com/wp-content/uploads/2025/01/IMG_2135.jpeg" alt="" />
                                <div className="seller-name">
                                    <h3>John Doe Store</h3>
                                </div>
                            </div>
                            <div className="seller-detail-bully">
                                <div className="member-since">
                                    <span><i class="fa fa-user-o" aria-hidden="true"></i><span>Member since</span></span>
                                    <div className="memeber-date"><p>14 Apr 2023</p></div>
                                </div>
                                <div className="address-seller">
                                    <span><i class="fa fa-map-marker" aria-hidden="true"></i><span>Address</span></span>
                                    <div className="memeber-date"><p>Hanover, Maryland</p></div>
                                </div>
                                <div className="social-profile">
                                    <span>Social Profiles</span>
                                    <div className="social-links">
                                        <i class="fa fa-facebook" aria-hidden="true"></i>
                                        <i class="fa fa-twitter" aria-hidden="true"></i>
                                        <i class="fa fa-instagram" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div className="response-time">
                                    <span><i class="fa fa-clock-o" aria-hidden="true"></i><span className='respn-time-text'>Response time</span></span>
                                    <span className='res-d-t'>within 24 hours</span>
                                </div>
                                <div className="inquie">
                                    <a href="#" className="btn">Inquire</a>
                                </div>
                                <div className="chat-with-seller">
                                    <a href="#" className="btn">Chat With Seller</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
            <section className='product-description border'>
            <div class="section-description-detail">
                <h2 class="description-title">
                DESCRIPTION <span class="info-icon">?</span>
                </h2>
                <p class="description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
                <h2 class="details-title">
                DETAILS <span class="info-icon">?</span>
                </h2>
                <div class="details">
                <div class="detail-item">
                    <span class="label">Category</span>
                    <span class="value">Bullies</span>
                </div>
                <div class="detail-item">
                    <span class="label">Age</span>
                    <span class="value">2 Months</span>
                </div>
                <div class="detail-item">
                    <span class="label">Sub category</span>
                    <span class="value">Bullies</span>
                </div>
                <div class="detail-item">
                    <span class="label">Location</span>
                    <span class="value">Houston, Tx</span>
                </div>
                <div class="detail-item">
                    <span class="label">Gender</span>
                    <span class="value">Female</span>
                </div>
                </div>
            </div>
                 {/* <table class="pd_product-info">
                    <tbody>
                        <tr>
                            <td>Shop:</td>
                            <td>Hamza Khan Store</td>
                        </tr>
                        <tr>
                            <td>Address:</td>
                            <td>15300 MIDWAY ADDISON TX 75001-4249 USA, Plano, Texas</td>
                        </tr>
                        <tr>
                            <td>Category:</td>
                            <td>Bullies </td>
                        </tr>
                        <tr>
                            <td>Sub Category:</td>
                            <td>American Bully </td>
                        </tr>
                        <tr>
                            <td>Gender:</td>
                            <td>Male </td>
                        </tr>
                        <tr>
                            <td>Age:</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>Location:</td>
                            <td>Chicago</td>
                        </tr>
                    </tbody>
                </table>                     */}
            </section>
    
            <section class="pd_next-section">
                <div class="see-more-heading">
                    <h1 class="pd_subheading">See More Puppies</h1>
                    <a href="/category/?search_sub_sub_category=American%20Bully61" class="see-more-all-btn">See All</a>
                </div>
                <div class="h_product-grid detail-pro-slick-slider">
                    {/* <HomeBullies /> */}
                    <div class="see-more-sec">
                        <a href="/product-detail/?id=181">
                            <div class="h_product-card">
                                <img src="https://thebullysupply.com/wp-content/themes/amtopm-child/uploaded/listing/1734728971_154-1547701_high-quality-hd-for-mac-wallpaper.jpeg"
                                    alt="TESTING %S" />
                                <h3>TESTING %S</h3>
                                <div class="meta">Category: American Bully</div>
                                <div class="price">$890</div>
                            </div>
                        </a>
                    </div>
                    <div class="see-more-sec">
                        <a href="/product-detail/?id=179">
                            <div class="h_product-card">
                                <img src="https://thebullysupply.com/wp-content/themes/amtopm-child/uploaded/listing/1734721203_5116698.jpeg"
                                    alt="Dog treats" />
                                <h3>Dog treats</h3>
                                <div class="meta">Category: American Bully</div>
                                <div class="price">$29</div>
                            </div>
                        </a>
                    </div>
                    <div class="see-more-sec">
                        <a href="/product-detail/?id=178">
                            <div class="h_product-card">
                                <img src="https://thebullysupply.com/wp-content/themes/amtopm-child/uploaded/listing/1734715046_Capture.PNG"
                                    alt="Dog grooming service" />
                                <h3>Dog grooming service</h3>
                                <div class="meta">Category: American Bully</div>
                                <div class="price">$15</div>
                            </div>
                        </a>
                    </div>
                    <div class="see-more-sec">
                        <a href="/product-detail/?id=177">
                            <div class="h_product-card">
                                <img src="https://thebullysupply.com/wp-content/uploads/2024/05/images.png" alt="DOG COLLAR AI TEST" />
                                <h3>DOG COLLAR AI TEST</h3>
                                <div class="meta">Category: American Bully</div>
                                <div class="price">$90</div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
    
        </div>
    </div>
     <Footer /> 
    </>
  )
}

export default ProductDetail
