import React, { useState, useRef } from 'react';
const imagePath = '/images/mobilemenu.png';
function MegaMenu() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [visibleMenus, setVisibleMenus] = useState({ subMenu: null, subSubMenu: null });
  
  // References
  const allCategoriesLinkRef = useRef(null);
  const categoriesDropdownRef = useRef(null);
  
  // Toggle Dropdown
  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsDropdownVisible(!isDropdownVisible);
  };
  
  // Toggle Sub Menu
  const toggleSubMenu = (index) => {
    setVisibleMenus((prevState) => ({
      ...prevState,
      subMenu: prevState.subMenu === index ? null : index,
      subSubMenu: null,  // Reset sub-sub-menu when going back to the main category
    }));
  };

  // Toggle Sub-Sub Menu
  const toggleSubSubMenu = (index) => {
    setVisibleMenus((prevState) => ({
      ...prevState,
      subSubMenu: prevState.subSubMenu === index ? null : index,
    }));
  };

  // Go back to previous menu
  const goBackToMenu = () => {
    setVisibleMenus({ subMenu: null, subSubMenu: null });
  };

  // Go back to sub-menu
  const goBackToSubMenu = () => {
    setVisibleMenus((prevState) => ({
      ...prevState,
      subSubMenu: null,
    }));
  };

  return (
    <div className="header-categories">
      <a href="#" ref={allCategoriesLinkRef}
        className="header-all-categories" onClick={toggleDropdown}>                        
            <img src={imagePath} alt="" />
      </a>

      <div ref={categoriesDropdownRef} className="header-categories-dropdown" style={{ display: isDropdownVisible ? "block" : "none" }}>
        <div className="sign-in-up">
            <a href='#' className="btn btn-sign-in" type="button">Sign In</a>
            <a href='#' className="btn btn-sign-up" type="button">Sign Up</a>
        </div>
        {/* First category with sub and sub-sub menus */}
        <div className="category-item">
          <li onClick={() => toggleSubMenu(0)} className="category-item-button">
            <span>Bully</span> <i class="fa fa-angle-right" aria-hidden="true"></i>
          </li>
          <div className="sub-menu"
            style={{ display: visibleMenus.subMenu === 0 ? "block" : "none" }}>
            {/* Sub-menu items */}
              <span onClick={goBackToMenu} className="back-button">
                <i class="fa fa-chevron-left" aria-hidden="true"></i>
              </span><br />              
            <div className="sub-category-item">
              <a href="#" onClick={() => toggleSubSubMenu(1)} className="sub-category-item-button">
                <ul>
                    <li><a href="#">Pups</a> <span><i class="fa fa-angle-right" aria-hidden="true"></i></span></li>
                </ul>
                </a>
              <div className="sub-sub-menu"
                style={{ display: visibleMenus.subSubMenu === 1 ? "block" : "none" }}>
                {/* Back to Sub-Category button */}
                <span onClick={goBackToSubMenu} className="back-button">
                    <i class="fa fa-chevron-left" aria-hidden="true"></i>
                </span>

                {/* Sub-sub-menu content */}
                <div className='mobile-sub-sub-menu'>
                    <ul>
                        <li><a href="#">American Bulldog</a></li>
                        <li><a href="#">American Bully</a></li>
                        <li><a href="#">American Bully Classic</a></li>
                        <li><a href="#">American Bully Extreme</a></li>
                        <li><a href="#">American Bully Pocket</a></li>
                        <li><a href="#">American Bully Standard</a></li>
                        <li><a href="#">American Bully XL</a></li>
                        <li><a href="#">American Pit Bull Terrier</a></li>
                        <li><a href="#">Boston Terrier</a></li>
                        <li><a href="#">Boxer</a></li>
                        <li><a href="#">Bull Mastiff</a></li>
                        <li><a href="#">Bull Terrier</a></li>
                    </ul>
                </div>
              </div>
            </div>

            <div className="sub-category-item">
              <a href="#" onClick={() => toggleSubSubMenu(2)} className="sub-category-item-button">
                <ul>
                    <li><a href="#">Studs</a> <span><i class="fa fa-angle-right" aria-hidden="true"></i></span></li>
                </ul>
                </a>
              <div className="sub-sub-menu"
                style={{ display: visibleMenus.subSubMenu === 2 ? "block" : "none" }}>
                {/* Back to Sub-Category button */}
                <span onClick={goBackToSubMenu} className="back-button">
                    <i class="fa fa-chevron-left" aria-hidden="true"></i>
                </span>

                {/* Sub-sub-menu content */}
                <div className='mobile-sub-sub-menu'>
                    <ul>
                        <li><a href="#">American Bulldog Studs</a></li>
                        <li><a href="#">American Bully</a></li>
                        <li><a href="#">American Bully Classic</a></li>
                        <li><a href="#">American Bully Extreme</a></li>
                        <li><a href="#">American Bully Pocket</a></li>
                        <li><a href="#">American Bully Standard</a></li>
                        <li><a href="#">American Bully XL</a></li>
                        <li><a href="#">American Pit Bull Terrier</a></li>
                        <li><a href="#">Boston Terrier</a></li>
                        <li><a href="#">Boxer</a></li>
                        <li><a href="#">Bull Mastiff</a></li>
                    </ul>
                </div>
              </div>
            </div>

            <div className="sub-category-item">
              <a href="#" onClick={() => toggleSubSubMenu(3)} className="sub-category-item-button">
                <ul>
                    <li><a href="#">Breeders</a><span><i class="fa fa-angle-right" aria-hidden="true"></i></span></li>
                </ul>
                </a>
              <div className="sub-sub-menu"
                style={{ display: visibleMenus.subSubMenu === 3 ? "block" : "none" }}>
                {/* Back to Sub-Category button */}
                <span onClick={goBackToSubMenu} className="back-button">
                    <i class="fa fa-chevron-left" aria-hidden="true"></i>
                </span>

                {/* Sub-sub-menu content */}
                <div className='mobile-sub-sub-menu'>
                    <ul>
                        <li><a href="#">American Breeders</a></li>
                        <li><a href="#">American Bully</a></li>
                        <li><a href="#">American Bully Classic</a></li>
                        <li><a href="#">American Bully Extreme</a></li>
                        <li><a href="#">American Bully Pocket</a></li>
                        <li><a href="#">American Bully Standard</a></li>
                        <li><a href="#">American Bully XL</a></li>
                        <li><a href="#">American Pit Bull Terrier</a></li>
                        <li><a href="#">Boston Terrier</a></li>
                        <li><a href="#">Boxer</a></li>
                        <li><a href="#">Bull Mastiff</a></li>
                        <li><a href="#">Bull Terrier</a></li>
                    </ul>
                </div>
              </div>
            </div>

            <div className="sub-category-item">
              <a href="#" onClick={() => toggleSubSubMenu(4)} className="sub-category-item-button">
                <ul>
                    <li><a href="#">Breedings</a><span><i class="fa fa-angle-right" aria-hidden="true"></i></span></li>
                </ul>
                </a>
              <div className="sub-sub-menu"
                style={{ display: visibleMenus.subSubMenu === 4 ? "block" : "none" }}>
                {/* Back to Sub-Category button */}
                <span onClick={goBackToSubMenu} className="back-button">
                    <i class="fa fa-chevron-left" aria-hidden="true"></i>
                </span>

                {/* Sub-sub-menu content */}
                <div className='mobile-sub-sub-menu'>
                    <ul>
                        <li><a href="#">American Breedings</a></li>
                        <li><a href="#">American Bully</a></li>
                        <li><a href="#">American Bully Classic</a></li>
                        <li><a href="#">American Bully Extreme</a></li>
                        <li><a href="#">American Bully Pocket</a></li>
                        <li><a href="#">American Bully Standard</a></li>
                        <li><a href="#">American Bully XL</a></li>
                        <li><a href="#">American Pit Bull Terrier</a></li>
                        <li><a href="#">Boston Terrier</a></li>
                        <li><a href="#">Boxer</a></li>
                        <li><a href="#">Bull Mastiff</a></li>
                        <li><a href="#">Bull Terrier</a></li>
                    </ul>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Static remaining category items */}
        <div className="category-item">            
          <li onClick={() => toggleSubMenu(1)} className="category-item-button">
            Supplies <i class="fa fa-angle-right" aria-hidden="true"></i>
          </li>
          <div className="sub-menu"
            style={{ display: visibleMenus.subMenu === 1 ? "block" : "none" }}>
            {/* Sub-menu items */}
            <span onClick={goBackToMenu} className="back-button">
                <i class="fa fa-chevron-left" aria-hidden="true"></i>
              </span><br />                     
            {/* Sub-menu content */}
            <ul className='mobile-sub-menu'>
                <li><a href="#">Beds</a></li>
                <li><a href="#">Bowls & Feeders</a></li>
                <li><a href="#">Bully Clothing & Accessories</a></li>
                <li><a href="#">Carriers & Travel</a></li>
                <li><a href="#">Collars, Leashes, Harnesses & Vest</a></li>
                <li><a href="#">Crates, Pens & Gates</a></li>
                <li><a href="#">Technology & Miscellaneous</a></li>
                <li><a href="#">Toys</a></li>
                <li><a href="#">Training & Behavior</a></li>
            </ul>
          </div>
        </div>

        <div className="category-item">
          <li onClick={() => toggleSubMenu(2)} className="category-item-button">
            Food & Supplements <i class="fa fa-angle-right" aria-hidden="true"></i>
          </li>
          <div className="sub-menu"
            style={{ display: visibleMenus.subMenu === 2 ? "block" : "none" }}>
            <span onClick={goBackToMenu} className="back-button">
                <i class="fa fa-chevron-left" aria-hidden="true"></i>
              </span><br />                  
            {/* Sub-menu content */}
            <ul className='mobile-sub-menu'>
                <li><a href="#">Anxiety & Calming</a></li>
                <li><a href="#">Dry Food Wet Food</a></li>
                <li><a href="#">Food Toppings</a></li>
                <li><a href="#">Frozen, Freeze-Dried & Dehydrated Food</a></li>
                <li><a href="#">Health Supplements</a></li>
                <li><a href="#">Muscle, Mass & Performance</a></li>
                <li><a href="#">Raw Food, Fresh & Prepared Meals</a></li>
                <li><a href="#">Treats</a></li>
                <li><a href="#">Vitamins & Multivitamins</a></li>
            </ul>
          </div>
        </div>

        <div className="category-item">
          <li onClick={() => toggleSubMenu(3)} className="category-item-button">
            Care & Services <i class="fa fa-angle-right" aria-hidden="true"></i>
          </li>
          <div className="sub-menu"
            style={{ display: visibleMenus.subMenu === 3 ? "block" : "none" }}>
            <span onClick={goBackToMenu} className="back-button">
                <i class="fa fa-chevron-left" aria-hidden="true"></i>
              </span><br />                  
            {/* Sub-menu content */}
            <ul className='mobile-sub-menu'>
                <li><a href="#">Care</a></li>
                <li><a href="#">General Services</a></li>
                <li><a href="#">Merchandise Services</a></li>
                <li><a href="#">Nannies, Shippers & Transportation Services</a></li>
            </ul>
          </div>
        </div>

        <div className="otherpages">
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Blogs</a></li>
                <li><a href="#">Help</a></li>
                <li><a href="#">Favorites</a></li>
                <li><a href="#">Settings</a></li>
            </ul>
        </div>
        
      </div>
    </div>
  );
}

export default MegaMenu;


// export default MegaMenu;


