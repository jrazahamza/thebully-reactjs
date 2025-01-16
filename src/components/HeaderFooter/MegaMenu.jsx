import React, { useState, useRef, useEffect } from 'react';
const imagePath = '/images/mobilemenu.png';
import axiosUrl from '../../config/axiosUrl'

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


 
  
 // State to hold categories data
 const [categories, setCategories] = useState([]);
 const [loading, setLoading] = useState(true);

//  console.log("froma api",categories);

 // Fetch categories data when component mounts
 useEffect(() => {
  axiosUrl.get('/categories')  // Laravel API endpoint for fetching categories
         .then((response) => {
             setCategories(response.data.main_categories);
             setLoading(false);
         })
         .catch((error) => {
             console.error("There was an error fetching the categories:", error);
             setLoading(false);
         });
 }, []);

// console.log("Data From Api",categories)

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

        <div className='mobile-mega-menu-list'>
        {categories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="category-item">
          <li
            onClick={() => toggleSubMenu(categoryIndex)}
            className="category-item-button"
          >
            {category.name}{" "}
            <i className="fa fa-angle-right" aria-hidden="true"></i>
          </li>

          {category.sub_categories && (
            <div
              className="sub-menu"
              style={{
                display: visibleMenus.subMenu === categoryIndex ? "block" : "none",
              }}
            >
              <span onClick={goBackToMenu} className="back-button">
                <i className="fa fa-chevron-left" aria-hidden="true"></i>
              </span>

              {category.sub_categories.map((subCategory, subCategoryIndex) => (
                <div key={subCategoryIndex} className="sub-category-item">
                  <a
                    href="#"
                    onClick={() =>
                      toggleSubSubMenu(
                        `${categoryIndex}-${subCategoryIndex}`
                      )
                    }
                    className="sub-category-item-button"
                  >
                    <ul>
                      <li>
                        <a href="#">{subCategory.name}</a>{" "}
                        <span>
                          <i className="fa fa-angle-right" aria-hidden="true"></i>
                        </span>
                      </li>
                    </ul>
                  </a>

                  {subCategory.sub_sub_categories && (
                    <div
                      className="sub-sub-menu"
                      style={{
                        display:
                          visibleMenus.subSubMenu ===
                          `${categoryIndex}-${subCategoryIndex}`
                            ? "block"
                            : "none",
                      }}
                    >
                      <span onClick={goBackToSubMenu} className="back-button">
                        <i className="fa fa-chevron-left" aria-hidden="true"></i>
                      </span>

                      <div className="mobile-sub-sub-menu">
                        <ul>
                          {subCategory.sub_sub_categories.map(
                            (subSubCategory, subSubCategoryIndex) => (
                              <li key={subSubCategoryIndex}>
                                <a href="#">{subSubCategory.name}</a>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
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


