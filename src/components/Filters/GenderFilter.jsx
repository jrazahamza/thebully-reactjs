import React from "react";
import { useFilter } from "../../Context/FilterContext";

const GenderFilter = () => {
    const { selectedGenders, updateSelectedGenders } = useFilter();

    const handleGenderChange = (e) => {
        const gender = e.target.value;
        const checked = e.target.checked;
        updateSelectedGenders(gender, checked);
    };

    return (
        <div className="gender-group">
            <div className="gender-label" id="genderLabel">Gender</div>
            <div className="gender-input-group">
                <input
                    type="checkbox"
                    id="male"
                    name="gender"
                    value="1"
                    checked={selectedGenders.includes("1")}
                    onChange={handleGenderChange}
                />
                <label htmlFor="male">Male</label><br />
                <input
                    type="checkbox"
                    id="female"
                    name="gender"
                    value="2"
                    checked={selectedGenders.includes("2")}
                    onChange={handleGenderChange}
                />
                <label htmlFor="female">Female</label><br />
            </div>
        </div>
    );
};

export default GenderFilter;
