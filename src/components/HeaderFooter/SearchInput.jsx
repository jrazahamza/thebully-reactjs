import React, { useState, useEffect, useRef } from "react";

const SearchInput = () => {
  const [showSearch, setShowSearch] = useState(false);
  const searchBoxRef = useRef(null);

  const toggleSearch = () => {
    setShowSearch((prevShowSearch) => !prevShowSearch);
  };

  const handleClickOutside = (event) => {
    if (
      searchBoxRef.current &&
      !searchBoxRef.current.contains(event.target)
    ) {
      setShowSearch(false); // Close the search box if clicked outside
    }
  };

  useEffect(() => {
    // Add event listener when the component mounts
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Cleanup the event listener when the component unmounts
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="top-header">
      {/* Search Input and Dropdown */}
      {showSearch && (
        <div className="search-box" ref={searchBoxRef}>
          {/* <select className="search-dropdown">
            <option value="all">All</option>
            <option value="products">Products</option>
            <option value="categories">Categories</option>
          </select> */}
          <input
            type="text"
            className="search-input"
            placeholder="Search..."
          />
        </div>
      )}
      {/* Search Icon */}
      <div className="search-icon" onClick={toggleSearch} style={{ cursor: "pointer" }} >
        <i className="fa fa-search" aria-hidden="true"></i>
      </div>      
    </div>
  );
};

export default SearchInput;



// export default SearchInput
