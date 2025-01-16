import React, { createContext, useContext, useState, useEffect } from "react";
import axiosUrl from "../config/axiosUrl";

// Create the context
const FilterContext = createContext();

// Custom hook to use the FilterContext
export const useFilter = () => useContext(FilterContext);

// Provider component
export const FilterProvider = ({ children }) => {
    const [sidebarCategories, setSidebarCategories] = useState([]); // Sidebar data
    const [listingData, setListingData] = useState([]); // Listing data
    const [selectedCategories, setSelectedCategories] = useState([]); // Selected filters
    const [filteredList, setFilteredList] = useState([]); // Filtered listing data
    const [minPrice, setMinPrice] = useState(0); // Minimum price
    const [maxPrice, setMaxPrice] = useState(10000); // Maximum price
    const [minAge, setMinAge] = useState(0); // Minimum age
    const [maxAge, setMaxAge] = useState(100); // Maximum age
    const [selectedGenders, setSelectedGenders] = useState([]); // Selected genders

    // Fetch sidebar categories
    useEffect(() => {
        axiosUrl.get("/categories")
            .then((response) => {
                setSidebarCategories(response.data.main_categories);
            })
            .catch((error) => console.error("Error fetching sidebar categories:", error));
    }, []);

    // Fetch listing data
    useEffect(() => {
        axiosUrl.get("/sidebaar_categories")
            .then((response) => {
                setListingData(response.data.listings);
                setFilteredList(response.data.listings);
            })
            .catch((error) => console.error("Error fetching listing data:", error));
    }, []);

    // Filter listing data whenever filters change
    useEffect(() => {
        const newFilteredList = listingData.filter((item) => {
            const matchesCategory =
                selectedCategories.length === 0 ||
                selectedCategories.some((category) =>
                    item.category_names_with_ids.includes(category)
                );

            const matchesPrice =
                item.price >= minPrice && item.price <= maxPrice;

            const matchesAge =
                item.age >= minAge && item.age <= maxAge;

            const matchesGender =
                selectedGenders.length === 0 ||
                selectedGenders.includes(item.gender); // Compare gender value

            return matchesCategory && matchesPrice && matchesAge && matchesGender;
        });

        setFilteredList(newFilteredList);
    }, [selectedCategories, minPrice, maxPrice, minAge, maxAge, selectedGenders, listingData]);

    // Add or remove categories from the filter
    const updateSelectedCategories = (category, checked) => {
        if (checked) {
            setSelectedCategories((prev) => [...prev, category]);
        } else {
            setSelectedCategories((prev) =>
                prev.filter((cat) => cat !== category)
            );
        }
    };

    // Add or remove genders from the filter
    const updateSelectedGenders = (gender, checked) => {
        if (checked) {
            setSelectedGenders((prev) => [...prev, gender]);
        } else {
            setSelectedGenders((prev) => prev.filter((g) => g !== gender));
        }
    };

    return (
        <FilterContext.Provider
            value={{
                sidebarCategories,
                filteredList,
                updateSelectedCategories,
                minPrice,
                maxPrice,
                setMinPrice,
                setMaxPrice,
                minAge,
                maxAge,
                setMinAge,
                setMaxAge,
                selectedGenders,
                updateSelectedGenders,
            }}
        >
            {children}
        </FilterContext.Provider>
    );
};



// import React, { createContext, useContext, useState, useEffect } from "react";
// // import axios from "axios";
// import axiosUrl from "../config/axiosUrl";
// // Create the context
// const FilterContext = createContext();

// // Custom hook to use the FilterContext
// export const useFilter = () => useContext(FilterContext);

// // Provider component
// export const FilterProvider = ({ children }) => {

//     const [sidebarCategories, setSidebarCategories] = useState([]); // Sidebar data
//     const [listingData, setListingData] = useState([]); // Listing data
//     const [selectedCategories, setSelectedCategories] = useState([]); // Selected filters
//     const [filteredList, setFilteredList] = useState([]); // Filtered listing data
//     const [minPrice, setMinPrice] = useState(0); // Minimum price
//     const [maxPrice, setMaxPrice] = useState(10000); // Maximum price
//     const [minAge, setMinAge] = useState(0); // Minimum age
//     const [maxAge, setMaxAge] = useState(100); // Maximum age

//     // Fetch sidebar categories
//     useEffect(() => {
//         axiosUrl.get("/categories")
//             .then((response) => {
//                 setSidebarCategories(response.data.main_categories);
//             })
//             .catch((error) => console.error("Error fetching sidebar categories:", error));
//     }, []);

//     // Fetch listing data
//     useEffect(() => {
//         axiosUrl.get("/sidebaar_categories")
//             .then((response) => {
//                 setListingData(response.data.listings);
//                 setFilteredList(response.data.listings);
//             })
//             .catch((error) => console.error("Error fetching listing data:", error));
//     }, []);

//     // Filter listing data whenever selected categories, price, or age range changes
//     useEffect(() => {
//         const newFilteredList = listingData.filter((item) => {
//             const matchesCategory =
//                 selectedCategories.length === 0 ||
//                 selectedCategories.some((category) =>
//                     item.category_names_with_ids.includes(category)
//                 );

//             const matchesPrice =
//                 item.price >= minPrice && item.price <= maxPrice;

//             const matchesAge =
//                 item.age >= minAge && item.age <= maxAge;

//             return matchesCategory && matchesPrice && matchesAge;
//         });

//         setFilteredList(newFilteredList);
//     }, [selectedCategories, minPrice, maxPrice, minAge, maxAge, listingData]);

//     // Add or remove categories from the filter
//     const updateSelectedCategories = (category, checked) => {
//         if (checked) {
//             setSelectedCategories((prev) => [...prev, category]);
//         } else {
//             setSelectedCategories((prev) =>
//                 prev.filter((cat) => cat !== category)
//             );
//         }
//     };

//     return (
//         <FilterContext.Provider
//             value={{
//                 sidebarCategories,
//                 filteredList,
//                 updateSelectedCategories,
//                 minPrice,
//                 maxPrice,
//                 setMinPrice,
//                 setMaxPrice,
//                 minAge,
//                 maxAge,
//                 setMinAge,
//                 setMaxAge,
//             }}
//         >
//             {children}
//         </FilterContext.Provider>
//     );
// };



