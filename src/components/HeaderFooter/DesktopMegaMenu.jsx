import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
const DesktopMegaMenu = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);
  const allCategoriesLinkRef = useRef(null);
  const firstCategoryRef = useRef(null);
  const hasFirstCategoryDisplayed = useRef(false);

  const showMenu = (menu) => {
    if (menu) menu.style.display = 'block';
  };

  const hideMenu = (menu) => {
    if (menu) menu.style.display = 'none';
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    setDropdownVisible((prev) => {
      if (!prev && !hasFirstCategoryDisplayed.current) {
        // Show sub-menu and sub-sub-menu for the first category item on the first click
        const firstCategoryItem = firstCategoryRef.current;
        if (firstCategoryItem) {
          const firstSubMenu = firstCategoryItem.querySelector('.sub-menu');
          if (firstSubMenu) {
            showMenu(firstSubMenu);

            // Show all sub-sub-menus within the first sub-menu
            firstSubMenu.querySelectorAll('.sub-sub-menu').forEach((subSubMenu) => {
              showMenu(subSubMenu);
            });
          }
        }
        hasFirstCategoryDisplayed.current = true;
      }
      return !prev;
    });
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        e.target !== allCategoriesLinkRef.current
      ) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  const handleMouseEnter = (menu) => showMenu(menu);
  const handleMouseLeave = (menu, event, container) => {
    if (menu && !container.contains(event.relatedTarget)) hideMenu(menu);
  };


  const categoriesData = [
    {
      name: "Bully",
      subCategories: [
        {
          name: "Bullies",
          subSubCategories: [
            { name: "American Bulldog" },
            { name: "American Bully" },
            { name: "American Bully Classic" },
            { name: "American Bully Extreme" },
            { name: "American Bully Extreme" },
            { name: "American Bully Pocket" },
            { name: "American Bully Standard" },
            { name: "American Bully XL" },
            { name: "American Pit Bull Terrier" },
            { name: "American Staffordshire Terrier" },
            { name: "Boston Terrier" },
            { name: "Boxer" },
            { name: "Bull Mastiff" },
            { name: "Bull Terrier" },
            { name: "Cane Corso" },
            { name: "Doberman" },
            { name: "DobermanDogo Argentino" },
            { name: "Dogue De Bordeaux" },
            { name: "Dogue De Bordeaux" },
          ],
        },
        {
          name: "Pups",
          subSubCategories: [
              { name: "American Bulldog" },
              { name: "American Bully" },
              { name: "American Bully Classic" },
          ],
        },
        {
          name: "Studs",
          subSubCategories: [
              { name: "Boxer" },
              { name: "Bull Mastiff" },
              { name: "Bull Terrier" },
          ],
        },
        {
          name: "Breeders",
          subSubCategories: [
              { name: "American Bully Classic" },
              { name: "American Bully Extreme" },
              { name: "American Bully Extreme" },
              { name: "American Bully Pocket" },
          ],
        },
        {
          name: "Breedings",
          subSubCategories: [
              { name: "DobermanDogo Argentino" },
              { name: "Dogue De Bordeaux" },
              { name: "Dogue De Bordeaux" },
          ],
        },
      ],
    },
    {
      name: "Supplies",
      subCategories: [
        {
          name: "Beds",
          subSubCategories: [
            { name: "Beds" },
            { name: "Blankets" },
            { name: "Furniture" },
          ],
        },
        {
          name: "Bowls & Feeders",
          subSubCategories: [
            { name: "Feeders" },
            { name: "Placemats" },
          ],
        },      
        {
          name: "Carriers & Travel",
          subSubCategories: [
            { name: "Carriers" },
            { name: "Kennels" },
            { name: "Travel Aids" },
          ],
        },      
        {
          name: "Toys",
          subSubCategories: [
            { name: "Chew Toys" },
            { name: "Plush Toys" },
            { name: "Fetch Toys" },
          ],
        },
      ],
    },
    {
      name: "Food & Supplements",
      subCategories: [
        { name: "Anxiety & Calming" },
        { name: "Dry Food Wet Food" },
        { name: "Food Toppings" },
        { name: "Health Supplements" },
        { name: "Treats" },
      ],
    },
    {
      name: "Care & Services",
      subCategories: [
        {
          name: "Care",
          subSubCategories: [
            { name: "Dental Care" },
            { name: "DNA Test" },
            { name: "Ear Care" },
            { name: "Eye Care" },
            { name: "Skin Care" },
          ],
        },
        {
          name: "General Services",
          subSubCategories: [
            { name: "Boarding" },
            { name: "Pet Sitting" },
            { name: "Ultrasound" },
            { name: "Veterinary" },
          ],
        },
        {
          name: "Merchandise Services",
          subSubCategories: [
            { name: "Accessories" },
            { name: "Banners" },
            { name: "Hats" },
            { name: "Logos" },
            { name: "Stickers" },
          ],
        },
      ],
    },
  ];
  

  
    // State to hold categories data
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    // console.log("froma api",categories);
    // console.log("static data", categoriesData);
    // Fetch categories data when component mounts
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/categories')  // Laravel API endpoint for fetching categories
            .then((response) => {
                setCategories(response.data.main_categories);
                setLoading(false);
            })
            .catch((error) => {
                console.error("There was an error fetching the categories:", error);
                setLoading(false);
            });
    }, []);

  return (
    <div className='all-cta-list'>
    {/* All Categories Link */}
    <a
      href="#"
      className="header-all-categories"
      onClick={toggleDropdown}
      ref={allCategoriesLinkRef}
    >
      All Categories
    </a>
  
    {/* Dropdown Menu */}
    <div
      className="header-categories-dropdown"
      ref={dropdownRef}
      style={{ display: isDropdownVisible ? 'block' : 'none' }}
    >
      <ul>
        {categories.map((category, categoryIndex) => (
          <li
            key={`category-${categoryIndex}`}
            className={`category-item ${category.subCategories ? 'has-children' : ''}`}
            onMouseEnter={(e) =>
              handleMouseEnter(e.currentTarget.querySelector('.sub-menu'))
            }
            onMouseLeave={(e) =>
              handleMouseLeave(
                e.currentTarget.querySelector('.sub-menu'),
                e,
                e.currentTarget
              )
            }
          >
            {category.name}
            {category.sub_categories && (
              <ul className="sub-menu">
                {category.sub_categories.map((subCategory, subCategoryIndex) => (
                  <li
                    key={`sub-category-${subCategoryIndex}`}
                    className="sub-category-item"
                    onMouseEnter={(e) =>
                      handleMouseEnter(e.currentTarget.querySelector('.sub-sub-menu'))
                    }
                    onMouseLeave={(e) =>
                      handleMouseLeave(
                        e.currentTarget.querySelector('.sub-sub-menu'),
                        e,
                        e.currentTarget
                      )
                    }
                  >
                    {subCategory.name}
                    {subCategory.sub_sub_categories && (
                      <ul className="sub-sub-menu">
                        {subCategory.sub_sub_categories.map(
                          (subSubCategory, subSubCategoryIndex) => (
                            <li key={`sub-sub-category-${subSubCategoryIndex}`}>
                              {subSubCategory.name}
                            </li>
                          )
                        )}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  </div>  
  );
};

export default DesktopMegaMenu;



