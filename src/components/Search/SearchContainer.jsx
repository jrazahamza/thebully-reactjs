import React, { useState } from 'react';
// import './SearchContainer.css'; // Import the relevant styles

const SearchContainer = () => {
    const [searchValue, setSearchValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedState, setSelectedState] = useState('');

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
        // Mock API call or filtering logic for suggestions
        setIsLoading(true);
        setTimeout(() => {
            setSuggestions(['Sample Suggestion 1', 'Sample Suggestion 2']);
            setIsLoading(false);
        }, 500); // Simulate API call delay
    };

    const handleStateChange = (e) => {
        setSelectedState(e.target.value);
    };

    const handleSearch = () => {
        // Handle search button click
        console.log(`Search Term: ${searchValue}, State: ${selectedState}`);
    };

    return (
        <div className="search-container">
            {/* Search Input */}
            <input
                type="text"
                id="search-input"
                placeholder="Find Bully, Supplies and more...."
                autoComplete="off"
                value={searchValue}
                onChange={handleSearchChange}
            />
            {isLoading && <div className="loading">Loading...</div>}
            {suggestions.length > 0 && (
                <div id="suggestions-dropdown" className="suggestions-dropdown">
                    {suggestions.map((suggestion, index) => (
                        <div key={index} className="suggestion-item">
                            {suggestion}
                        </div>
                    ))}
                </div>
            )}

            {/* Locations Dropdown */}
            <div className="ruk-select-dropdown">
                <select
                    id="state"
                    className="ruk-select ruk-state-select state1"
                    name="state"
                    value={selectedState}
                    onChange={handleStateChange}>
                    <option value="">Locations</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                    <option value="DC">District of Columbia</option>
                    <option value="AS">American Samoa</option>
                    <option value="GU">Guam</option>
                    <option value="MP">Northern Mariana Islands</option>
                    <option value="PR">Puerto Rico</option>
                    <option value="VI">Virgin Islands, U.S.</option>
                </select>
            </div>

            {/* Search Button */}
            <button className="search-button" id="search-button" onClick={handleSearch}>
                <svg
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M17.8301 16.4698L14.5084 13.175C15.7977 11.5673 16.4222 9.52668 16.2532 7.47275C16.0843 5.41882 15.1348 3.50768 13.6 2.1323C12.0653 0.75692 10.0619 0.021842 8.00179 0.0782135C5.94169 0.134585 3.98149 0.978121 2.52424 2.43537C1.06699 3.89262 0.223452 5.85283 0.167081 7.91292C0.110709 9.97301 0.845787 11.9764 2.22117 13.5112C3.59655 15.0459 5.50769 15.9954 7.56161 16.1644C9.61554 16.3333 11.6561 15.7089 13.2638 14.4195L16.5587 17.7144C16.6419 17.7983 16.741 17.8649 16.8501 17.9104C16.9592 17.9558 17.0762 17.9792 17.1944 17.9792C17.3126 17.9792 17.4296 17.9558 17.5387 17.9104C17.6478 17.8649 17.7469 17.7983 17.8301 17.7144C17.9915 17.5474 18.0817 17.3243 18.0817 17.0921C18.0817 16.8599 17.9915 16.6368 17.8301 16.4698ZM8.24092 14.4195C7.00133 14.4195 5.78959 14.0519 4.75891 13.3632C3.72824 12.6746 2.92492 11.6957 2.45055 10.5505C1.97619 9.40527 1.85207 8.1451 2.0939 6.92933C2.33573 5.71357 2.93265 4.59682 3.80916 3.7203C4.68568 2.84378 5.80243 2.24686 7.0182 2.00503C8.23396 1.7632 9.49414 1.88732 10.6394 2.36169C11.7846 2.83605 12.7634 3.63937 13.4521 4.67004C14.1408 5.70072 14.5084 6.91247 14.5084 8.15205C14.5084 9.81428 13.848 11.4084 12.6727 12.5838C11.4973 13.7592 9.90314 14.4195 8.24092 14.4195Z"
                        fill="#191919"
                    />
                </svg>
            </button>
        </div>
    );
};

export default SearchContainer;
