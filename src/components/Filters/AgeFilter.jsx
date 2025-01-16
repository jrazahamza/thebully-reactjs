import React from "react";
import { useFilter } from "../../Context/FilterContext";

const AgeFilter = () => {
    const { minAge, maxAge, setMinAge, setMaxAge } = useFilter();

    const handleMinAgeChange = (e) => {
        let value = parseInt(e.target.value, 10);
        if (value >= maxAge) {
            value = maxAge - 5; // Ensure minAge is less than maxAge
        }
        setMinAge(value);
    };

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
                <div className="price-values ruk-age-value">
                    <span id="ruk-min-age-label">{minAge} Years</span>
                    <span id="ruk-max-age-label">{maxAge} Years</span>
                </div>
                <div className="selected-age-box selected-text">
                    Selected Age: <span id="selected-age">{minAge} - {maxAge}</span> Years
                </div>
            </div>
        </div>
    );
};

export default AgeFilter;
