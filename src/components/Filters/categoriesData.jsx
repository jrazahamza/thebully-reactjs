import React,{useState, useEffect} from "react";
import CategoryMenu from "./CategoryMenu";
import axios from 'axios';

const categoriesData = [
  {
    name: "Bully",
    subCategories: [
      {
        name: "Bullies",
        subSubCategories: [
          { name: "American Bulldog" },
          { name: "American Bully" },
          { name: "American Bully Classic" },
          { name: "American Bully Extreme" },
          { name: "American Bully Extreme" },
          { name: "American Bully Pocket" },
          { name: "American Bully Standard" },
          { name: "American Bully XL" },
          { name: "American Pit Bull Terrier" },
          { name: "American Staffordshire Terrier" },
          { name: "Boston Terrier" },
          { name: "Boxer" },
          { name: "Bull Mastiff" },
          { name: "Bull Terrier" },
          { name: "Cane Corso" },
          { name: "Doberman" },
          { name: "DobermanDogo Argentino" },
          { name: "Dogue De Bordeaux" },
          { name: "Dogue De Bordeaux" },
        ],
      },
      {
        name: "Pups",
        subSubCategories: [
            { name: "American Bulldog" },
            { name: "American Bully" },
            { name: "American Bully Classic" },
        ],
      },
      {
        name: "Studs",
        subSubCategories: [
            { name: "Boxer" },
            { name: "Bull Mastiff" },
            { name: "Bull Terrier" },
        ],
      },
      {
        name: "Breeders",
        subSubCategories: [
            { name: "American Bully Classic" },
            { name: "American Bully Extreme" },
            { name: "American Bully Extreme" },
            { name: "American Bully Pocket" },
        ],
      },
      {
        name: "Breedings",
        subSubCategories: [
            { name: "DobermanDogo Argentino" },
            { name: "Dogue De Bordeaux" },
            { name: "Dogue De Bordeaux" },
        ],
      },
    ],
  },
  {
    name: "Supplies",
    subCategories: [
      {
        name: "Beds",
        subSubCategories: [
          { name: "Beds" },
          { name: "Blankets" },
          { name: "Furniture" },
        ],
      },
      {
        name: "Bowls & Feeders",
        subSubCategories: [
          { name: "Feeders" },
          { name: "Placemats" },
        ],
      },      
      {
        name: "Carriers & Travel",
        subSubCategories: [
          { name: "Carriers" },
          { name: "Kennels" },
          { name: "Travel Aids" },
        ],
      },      
      {
        name: "Toys",
        subSubCategories: [
          { name: "Chew Toys" },
          { name: "Plush Toys" },
          { name: "Fetch Toys" },
        ],
      },
    ],
  },
  {
    name: "Food & Supplements",
    subCategories: [
      { name: "Anxiety & Calming" },
      { name: "Dry Food Wet Food" },
      { name: "Food Toppings" },
      { name: "Health Supplements" },
      { name: "Treats" },
    ],
  },
  {
    name: "Care & Services",
    subCategories: [
      {
        name: "Care",
        subSubCategories: [
          { name: "Dental Care" },
          { name: "DNA Test" },
          { name: "Ear Care" },
          { name: "Eye Care" },
          { name: "Skin Care" },
        ],
      },
      {
        name: "General Services",
        subSubCategories: [
          { name: "Boarding" },
          { name: "Pet Sitting" },
          { name: "Ultrasound" },
          { name: "Veterinary" },
        ],
      },
      {
        name: "Merchandise Services",
        subSubCategories: [
          { name: "Accessories" },
          { name: "Banners" },
          { name: "Hats" },
          { name: "Logos" },
          { name: "Stickers" },
        ],
      },
    ],
  },
];


const App = () => {

    // State to hold categories data
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    console.log("froma api",categories);
    console.log("static data", categoriesData);
    // Fetch categories data when component mounts
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/categories')  // Laravel API endpoint for fetching categories
            .then((response) => {
                setCategories(response.data.main_categories);
                setLoading(false);
            })
            .catch((error) => {
                console.error("There was an error fetching the categories:", error);
                setLoading(false);
            });
    }, []);


  return (
    <div className="app">
            <CategoryMenu categories={categories} />
      {/* <CategoryMenu categories={categoriesData} /> */}
    </div>
  );
};

export default App;
