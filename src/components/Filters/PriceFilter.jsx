import React from "react";
import { useFilter } from "../../Context/FilterContext";

const PriceFilter = () => {
    const { minPrice, maxPrice, setMinPrice, setMaxPrice } = useFilter();

    const handleMinPriceChange = (e) => {
        let value = parseInt(e.target.value, 10);
        if (value >= maxPrice) {
            value = maxPrice - 100; // Ensure minPrice is less than maxPrice
        }
        setMinPrice(value);
    };

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
                <div className="price-values ruk-price-value">
                    <span id="ruk-min-price-label">${minPrice.toLocaleString()}</span>
                    <span id="ruk-max-price-label">${maxPrice.toLocaleString()}</span>
                </div>
                <div className="selected-text">
                    Selected Price: <span id="selected-price">${minPrice.toLocaleString()} - ${maxPrice.toLocaleString()}</span>
                </div>
            </div>
        </div>
    );
};

export default PriceFilter;
