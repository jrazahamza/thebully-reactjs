import React, { useState } from "react";

const CategoryMenu = ({ categories }) => {
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

  return (
    <div className="category-menu">
      {/* Step 1: Main Categories */}
      <div className="filter-group filter-group-categories left-sidebar-cta-group parent-gro">
        {categories.map((category) => (
          <div key={category.name} className="filter-content filter-group-content subsub-cta124 left-sidebar-child-group">
            {/* Main Category */}
            <div class="filter-title parent-cta left-sidebar-cta-label" onClick={() => toggleCategory(category)}
                style={{ cursor: "pointer", padding: "8px", fontWeight: "bold" }}>
            <span class="input-label">
                <input type="checkbox" name="child_categories" value="1" />{category.name}
            </span> 
            <i class="fa fa-chevron-down" aria-hidden="true"></i> 
            </div>            

            {/* Subcategories (Toggle visibility) */}
            {openCategory === category && (
              <div className="filter-content filter-group-content subsub-cta124 left-sidebar-child-group" style={{ marginLeft: "20px", marginTop: "10px" }}>
                {category.subCategories.map((subCategory) => (
                  <div key={subCategory.name} className="subcategory-item">
                    {/* Subcategory */}
                    <div class="filter-title parent-cta left-sidebar-cta-label" onClick={() => toggleSubCategory(subCategory)}
                        style={{ cursor: "pointer", padding: "5px", fontStyle: "italic" }} >
                        <span class="input-label">
                            <input type="checkbox" name="child_categories" value="33" />{subCategory.name}
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
                        {subCategory.subSubCategories.map((subSubCategory) => (
                        //   <div key={subSubCategory.name} className="subsubcategory-item">
                        //     {subSubCategory.name}
                        //   </div>
                        <div class="filter-content filter-group-content subsub-cta124 left-sidebar-child-group" key={subSubCategory.name}>
                            <input type="checkbox" name="categories" value="American Bulldog60" id="category-60" />
                            <label for="category-60">{subSubCategory.name}</label><br />
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
