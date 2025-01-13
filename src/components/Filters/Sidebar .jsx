import React from "react";
import FilterToggle from "./FilterToggle";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <FilterToggle title="Filter 1">
        <p>Filter content for Filter 1</p>
      </FilterToggle>
      
      <FilterToggle title="Filter 2">
        <p>Filter content for Filter 2</p>
      </FilterToggle>
      <FilterToggle title="Filter 3">
        <p>Filter content for Filter 3</p>
      </FilterToggle>
    </div>
  );
};

export default Sidebar;
