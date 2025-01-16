import React from 'react'
import { useFilter } from '../../Context/FilterContext';




function CtaproListing() {    

    const { filteredList } = useFilter();
    // console.log("from context api", filteredList)

  return (
    <>
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
            {
            filteredList.map((ctalist, index) => (                    
                <a key={index} href="#" class="h_product-card ruk-test" data-category={ctalist.category_names_with_ids} data-state={ctalist.state} data-stock="" data-type="American Bully" data-title="TESTING %S" data-price={ctalist.price} data-age={ctalist.age} data-gender={ctalist.gender} >
                    <img src={`http://127.0.0.1:8000${ctalist.gallery1}`} alt="TESTING %S" />
                    <span class="favourite-button" data-listing-id="181" data-user-id="5" data-action="add">
                        <i class="fa fa-heart-o" aria-hidden="true"></i>
                    </span>
                    <h3>{ctalist.title}</h3>
                    <div class="meta">Category: {ctalist.category_names}</div>
                    <div class="price">{ctalist.price}</div>
                    {/* <div class="price">{ctalist.gender}</div> */}
                </a>
                ))
                }                                            
            </div>         
        </div>
      
    </>
  )
}

export default CtaproListing
