import React, { useState } from "react";
import { useFilter } from '../../Context/FilterContext';

// const CategoryMenu = ({ categories }) => {
const CategoryMenu = () => {

  const { sidebarCategories, updateSelectedCategories } = useFilter();

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    updateSelectedCategories(value, checked);
  };

  console.log("Side Bar Context API", sidebarCategories);

  const [openCategory, setOpenCategory] = useState(null); // Tracks open main category
  const [openSubCategory, setOpenSubCategory] = useState(null); // Tracks open subcategory

  // Toggle main category
  const toggleCategory = (category) => {
    setOpenCategory((prev) => (prev === category ? null : category));
    setOpenSubCategory(null); // Reset subcategory when toggling a new main category
  };

  // Toggle subcategory
  const toggleSubCategory = (subCategory) => {
    setOpenSubCategory((prev) => (prev === subCategory ? null : subCategory));
  };

  // const { selectedCategories, toggleFilterCategory } = useFilter();

    // console.log(selectedCategories)

  return (
    <div className="category-menu">
      {/* Step 1: Main Categories */}
      <div className="filter-group filter-group-categories left-sidebar-cta-group parent-gro">
        {sidebarCategories.map((category) => (
          <div key={category.name} className="filter-content filter-group-content subsub-cta124 left-sidebar-child-group">
            {/* Main Category */}
            <div class="filter-title parent-cta left-sidebar-cta-label" onClick={() => toggleCategory(category)}
                style={{ cursor: "pointer", padding: "8px", fontWeight: "bold" }}>
            <span class="input-label" data-category={category.name}>
                <input type="checkbox" name="child_categories" value={category.name} />{category.name}
            </span> 
            <i class="fa fa-chevron-down" aria-hidden="true"></i> 
            </div>            

            {/* Subcategories (Toggle visibility) */}
            {openCategory === category && (
              <div className="filter-content filter-group-content subsub-cta124 left-sidebar-child-group" style={{ marginLeft: "20px", marginTop: "10px" }}>
                {category.sub_categories.map((subCategory) => (
                  <div key={subCategory.name} className="subcategory-item">
                    {/* Subcategory */}
                    <div class="filter-title parent-cta left-sidebar-cta-label" onClick={() => toggleSubCategory(subCategory)}
                        style={{ cursor: "pointer", padding: "5px", fontStyle: "italic" }} >
                        <span class="input-label" data-category={subCategory.name}>
                            <input type="checkbox" name="child_categories" value={subCategory.name} />{subCategory.name}
                        </span> 
                        <i class="fa fa-chevron-down" aria-hidden="true"></i>
                    </div>

                    {/* Sub-Subcategories (Toggle visibility) */}
                    {openSubCategory === subCategory && (
                      <div className="subsubcategory-list"
                        style={{
                          marginLeft: "20px",
                          marginTop: "5px",
                          borderLeft: "1px dashed gray",
                          paddingLeft: "10px",
                        }} >
                        {subCategory.sub_sub_categories.map((subSubCategory) => (
                        <div class="filter-content filter-group-content subsub-cta124 left-sidebar-child-group" key={subSubCategory.name}>
                        <input
                            type="checkbox"
                            name="categories"
                            value={`${subSubCategory.name}${subSubCategory.id}`}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor={`category-${subSubCategory.id}`}>
                            {subSubCategory.name}
                        </label><br />
                        </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;
