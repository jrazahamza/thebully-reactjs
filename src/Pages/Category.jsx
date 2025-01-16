import React, { useEffect, useState } from 'react'
import Header from '../components/HeaderFooter/DesktopHeader'
import Footer from '../components/HeaderFooter/Footer'
import CtaFilter from '../components/Filters/categoriesData';
import PriceFilter from '../components/Filters/PriceFilter';
import AgeFilter from '../components/Filters/AgeFilter';
import axiosUrl from '../config/axiosUrl'
import CtaproListing from '../components/List/CtaproListing';
import { FilterProvider } from '../Context/FilterContext';
import GenderFilter from '../components/Filters/GenderFilter';

function Category() {


// State to hold categories data
const [ctalisting, setCtalisting] = useState([]);    
// Fetch categories data when component mounts listingsBullies
useEffect(() => {
   axiosUrl.get('/sidebaar_categories')  // Laravel API endpoint for fetching categories
          .then((response) => {
           // console.log("RUK API ", response.data.listingsBullies);
           setCtalisting(response.data.listings);
           //    setLoading(false);
          })
          .catch((error) => {
              console.error("There was an error fetching the categories:", error);
           //    setLoading(false);
          });
  }, []);

//   console.log("Bullies Form API",ctalisting);

  return (
    <>
    <Header />
    {/* <!-- Category Content Section --> */}
    <FilterProvider>
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
                            <GenderFilter />         
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

                <CtaproListing />

             </section>              
            </div>
        </div>
    </div>
    </FilterProvider>
  
     <Footer />
    </>
  )
}

export default Category
