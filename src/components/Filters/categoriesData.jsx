import React,{useState, useEffect} from "react";
import CategoryMenu from "./CategoryMenu";

const CategoryData = () => {

  return (
    <div className="cta-data">
            <CategoryMenu />
      {/* <CategoryMenu categories={categoriesData} /> */}
    </div>
  );
};

export default CategoryData;
