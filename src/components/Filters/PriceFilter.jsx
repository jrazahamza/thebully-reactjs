import React, { useState } from "react";

const PriceFilter = () => {
  // State for min and max prices
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);

  // Handler for min price input change
  const handleMinPriceChange = (e) => {
    let value = parseInt(e.target.value, 10);
    if (value >= maxPrice) {
      value = maxPrice - 100; // Ensure minPrice is less than maxPrice
    }
    setMinPrice(value);
  };

  // Handler for max price input change
  const handleMaxPriceChange = (e) => {
    let value = parseInt(e.target.value, 10);
    if (value <= minPrice) {
      value = minPrice + 100; // Ensure maxPrice is greater than minPrice
    }
    setMaxPrice(value);
  };

  return (
    <div className="ruk-price-filter filter-price">
      <label htmlFor="price" className="price">Price</label>
      <div className="price-filter-group">
        {/* Slider Container */}
        <div className="slider-container">
          <input
            type="range"
            id="ruk-min-price"
            name="ruk-min-price"
            min="0"
            max="10000"
            step="100"
            value={minPrice}
            onChange={handleMinPriceChange}
          />
          <input
            type="range"
            id="ruk-max-price"
            name="ruk-max-price"
            min="0"
            max="10000"
            step="100"
            value={maxPrice}
            onChange={handleMaxPriceChange}
          />
        </div>

        {/* Display Min and Max Price */}
        <div className="price-values ruk-price-value">
          <span id="ruk-min-price-label">${minPrice.toLocaleString()}</span>
          <span id="ruk-max-price-label">${maxPrice.toLocaleString()}</span>
        </div>

        {/* Selected Price Range */}
        <div className="selected-text">
          Selected Price: <span id="selected-price">${minPrice.toLocaleString()} - ${maxPrice.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
