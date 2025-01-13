import React, { useState } from "react";

const AgeFilter = () => {
  // State for min and max ages
  const [minAge, setMinAge] = useState(0);
  const [maxAge, setMaxAge] = useState(100);

  // Handler for min age input change
  const handleMinAgeChange = (e) => {
    let value = parseInt(e.target.value, 10);
    if (value >= maxAge) {
      value = maxAge - 5; // Ensure minAge is less than maxAge
    }
    setMinAge(value);
  };

  // Handler for max age input change
  const handleMaxAgeChange = (e) => {
    let value = parseInt(e.target.value, 10);
    if (value <= minAge) {
      value = minAge + 5; // Ensure maxAge is greater than minAge
    }
    setMaxAge(value);
  };

  return (
    <div className="ruk-price-filter filter-age">
      <label htmlFor="age" className="age">Age</label>
      <div className="age-filter-group">
        {/* Slider Container */}
        <div className="slider-container">
          <input
            type="range"
            id="ruk-min-age"
            name="ruk-min-age"
            min="0"
            max="100"
            step="5"
            value={minAge}
            onChange={handleMinAgeChange}
          />
          <input
            type="range"
            id="ruk-max-age"
            name="ruk-max-age"
            min="0"
            max="100"
            step="5"
            value={maxAge}
            onChange={handleMaxAgeChange}
          />
        </div>

        {/* Display Min and Max Age */}
        <div className="price-values ruk-age-value">
          <span id="ruk-min-age-label">{minAge} Years</span>
          <span id="ruk-max-age-label">{maxAge} Years</span>
        </div>

        {/* Selected Age Range */}
        <div className="selected-age-box selected-text">
          Selected Age: <span id="selected-age">{minAge} - {maxAge}</span> Years
        </div>
      </div>
    </div>
  );
};

export default AgeFilter;
