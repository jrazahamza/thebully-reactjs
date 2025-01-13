import React, { useState } from 'react'
import Header from '../components/HeaderFooter/DesktopHeader'
import Footer from '../components/HeaderFooter/Footer'
import CtaFilter from '../components/Filters/categoriesData';
import PriceFilter from '../components/Filters/PriceFilter';
import AgeFilter from '../components/Filters/AgeFilter';

function Category() {


  return (
    <>
    <Header />
    {/* <!-- Category Content Section --> */}

    <div class="custom-category-page">
        <div class="container-footer">
            <div class="category-content">
              <section class="c_filters-section ruk-filter-section">
                <div class="filter-section">
                 <h2>Filter</h2>                 
                 <div class="filter-category">
                  <div class="filter-content filter-group-content">
                    <div class="filter-group parent-gro">
                      <div class="filter-content filter-group-content cta-left-filter-sec">
                         {/* <!-- Bullies Filter --> */}
                        <div class="filter-group filter-group-main parent-gro main-dropdown cta-195">
                            <div class="filter-title filter-main-title cta-label">
                                {/* <!-- Keep Categories label here outside the dropdown --> */}
                                <span class="input-label">Categories</span>
                            </div>

                            <div class="filter-content filter-group-content ruk-parent-gro">
                              {/* <!-- Categories Filter --> */}
                              <CtaFilter />
                              {/* <Sidebar /> */}
                            </div>
                            <div class="gender-group">
                                <div class="gender-label" id="genderLabel">Gender</div>
                                <div class="gender-input-group">
                                    <input type="checkbox" id="gender" name="gender" value="1" />
                                    <label for="male">Male</label><br />
                                    <input type="checkbox" id="gender" name="gender" value="2" />
                                    <label for="female">Female</label><br />
                                </div>
                            </div>                
                            <PriceFilter />

                            <AgeFilter />
                          </div>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </section>
              <section class="m_c_filters-section">
                <div class="c_text-sorting-column">
                  <div class="c_container">
                      <div class="c_text-content">
                          <h2>Explore Our Pets</h2>
                          {/* <!-- Add more text content here --> */}
                      </div>
                      <div class="c_sorting-dropdown">
                          <label for="sorting">Sort By:</label>
                          <select name="sorting" id="sorting">
                              <option value="name">Name</option>
                              <option value="price">Price</option>
                          </select>
                      </div>
                  </div>
                  <div class="c_product-grid" id="main-product-gird">
                      <a href="#" class="h_product-card ruk-test" data-category="American Bully140" data-state="GA" data-stock="" data-type="American Bully" data-title="TESTING %S" data-price="890" data-age="5" data-gender="1">
                          <img src="https://thebullysupply.com/wp-content/themes/amtopm-child/uploaded/listing/1734728971_154-1547701_high-quality-hd-for-mac-wallpaper.jpeg" alt="TESTING %S" />
                          <span class="favourite-button" data-listing-id="181" data-user-id="5" data-action="add">
                              <i class="fa fa-heart-o" aria-hidden="true"></i>
                          </span>
                          <h3>TESTING %S</h3>
                          <div class="meta">Category: American Bully</div>
                          <div class="price">$890</div>
                      </a>
                      <a href="/product-detail/?id=179" class="h_product-card ruk-test" data-category="Treats54" data-state="" data-stock="" data-type="Treats" data-title="Dog treats" data-price="29" data-age="0" data-gender="0">
                          <img src="https://thebullysupply.com/wp-content/themes/amtopm-child/uploaded/listing/1734721203_5116698.jpeg" alt="Dog treats" />
                          <span class="favourite-button" data-listing-id="179" data-user-id="5" data-action="remove">
                              <i class="fa fa-heart" aria-hidden="true"></i>
                          </span>
                          <h3>Dog treats</h3>
                          <div class="meta">Category: Treats</div>
                          <div class="price">$29</div>
                      </a>
                      <a href="/product-detail/?id=178" class="h_product-card ruk-test" data-category="" data-state="TX" data-stock="" data-type="" data-title="Dog grooming service" data-price="15" data-age="0" data-gender="1">
                          <img src="https://thebullysupply.com/wp-content/themes/amtopm-child/uploaded/listing/1734715046_Capture.PNG" alt="Dog grooming service" />                
                          <span class="favourite-button" data-listing-id="178" data-user-id="5" data-action="add">
                              <i class="fa fa-heart-o" aria-hidden="true"></i>
                          </span>
                          <h3>Dog grooming service</h3>
                          <div class="meta">Category: </div>
                          <div class="price">$15</div>
                      </a>
                      <a href="/product-detail/?id=177" class="h_product-card ruk-test" data-category="" data-state="IL" data-stock="" data-type="" data-title="DOG COLLAR AI TEST" data-price="90" data-age="0" data-gender="0">
                          <img src="https://thebullysupply.com/wp-content/uploads/2024/05/images.png" alt="DOG COLLAR AI TEST" />
                          <span class="favourite-button" data-listing-id="177" data-user-id="5" data-action="add">
                              <i class="fa fa-heart-o" aria-hidden="true"></i>
                          </span>
                          <h3>DOG COLLAR AI TEST</h3>
                          <div class="meta">Category: </div>
                          <div class="price">$90</div>
                      </a>
                      <a href="/product-detail/?id=174" class="h_product-card ruk-test" data-category="American Bulldog60" data-state="IL" data-stock="" data-type="American Bulldog" data-title="The dog" data-price="12" data-age="4" data-gender="1">
                          <img src="https://thebullysupply.com/wp-content/themes/amtopm-child/uploaded/listing/1734547227_american-bulldog-5.jpg" alt="The dog" />            
                          <span class="favourite-button" data-listing-id="174" data-user-id="5" data-action="remove">
                              <i class="fa fa-heart" aria-hidden="true"></i>
                          </span>
                          <h3>The dog</h3>
                          <div class="meta">Category: American Bulldog</div>
                          <div class="price">$12</div>
                      </a>
                      <a href="/product-detail/?id=173" class="h_product-card ruk-test" data-category="Fetch Toys240" data-state="IL" data-stock="" data-type="Fetch Toys" data-title="Dog Ball" data-price="30" data-age="0" data-gender="0">
                          <img src="https://thebullysupply.com/wp-content/themes/amtopm-child/uploaded/listing/1733408744_Dog-Ball-Toy-with-Rope-Interactive-Leaking-Balls-for-Small-Large-Dogs-Bite-Resistant-Chew-Toys-Puppy-Training-Pet-Accessories.png" alt="Dog Ball" />                
                          <span class="favourite-button" data-listing-id="173" data-user-id="5" data-action="add">
                              <i class="fa fa-heart-o" aria-hidden="true"></i>
                          </span>
                          <h3>Dog Ball</h3>
                          <div class="meta">Category: Fetch Toys</div>
                          <div class="price">$30</div>
                      </a>
                      <a href="/product-detail/?id=172" class="h_product-card ruk-test" data-category="Skin Care255" data-state="TX" data-stock="" data-type="Skin Care" data-title="Dog Skin care" data-price="50" data-age="0" data-gender="0">
                          <img src="https://thebullysupply.com/wp-content/themes/amtopm-child/uploaded/listing/1733408615_Why-is-Veterinary-Care-So-Expensive-.jpg" alt="Dog Skin care" />                
                          <span class="favourite-button" data-listing-id="172" data-user-id="5" data-action="remove">
                              <i class="fa fa-heart" aria-hidden="true"></i>
                          </span>
                          <h3>Dog Skin care</h3>
                          <div class="meta">Category: Skin Care</div>
                          <div class="price">$50</div>
                      </a>
                      <a href="/product-detail/?id=171" class="h_product-card ruk-test" data-category="Health Supplements51" data-state="TX" data-stock="" data-type="Health Supplements" data-title="Power supplement" data-price="25" data-age="0" data-gender="0">
                          <img src="https://thebullysupply.com/wp-content/themes/amtopm-child/uploaded/listing/1733408469_bsmgjij9fi3ajdtpm6f0.jpg" alt="Power supplement" />

                          <span class="favourite-button" data-listing-id="171" data-user-id="5" data-action="add">
                              <i class="fa fa-heart-o" aria-hidden="true"></i>
                          </span>
                          <h3>Power supplement</h3>
                          <div class="meta">Category: Health Supplements</div>
                          <div class="price">$25</div>
                      </a>
                      <a href="/product-detail/?id=168" class="h_product-card ruk-test" data-category="Frozen, Freeze-Dried &amp; Dehydrated Food50" data-state="" data-stock="" data-type="Frozen, Freeze-Dried &amp; Dehydrated Food" data-title="New Dog Food" data-price="50" data-age="0" data-gender="0">
                          <img src="https://thebullysupply.com/wp-content/themes/amtopm-child/uploaded/listing/1732896922_FCM05042.1.jpg" alt="New Dog Food" />

                          <span class="favourite-button" data-listing-id="168" data-user-id="5" data-action="remove">
                              <i class="fa fa-heart" aria-hidden="true"></i>
                          </span>
                          <h3>New Dog Food</h3>
                          <div class="meta">Category: Frozen, Freeze-Dried &amp; Dehydrated Food</div>
                          <div class="price">$50</div>
                      </a>
                      <a href="/product-detail/?id=166" class="h_product-card ruk-test" data-category="Dry Food Wet Food48" data-state="TX" data-stock="" data-type="Dry Food Wet Food" data-title="Solid Gold" data-price="9" data-age="0" data-gender="0">
                          <img src="https://thebullysupply.com/wp-content/themes/amtopm-child/uploaded/listing/1732548667_Solid-Gold-.jpg" alt="Solid Gold" />
                          <span class="favourite-button" data-listing-id="166" data-user-id="5" data-action="add">
                              <i class="fa fa-heart-o" aria-hidden="true"></i>
                          </span>
                          <h3>Solid Gold</h3>
                          <div class="meta">Category: Dry Food Wet Food</div>
                          <div class="price">$9</div>
                      </a>
                      <a href="/product-detail/?id=165" class="h_product-card ruk-test" data-category="Health Supplements51" data-state="IL" data-stock="" data-type="Health Supplements" data-title="Health Supplement" data-price="12" data-age="0" data-gender="0">
                          <img src="https://thebullysupply.com/wp-content/themes/amtopm-child/uploaded/listing/1732548466_3840x0 (1).png" alt="Health Supplement" />
                          <span class="favourite-button" data-listing-id="165" data-user-id="5" data-action="remove">
                              <i class="fa fa-heart" aria-hidden="true"></i>
                          </span>
                          <h3>Health Supplement</h3>
                          <div class="meta">Category: Health Supplements</div>
                          <div class="price">$12</div>
                      </a>
                      <a href="/product-detail/?id=164" class="h_product-card ruk-test" data-category="Health Supplements51" data-state="TX" data-stock="" data-type="Health Supplements" data-title="Natural Multivitamins" data-price="15" data-age="0" data-gender="0">
                          <img src="https://thebullysupply.com/wp-content/themes/amtopm-child/uploaded/listing/1732548312_Natural Multivitamins.jpg" alt="Natural Multivitamins" />
                          <span class="favourite-button" data-listing-id="164" data-user-id="5" data-action="add">
                              <i class="fa fa-heart-o" aria-hidden="true"></i>
                          </span>
                          <h3>Natural Multivitamins</h3>
                          <div class="meta">Category: Health Supplements</div>
                          <div class="price">$15</div>
                      </a>
                      <a href="/product-detail/?id=151" class="h_product-card ruk-test" data-category="American Bully61" data-state="CA" data-stock="" data-type="American Bully" data-title="American" data-price="1111" data-age="6" data-gender="1">
                          <img src="https://thebullysupply.com/wp-content/themes/amtopm-child/uploaded/listing/1732303573_9pip1oohtsh91.jpg" alt="American" />
                          <span class="favourite-button" data-listing-id="151" data-user-id="5" data-action="remove">
                              <i class="fa fa-heart" aria-hidden="true"></i>
                          </span>
                          <h3>American</h3>
                          <div class="meta">Category: American Bully</div>
                          <div class="price">$1111</div>
                      </a>
                      <a href="/product-detail/?id=128" class="h_product-card ruk-test" data-category="Beds191" data-state="TX" data-stock="" data-type="Beds" data-title="Dog bed" data-price="60" data-age="0" data-gender="0">
                          <img src="https://thebullysupply.com/wp-content/themes/amtopm-child/uploaded/listing/1732137783_Dog bed.jpg" alt="Dog bed" />
                          <span class="favourite-button" data-listing-id="128" data-user-id="5" data-action="add">
                              <i class="fa fa-heart-o" aria-hidden="true"></i>
                          </span>
                          <h3>Dog bed</h3>
                          <div class="meta">Category: Beds</div>
                          <div class="price">$60</div>
                      </a>
                      <a href="/product-detail/?id=126" class="h_product-card ruk-test" data-category="Dogo Argentino154" data-state="IL" data-stock="" data-type="Dogo Argentino" data-title="Dogo Argentino" data-price="6500" data-age="4" data-gender="1">
                          <img src="https://thebullysupply.com/wp-content/themes/amtopm-child/uploaded/listing/1732137487_Dogo Argentino.jpg" alt="Dogo Argentino" />
                          <span class="favourite-button" data-listing-id="126" data-user-id="5" data-action="remove">
                              <i class="fa fa-heart" aria-hidden="true"></i>
                          </span>
                          <h3>Dogo Argentino</h3>
                          <div class="meta">Category: Dogo Argentino</div>
                          <div class="price">$6500</div>
                      </a>
                  </div>                
                </div>
             </section>              
            </div>
        </div>
    </div>

  
     <Footer />
    </>
  )
}

export default Category
