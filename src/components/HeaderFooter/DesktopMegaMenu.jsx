import React, { useState, useRef, useEffect } from 'react';

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

  return (
    <div>
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
          <li className="category-item has-children" ref={firstCategoryRef}
            onMouseEnter={(e) => handleMouseEnter(e.currentTarget.querySelector('.sub-menu'))}
            onMouseLeave={(e) => handleMouseLeave(e.currentTarget.querySelector('.sub-menu'), e, e.currentTarget) } >
            Bully
            <ul className="sub-menu">
              <li className="sub-category-item"
                onMouseEnter={(e) => handleMouseEnter(e.currentTarget.querySelector('.sub-sub-menu')) }
                onMouseLeave={(e) => handleMouseLeave( e.currentTarget.querySelector('.sub-sub-menu'), e, e.currentTarget ) } >
                Bullies
                <ul className="sub-sub-menu">
                  <li>American Bullies</li>
                  <li>American Bully</li>
                </ul>
              </li>
              <li className="sub-category-item"
                onMouseEnter={(e) => handleMouseEnter(e.currentTarget.querySelector('.sub-sub-menu')) }
                onMouseLeave={(e) => handleMouseLeave( e.currentTarget.querySelector('.sub-sub-menu'), e, e.currentTarget ) } >
                Pups 
                <ul className="sub-sub-menu">
                    <li>American Pups</li>
                    <li>American Bully</li>
                </ul>
              </li>
            </ul>
          </li>
          <li
            className="category-item"
            onMouseEnter={(e) => handleMouseEnter(e.currentTarget.querySelector('.sub-menu'))}
            onMouseLeave={(e) =>
              handleMouseLeave(e.currentTarget.querySelector('.sub-menu'), e, e.currentTarget)
            }
          >
            Category 2
            <ul className="sub-menu">
              <li>Sub-category 3</li>
              <li>Sub-category 4</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DesktopMegaMenu;



