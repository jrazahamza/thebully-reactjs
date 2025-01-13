import React, { useState } from "react";

const FilterToggle = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleFilter = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className={`filter-item ${isExpanded ? "" : "collapsed"}`}>
      <div className="filter-title parent-cta left-sidebar-cta-label" onClick={toggleFilter} style={{ cursor: "pointer" }} >
        {title}
        <i className={`fa ${isExpanded ? "fa-chevron-up" : "fa-chevron-down"}`} style={{ marginLeft: "8px" }}></i>
      </div>
      <div className="filter-content" style={{ display: isExpanded ? "block" : "none" }} >
        {children}
      </div>
    </div>
  );
};

export default FilterToggle;
