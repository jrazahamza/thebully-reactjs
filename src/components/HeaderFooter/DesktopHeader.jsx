import React, { useState, useRef, useEffect } from "react";
import LoginModal from "../Modal/LoginModal";
import SearchContainer from "../Search/SearchContainer";
import TopCtaMenu from "./TopCtaMenu";
import DesktopMegaMenu from "./DesktopMegaMenu";
function Header() {

    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const categoriesDropdownRef = useRef(null);
    const allCategoriesLinkRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to toggle modal
    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
    };
    const showMenu = (menu) => {
      if (menu) menu.style.display = "block";
    };
  
    const hideMenu = (menu) => {
      if (menu) menu.style.display = "none";
    };
  
    const toggleDropdown = () => {
      setDropdownVisible((prev) => !prev);
    };
  
    useEffect(() => {
      const handleOutsideClick = (e) => {
        if (
          categoriesDropdownRef.current &&
          !categoriesDropdownRef.current.contains(e.target) &&
          e.target !== allCategoriesLinkRef.current
        ) {
          setDropdownVisible(false);
        }
      };
  
      document.addEventListener("click", handleOutsideClick);
  
      return () => {
        document.removeEventListener("click", handleOutsideClick);
      };
    }, []);
  
    useEffect(() => {
      const dropdownMenu = categoriesDropdownRef.current;
      if (dropdownMenu) {
        if (isDropdownVisible) {
          showMenu(dropdownMenu);
  
          // Show first category's sub-menu and sub-sub-menu
          const firstCategoryItem = dropdownMenu.querySelector(".category-item");
          if (firstCategoryItem) {
            const firstSubMenu = firstCategoryItem.querySelector(".sub-menu");
            if (firstSubMenu) {
              showMenu(firstSubMenu);
  
              firstSubMenu.querySelectorAll(".sub-sub-menu").forEach((subSubMenu) => {
                showMenu(subSubMenu);
              });
            }
          }
        } else {
          hideMenu(dropdownMenu);
        }
      }
    }, [isDropdownVisible]);
  

  return (
    <>
    <header class="custom-header desktop-header">
        <div class="site-branding-search">
            <div class="container-ruk">
                <div class="row ruk-custom-top-header">
                    <div class="logo">
                        <a href="https://thebullysupply.com/" rel="home">
                            <img src="https://thebullysupply.com/wp-content/uploads/2024/10/footer-logoo.png" alt="Site Logo" />
                        </a>
                    </div>
                    <div class="search-sec-top">
                        <SearchContainer />
                    </div>
                    {/* <!--tablet-moble-navbar --> */}


                    <div class="top-right-nav desktop-navbar">
                        <nav class="navbar navbar-expand-lg navbar-light">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ruk-custom-top-nav">       
                                <span class="large-scre">
                                    <li class="nav-item">
                                        <a class="nav-link" href="/blog/">Blogs</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/about-us/">About</a>
                                    </li>
                                    <li class="nav-item">
                                        <a onClick={toggleModal} style={{ textDecoration: "none", cursor: "pointer" }} class="nav-link" href="#">Help</a>
                                    </li>
                                </span>
                                <li class="nav-item dropdown xjwnhhw">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <small>Hello</small><br />
                                        Sign in </a>
                                    <ul class="dropdown-menu small-screen-cls" aria-labelledby="navbarDropdown">
                                        <li class="nav-item sign-in-user signin-445">
                                            <a id="open-modal" class="nav-link" href="#">Sign In</a>
                                        </li>
                                        <li class="signin-arah6898">
                                            <p class="sign-in-tws78">Experience joy and companionship with our amazing
                                                bully dogs.</p>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                        {isModalOpen && <LoginModal closeModal={toggleModal} />}
                    </div>
                    {/* <!-- end of desktop navbar --> */}


                </div>
            </div>
        </div>
        
        <div class="navbar navbar-sticky-sec">
            <div class="container-ruk">
                <nav class="navbar navbar-expand-lg navbar-light w-100 ruk-custom-main-nav">
                    <div class="container-fluid small-device-flex">

                        {/* <!-- All Categories Dropdown --> */}
                        <div class="all-categories-menu">
                                <a href="#"
                                    className="navbar-brand all-categories header-all-categories"
                                    ref={allCategoriesLinkRef}
                                    onClick={(e) => {
                                    e.preventDefault();
                                    toggleDropdown();
                                    }}>
                                    All Categories
                                </a>
                            <div class="categories-dropdown header-categories-dropdown"  ref={categoriesDropdownRef}  style={{ display: isDropdownVisible ? "block" : "none" }} >
                                <ul class="categories-list">
                                    <li class="category-item has-children bully">
                                        <a href="#" class="cta-links">
                                            Bully &nbsp;<p class="cta-description">Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                        </a>
                                        <ul class="sub-menu">
                                            <li class="sub-category-item sub-has-children bullies">
                                                <a href="#">Bullies</a>
                                                <span class="mobile-sub-sub"><span class="mo-sub-sub-text">Bullies</span>
                                                    <i class="fa fa-chevron-right" aria-hidden="true"></i>
                                                </span>
                                                <ul class="sub-sub-menu">
                                                    <li class="sub-sub-li american-bulldog">
                                                        <a href="#">American Bulldog</a>
                                                    </li>
                                                    <li class="sub-sub-li american-bully">
                                                        <a href="#">American Bully</a>
                                                    </li>
                                                    <li class="sub-sub-li american-bully-classic">
                                                        <a href="#">American Bully Classic</a>
                                                    </li>
                                                    <li class="sub-sub-li american-bully-extreme">
                                                        <a href="#">American Bully Extreme</a>
                                                    </li>
                                                    <li class="sub-sub-li american-bully-pocket">
                                                        <a href="#">American Bully Pocket</a>
                                                    </li>
                                                    <li class="sub-sub-li american-bully-standard">
                                                        <a href="#">American Bully Standard</a>
                                                    </li>
                                                    <li class="sub-sub-li american-bully-xl">
                                                        <a href="#">American Bully XL</a>
                                                    </li>
                                                    <li class="sub-sub-li american-pit-bull-terrier">
                                                        <a href="#">American Pit Bull Terrier</a>
                                                    </li>
                                                    <li class="sub-sub-li american-staffordshire-terrier">
                                                        <a href="#">American Staffordshire Terrier</a>
                                                    </li>
                                                    <li class="sub-sub-li boston-terrier">
                                                        <a href="#">Boston Terrier</a>
                                                    </li>
                                                    <li class="sub-sub-li boxer">
                                                        <a href="#">Boxer</a>
                                                    </li>
                                                    <li class="sub-sub-li bull-mastiff">
                                                        <a href="#">Bull Mastiff</a>
                                                    </li>
                                                    <li class="sub-sub-li bull-terrier">
                                                        <a href="#">Bull Terrier</a>
                                                    </li>
                                                    <li class="sub-sub-li cane-corso">
                                                        <a href="#">Cane Corso</a>
                                                    </li>
                                                    <li class="sub-sub-li doberman">
                                                        <a href="">Doberman </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="sub-category-item sub-has-children pups">
                                                <a
                                                    href="https://thebullysupply.com/category/?search_sub_category=Pups">Pups</a>
                                                <span class="mobile-sub-sub"><span class="mo-sub-sub-text">
                                                        Pups</span><i class="fa fa-chevron-right"
                                                        aria-hidden="true"></i></span>
                                                <ul class="sub-sub-menu">
                                                    {/* <!-- Back button for mobile screens --> */}
                                                    {/* <li class="back-btn back-link">
                                                        <i class="fa fa-chevron-left" aria-hidden="true"></i> Back
                                                    </li> */}
                                                    <li class="sub-sub-li american-bulldog">
                                                        <a href="#">American Bulldog</a>
                                                    </li>
                                                    <li class="sub-sub-li american-bully">
                                                        <a href="#">American Bully</a>
                                                    </li>
                                                    <li class="sub-sub-li american-bully-classic">
                                                        <a href="#">American Bully Classic</a>
                                                    </li>
                                                    <li class="sub-sub-li tibetan-mastiff">
                                                        <a href="#">Tibetan Mastiff</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="sub-category-item sub-has-children studs">
                                                <a href="#">Studs</a>
                                                <span class="mobile-sub-sub"><span class="mo-sub-sub-text"> Studs</span>
                                                     <i class="fa fa-chevron-right" aria-hidden="true"></i>
                                                </span>
                                                <ul class="sub-sub-menu">
                                                    {/* <!-- Back button for mobile screens --> */}
                                                    {/* <li class="back-btn back-link">
                                                        <i class="fa fa-chevron-left" aria-hidden="true"></i> Back
                                                    </li> */}
                                                    <li class="sub-sub-li american-bulldog">
                                                        <a href="#">American Bulldog</a>
                                                    </li>
                                                    <li class="sub-sub-li american-bully">
                                                        <a href="#">American Bully</a>
                                                    </li>
                                                    <li class="sub-sub-li american-bully-classic">
                                                        <a href="#">American Bully Classic</a>
                                                    </li>
                                                    <li class="sub-sub-li american-bully-extreme">
                                                        <a href="#">American Bully Extreme</a>
                                                    </li>
                                                    <li class="sub-sub-li american-bully-pocket">
                                                        <a href="#">American Bully Pocket</a>
                                                    </li>                                                   
                                                    <li class="sub-sub-li tibetan-mastiff">
                                                        <a href="#">Tibetan Mastiff</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="sub-category-item sub-has-children breeders">
                                                <a
                                                    href="https://thebullysupply.com/category/?search_sub_category=Breeders">Breeders</a>
                                                <span class="mobile-sub-sub"><span class="mo-sub-sub-text">
                                                        Breeders</span><i class="fa fa-chevron-right"
                                                        aria-hidden="true"></i></span>
                                                <ul class="sub-sub-menu">
                                                    {/* <!-- Back button for mobile screens --> */}
                                                    {/* <li class="back-btn back-link">
                                                        <i class="fa fa-chevron-left" aria-hidden="true"></i> Back
                                                    </li> */}
                                                    <li class="sub-sub-li american-bulldog">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=American+Bulldog139">American
                                                            Bulldog</a>
                                                    </li>
                                                    <li class="sub-sub-li american-bully">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=American+Bully140">American
                                                            Bully</a>
                                                    </li>
                                                    <li class="sub-sub-li american-bully-classic">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=American+Bully+Classic141">American
                                                            Bully Classic</a>
                                                    </li>
                                                    <li class="sub-sub-li american-bully-extreme">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=American+Bully+Extreme142">American
                                                            Bully Extreme</a>
                                                    </li>
                                                    <li class="sub-sub-li american-bully-pocket">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=American+Bully+Pocket143">American
                                                            Bully Pocket</a>
                                                    </li>
                                                    <li class="sub-sub-li american-bully-standard">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=American+Bully+Standard144">American
                                                            Bully Standard</a>
                                                    </li>
                                                    <li class="sub-sub-li american-bully-xl">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=American+Bully+XL145">American
                                                            Bully XL</a>
                                                    </li>
                                                    <li class="sub-sub-li american-pit-bull-terrier">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=American+Pit+Bull+Terrier146">American
                                                            Pit Bull Terrier</a>
                                                    </li>
                                                    <li class="sub-sub-li american-staffordshire-terrier">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=American+Staffordshire+Terrier147">American
                                                            Staffordshire Terrier</a>
                                                    </li>
                                                    <li class="sub-sub-li boston-terrier">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Boston+Terrier148">Boston
                                                            Terrier</a>
                                                    </li>
                                                    <li class="sub-sub-li boxer">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Boxer149">Boxer</a>
                                                    </li>
                                                    <li class="sub-sub-li bull-mastiff">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Bull+Mastiff150">Bull
                                                            Mastiff</a>
                                                    </li>
                                                    <li class="sub-sub-li bull-terrier">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Bull+Terrier151">Bull
                                                            Terrier</a>
                                                    </li>
                                                    <li class="sub-sub-li cane-corso">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Cane+Corso152">Cane
                                                            Corso</a>
                                                    </li>
                                                    <li class="sub-sub-li doberman">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Doberman+153">Doberman
                                                        </a>
                                                    </li>
                                                    <li class="sub-sub-li dogo-argentino">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Dogo+Argentino154">Dogo
                                                            Argentino</a>
                                                    </li>
                                                    <li class="sub-sub-li dogue-de-bordeaux">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Dogue+De+Bordeaux155">Dogue
                                                            De Bordeaux</a>
                                                    </li>
                                                    <li class="sub-sub-li english-bulldog">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=English+Bulldog156">English
                                                            Bulldog</a>
                                                    </li>
                                                    <li class="sub-sub-li french-bulldog">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=French+Bulldog157">French
                                                            Bulldog</a>
                                                    </li>
                                                    <li class="sub-sub-li neapolitan-mastiff">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Neapolitan+Mastiff158">Neapolitan
                                                            Mastiff</a>
                                                    </li>
                                                    <li class="sub-sub-li olde-english-bulldogge">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Olde+English+Bulldogge159">Olde
                                                            English Bulldogge</a>
                                                    </li>
                                                    <li class="sub-sub-li presa-canario">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Presa+Canario160">Presa
                                                            Canario</a>
                                                    </li>
                                                    <li class="sub-sub-li rottweiler">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Rottweiler161">Rottweiler</a>
                                                    </li>
                                                    <li class="sub-sub-li shorty-bull">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Shorty+Bull162">Shorty
                                                            Bull</a>
                                                    </li>
                                                    <li class="sub-sub-li staffordshire-bull-terrier">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Staffordshire+Bull+Terrier163">Staffordshire
                                                            Bull Terrier</a>
                                                    </li>
                                                    <li class="sub-sub-li tibetan-mastiff">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Tibetan+Mastiff164">Tibetan
                                                            Mastiff</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="sub-category-item sub-has-children breedings">
                                                <a
                                                    href="https://thebullysupply.com/category/?search_sub_category=Breedings">Breedings</a>
                                                <span class="mobile-sub-sub"><span class="mo-sub-sub-text">
                                                        Breedings</span><i class="fa fa-chevron-right"
                                                        aria-hidden="true"></i></span>
                                                <ul class="sub-sub-menu">
                                                    {/* <!-- Back button for mobile screens --> */}
                                                    {/* <li class="back-btn back-link">
                                                        <i class="fa fa-chevron-left" aria-hidden="true"></i> Back
                                                    </li> */}
                                                    <li class="sub-sub-li american-bulldog">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=American+Bulldog165">American
                                                            Bulldog</a>
                                                    </li>
                                                    <li class="sub-sub-li american-bully">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=American+Bully166">American
                                                            Bully</a>
                                                    </li>
                                                    <li class="sub-sub-li american-bully-classic">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=American+Bully+Classic167">American
                                                            Bully Classic</a>
                                                    </li>
                                                    <li class="sub-sub-li american-bully-extreme">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=American+Bully+Extreme168">American
                                                            Bully Extreme</a>
                                                    </li>
                                                    <li class="sub-sub-li american-bully-pocket">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=American+Bully+Pocket169">American
                                                            Bully Pocket</a>
                                                    </li>
                                                    <li class="sub-sub-li american-bully-standard">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=American+Bully+Standard170">American
                                                            Bully Standard</a>
                                                    </li>
                                                    <li class="sub-sub-li american-bully-xl">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=American+Bully+XL171">American
                                                            Bully XL</a>
                                                    </li>
                                                    <li class="sub-sub-li american-pit-bull-terrier">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=American+Pit+Bull+Terrier172">American
                                                            Pit Bull Terrier</a>
                                                    </li>
                                                    <li class="sub-sub-li american-staffordshire-terrier">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=American+Staffordshire+Terrier173">American
                                                            Staffordshire Terrier</a>
                                                    </li>
                                                    <li class="sub-sub-li boston-terrier">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Boston+Terrier174">Boston
                                                            Terrier</a>
                                                    </li>
                                                    <li class="sub-sub-li boxer">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Boxer175">Boxer</a>
                                                    </li>
                                                    <li class="sub-sub-li bull-mastiff">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Bull+Mastiff176">Bull
                                                            Mastiff</a>
                                                    </li>
                                                    <li class="sub-sub-li bull-terrier">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Bull+Terrier177">Bull
                                                            Terrier</a>
                                                    </li>
                                                    <li class="sub-sub-li cane-corso">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Cane+Corso178">Cane
                                                            Corso</a>
                                                    </li>
                                                    <li class="sub-sub-li doberman">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Doberman+179">Doberman
                                                        </a>
                                                    </li>
                                                    <li class="sub-sub-li dogo-argentino">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Dogo+Argentino180">Dogo
                                                            Argentino</a>
                                                    </li>
                                                    <li class="sub-sub-li dogue-de-bordeaux">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Dogue+De+Bordeaux181">Dogue
                                                            De Bordeaux</a>
                                                    </li>
                                                    <li class="sub-sub-li english-bulldog">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=English+Bulldog182">English
                                                            Bulldog</a>
                                                    </li>
                                                    <li class="sub-sub-li french-bulldog">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=French+Bulldog183">French
                                                            Bulldog</a>
                                                    </li>
                                                    <li class="sub-sub-li neapolitan-mastiff">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Neapolitan+Mastiff184">Neapolitan
                                                            Mastiff</a>
                                                    </li>
                                                    <li class="sub-sub-li olde-english-bulldogge">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Olde+English+Bulldogge185">Olde
                                                            English Bulldogge</a>
                                                    </li>
                                                    <li class="sub-sub-li presa-canario">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Presa+Canario186">Presa
                                                            Canario</a>
                                                    </li>
                                                    <li class="sub-sub-li rottweiler">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Rottweiler187">Rottweiler</a>
                                                    </li>
                                                    <li class="sub-sub-li shorty-bull">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Shorty+Bull188">Shorty
                                                            Bull</a>
                                                    </li>
                                                    <li class="sub-sub-li staffordshire-bull-terrier">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Staffordshire+Bull+Terrier189">Staffordshire
                                                            Bull Terrier</a>
                                                    </li>
                                                    <li class="sub-sub-li tibetan-mastiff">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Tibetan+Mastiff190">Tibetan
                                                            Mastiff</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="category-item has-children supplies">
                                        <a href="#" class="cta-links">
                                            Supplies &nbsp;<p class="cta-description">Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                        </a>
                                        <ul class="sub-menu">
                                            <li class="sub-category-item sub-has-children beds">
                                                <a
                                                    href="https://thebullysupply.com/category/?search_sub_category=Beds">Beds</a>
                                                <span class="mobile-sub-sub"><span class="mo-sub-sub-text">
                                                        Beds</span><i class="fa fa-chevron-right"
                                                        aria-hidden="true"></i></span>
                                                <ul class="sub-sub-menu">
                                                    <li class="sub-sub-li beds">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Beds191">Beds</a>
                                                    </li>
                                                    <li class="sub-sub-li blankets">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Blankets192">Blankets</a>
                                                    </li>
                                                    <li class="sub-sub-li furniture-covers">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Furniture+Covers193">Furniture
                                                            Covers</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="sub-category-item sub-has-children bowls-feeders">
                                                <a
                                                    href="https://thebullysupply.com/category/?search_sub_category=Bowls+%26+Feeders">Bowls
                                                    &amp; Feeders</a>
                                                <span class="mobile-sub-sub"><span class="mo-sub-sub-text"> Bowls &amp;
                                                        Feeders</span><i class="fa fa-chevron-right"
                                                        aria-hidden="true"></i></span>
                                                <ul class="sub-sub-menu">
                                                    <li class="sub-sub-li bowls-dishes">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Bowls+%26+Dishes194">Bowls
                                                            &amp; Dishes</a>
                                                    </li>
                                                    <li class="sub-sub-li elevated-bowls">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Elevated+Bowls195">Elevated
                                                            Bowls</a>
                                                    </li>
                                                    <li class="sub-sub-li feeders">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Feeders196">Feeders</a>
                                                    </li>
                                                    <li class="sub-sub-li fountain-waterers">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Fountain+%26+Waterers197">Fountain
                                                            &amp; Waterers</a>
                                                    </li>
                                                    <li class="sub-sub-li travel-bowls">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Travel+Bowls198">Travel
                                                            Bowls</a>
                                                    </li>
                                                    <li class="sub-sub-li placemats">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Placemats199">Placemats</a>
                                                    </li>
                                                    <li class="sub-sub-li storage-accessories">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Storage+%26+Accessories200">Storage
                                                            &amp; Accessories</a>
                                                    </li>
                                                    <li class="sub-sub-li water-bottles">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Water+Bottles201">Water
                                                            Bottles</a>
                                                    </li>
                                                    <li class="sub-sub-li filter-pumps">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Filter+%26+Pumps202">Filter
                                                            &amp; Pumps</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="sub-category-item sub-has-children bully-clothing-accessories">
                                                <a
                                                    href="https://thebullysupply.com/category/?search_sub_category=Bully+Clothing+%26+Accessories">Bully
                                                    Clothing &amp; Accessories</a>
                                                <span class="mobile-sub-sub"><span class="mo-sub-sub-text"> Bully
                                                        Clothing &amp; Accessories</span><i class="fa fa-chevron-right"
                                                        aria-hidden="true"></i></span>
                                                <ul class="sub-sub-menu">
                                                    <li class="sub-sub-li shirts">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Shirts203">Shirts</a>
                                                    </li>
                                                    <li class="sub-sub-li accessories">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Accessories204">Accessories</a>
                                                    </li>
                                                    <li class="sub-sub-li hoodies-sweaters">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Hoodies+%26+Sweaters205">Hoodies
                                                            &amp; Sweaters</a>
                                                    </li>
                                                    <li class="sub-sub-li coats-jackets">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Coats+%26+Jackets206">Coats
                                                            &amp; Jackets</a>
                                                    </li>
                                                    <li class="sub-sub-li costumes-jersey">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Costumes+%26+Jersey207">Costumes
                                                            &amp; Jersey</a>
                                                    </li>
                                                    <li class="sub-sub-li other-clothing">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Other+Clothing208">Other
                                                            Clothing</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="sub-category-item sub-has-children carriers-travel">
                                                <a
                                                    href="https://thebullysupply.com/category/?search_sub_category=Carriers+%26+Travel">Carriers
                                                    &amp; Travel</a>
                                                <span class="mobile-sub-sub"><span class="mo-sub-sub-text"> Carriers
                                                        &amp; Travel</span><i class="fa fa-chevron-right"
                                                        aria-hidden="true"></i></span>
                                                <ul class="sub-sub-menu">
                                                    {/* <!-- Back button for mobile screens --> */}
                                                    {/* <li class="back-btn back-link">
                                                        <i class="fa fa-chevron-left" aria-hidden="true"></i> Back
                                                    </li> */}
                                                    <li class="sub-sub-li carriers">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Carriers209">Carriers</a>
                                                    </li>
                                                    <li class="sub-sub-li kennels">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Kennels210">Kennels</a>
                                                    </li>
                                                    <li class="sub-sub-li car-accessories">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Car+Accessories211">Car
                                                            Accessories</a>
                                                    </li>
                                                    <li class="sub-sub-li steps-ramps">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Steps+%26+Ramps212">Steps
                                                            &amp; Ramps</a>
                                                    </li>
                                                    <li class="sub-sub-li stollers-bicycle-trailers">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Stollers+%26+Bicycle+Trailers213">Stollers
                                                            &amp; Bicycle Trailers</a>
                                                    </li>
                                                    <li class="sub-sub-li travel-bowls-bags">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Travel+Bowls+%26+Bags214">Travel
                                                            Bowls &amp; Bags</a>
                                                    </li>
                                                    <li class="sub-sub-li travel-aids">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Travel+Aids215">Travel
                                                            Aids</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                class="sub-category-item sub-has-children collars-leashes-harnesses-vest">
                                                <a
                                                    href="https://thebullysupply.com/category/?search_sub_category=Collars%2C+Leashes%2C+Harnesses+%26+Vest">Collars,
                                                    Leashes, Harnesses &amp; Vest</a>
                                                <span class="mobile-sub-sub"><span class="mo-sub-sub-text"> Collars,
                                                        Leashes, Harnesses &amp; Vest</span><i
                                                        class="fa fa-chevron-right" aria-hidden="true"></i></span>
                                                <ul class="sub-sub-menu">
                                                    {/* <!-- Back button for mobile screens --> */}
                                                    {/* <li class="back-btn back-link">
                                                        <i class="fa fa-chevron-left" aria-hidden="true"></i> Back
                                                    </li> */}
                                                    <li class="sub-sub-li collars">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Collars216">Collars</a>
                                                    </li>
                                                    <li class="sub-sub-li leashes">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Leashes217">Leashes</a>
                                                    </li>
                                                    <li class="sub-sub-li harness">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Harness218">Harness</a>
                                                    </li>
                                                    <li class="sub-sub-li tie-outs">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Tie-Outs219">Tie-Outs</a>
                                                    </li>
                                                    <li class="sub-sub-li muzzles">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Muzzles220">Muzzles</a>
                                                    </li>
                                                    <li class="sub-sub-li vests">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Vests221">Vests</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="sub-category-item sub-has-children crates-pens-gates">
                                                <a
                                                    href="https://thebullysupply.com/category/?search_sub_category=Crates%2C+Pens+%26+Gates">Crates,
                                                    Pens &amp; Gates</a>
                                                <span class="mobile-sub-sub"><span class="mo-sub-sub-text"> Crates, Pens
                                                        &amp; Gates</span><i class="fa fa-chevron-right"
                                                        aria-hidden="true"></i></span>
                                                <ul class="sub-sub-menu">
                                                    {/* <!-- Back button for mobile screens --> */}
                                                    {/* <li class="back-btn back-link">
                                                        <i class="fa fa-chevron-left" aria-hidden="true"></i> Back
                                                    </li> */}
                                                    <li class="sub-sub-li crates-kennels">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Crates+%26+Kennels222">Crates
                                                            &amp; Kennels</a>
                                                    </li>
                                                    <li class="sub-sub-li pens-accessories">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Pens+%26+Accessories223">Pens
                                                            &amp; Accessories</a>
                                                    </li>
                                                    <li class="sub-sub-li gates">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Gates224">Gates</a>
                                                    </li>
                                                    <li class="sub-sub-li crate-mats-pads">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Crate+Mats+%26+Pads225">Crate
                                                            Mats &amp; Pads</a>
                                                    </li>
                                                    <li class="sub-sub-li dog-houses">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Dog+Houses226">Dog
                                                            Houses</a>
                                                    </li>
                                                    <li class="sub-sub-li steps-ramps">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Steps+%26+Ramps227">Steps
                                                            &amp; Ramps</a>
                                                    </li>
                                                    <li class="sub-sub-li fence-systems">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Fence+Systems228">Fence
                                                            Systems</a>
                                                    </li>
                                                    <li class="sub-sub-li doors-accessories">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Doors+%26+Accessories229">Doors
                                                            &amp; Accessories</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="sub-category-item sub-has-children technology-miscellaneous">
                                                <a
                                                    href="https://thebullysupply.com/category/?search_sub_category=Technology+%26+Miscellaneous">Technology
                                                    &amp; Miscellaneous</a>
                                                <span class="mobile-sub-sub"><span class="mo-sub-sub-text"> Technology
                                                        &amp; Miscellaneous</span><i class="fa fa-chevron-right"
                                                        aria-hidden="true"></i></span>
                                                <ul class="sub-sub-menu">
                                                    {/* <!-- Back button for mobile screens --> */}
                                                    {/* <li class="back-btn back-link">
                                                        <i class="fa fa-chevron-left" aria-hidden="true"></i> Back
                                                    </li> */}
                                                    <li class="sub-sub-li cameras-monitors">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Cameras+%26+Monitors230">Cameras
                                                            &amp; Monitors</a>
                                                    </li>
                                                    <li class="sub-sub-li feeders-treat-dispensers">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Feeders+%26+Treat+Dispensers231">Feeders
                                                            &amp; Treat Dispensers</a>
                                                    </li>
                                                    <li class="sub-sub-li gps-activity-trackers">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=GPS+%26+Activity+Trackers232">GPS
                                                            &amp; Activity Trackers</a>
                                                    </li>
                                                    <li class="sub-sub-li cleaning-supplies">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Cleaning+Supplies233">Cleaning
                                                            Supplies</a>
                                                    </li>
                                                    <li class="sub-sub-li vacuums">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Vacuums234">Vacuums</a>
                                                    </li>
                                                    <li class="sub-sub-li memorials-keepsakes">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Memorials+%26+Keepsakes235">Memorials
                                                            &amp; Keepsakes</a>
                                                    </li>
                                                    <li class="sub-sub-li gifts">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Gifts236">Gifts</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="sub-category-item sub-has-children toys">
                                                <a
                                                    href="https://thebullysupply.com/category/?search_sub_category=Toys">Toys</a>
                                                <span class="mobile-sub-sub"><span class="mo-sub-sub-text">
                                                        Toys</span><i class="fa fa-chevron-right"
                                                        aria-hidden="true"></i></span>
                                                <ul class="sub-sub-menu">
                                                    {/* <!-- Back button for mobile screens --> */}
                                                    {/* <li class="back-btn back-link">
                                                        <i class="fa fa-chevron-left" aria-hidden="true"></i> Back
                                                    </li> */}
                                                    <li class="sub-sub-li rope-tug-toys">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Rope+%26+Tug+Toys237">Rope
                                                            &amp; Tug Toys</a>
                                                    </li>
                                                    <li class="sub-sub-li chew-toys">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Chew+Toys238">Chew
                                                            Toys</a>
                                                    </li>
                                                    <li class="sub-sub-li plush-toys">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Plush+Toys239">Plush
                                                            Toys</a>
                                                    </li>
                                                    <li class="sub-sub-li fetch-toys">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Fetch+Toys240">Fetch
                                                            Toys</a>
                                                    </li>
                                                    <li class="sub-sub-li interactive-toys">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Interactive+Toys241">Interactive
                                                            Toys</a>
                                                    </li>
                                                    <li class="sub-sub-li variety-packs">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Variety+Packs242">Variety
                                                            Packs</a>
                                                    </li>
                                                    <li class="sub-sub-li toy-storage-bins">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Toy+Storage+Bins243">Toy
                                                            Storage Bins</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="sub-category-item sub-has-children training-behavior">
                                                <a
                                                    href="https://thebullysupply.com/category/?search_sub_category=Training+%26+Behavior">Training
                                                    &amp; Behavior</a>
                                                <span class="mobile-sub-sub"><span class="mo-sub-sub-text"> Training
                                                        &amp; Behavior</span><i class="fa fa-chevron-right"
                                                        aria-hidden="true"></i></span>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="category-item has-children food-supplements">
                                        <a href="#" class="cta-links">
                                            Food &amp; Supplements &nbsp;<p class="cta-description">Lorem ipsum dolor
                                                sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                                            </p>
                                        </a>
                                        <ul class="sub-menu">
                                            <li class="sub-category-item sub-has-children anxiety-calming">
                                                <a
                                                    href="https://thebullysupply.com/category/?search_sub_category=Anxiety+%26+Calming">Anxiety
                                                    &amp; Calming</a>
                                                <span class="mobile-sub-sub"><span class="mo-sub-sub-text"> Anxiety
                                                        &amp; Calming</span><i class="fa fa-chevron-right"
                                                        aria-hidden="true"></i></span>
                                            </li>
                                            <li class="sub-category-item sub-has-children dry-food-wet-food">
                                                <a
                                                    href="https://thebullysupply.com/category/?search_sub_category=Dry+Food+Wet+Food">Dry
                                                    Food Wet Food</a>
                                                <span class="mobile-sub-sub"><span class="mo-sub-sub-text"> Dry Food Wet
                                                        Food</span><i class="fa fa-chevron-right"
                                                        aria-hidden="true"></i></span>
                                            </li>
                                            <li class="sub-category-item sub-has-children food-toppings">
                                                <a
                                                    href="https://thebullysupply.com/category/?search_sub_category=Food+Toppings">Food
                                                    Toppings</a>
                                                <span class="mobile-sub-sub"><span class="mo-sub-sub-text"> Food
                                                        Toppings</span><i class="fa fa-chevron-right"
                                                        aria-hidden="true"></i></span>
                                            </li>
                                            <li
                                                class="sub-category-item sub-has-children frozen-freeze-dried-dehydrated-food">
                                                <a
                                                    href="https://thebullysupply.com/category/?search_sub_category=Frozen%2C+Freeze-Dried+%26+Dehydrated+Food">Frozen,
                                                    Freeze-Dried &amp; Dehydrated Food</a>
                                                <span class="mobile-sub-sub"><span class="mo-sub-sub-text"> Frozen,
                                                        Freeze-Dried &amp; Dehydrated Food</span><i
                                                        class="fa fa-chevron-right" aria-hidden="true"></i></span>
                                            </li>
                                            <li class="sub-category-item sub-has-children health-supplements">
                                                <a
                                                    href="https://thebullysupply.com/category/?search_sub_category=Health+Supplements">Health
                                                    Supplements</a>
                                                <span class="mobile-sub-sub"><span class="mo-sub-sub-text"> Health
                                                        Supplements</span><i class="fa fa-chevron-right"
                                                        aria-hidden="true"></i></span>
                                            </li>
                                            <li class="sub-category-item sub-has-children muscle-mass-performance">
                                                <a
                                                    href="https://thebullysupply.com/category/?search_sub_category=Muscle%2C+Mass+%26+Performance">Muscle,
                                                    Mass &amp; Performance</a>
                                                <span class="mobile-sub-sub"><span class="mo-sub-sub-text"> Muscle, Mass
                                                        &amp; Performance</span><i class="fa fa-chevron-right"
                                                        aria-hidden="true"></i></span>
                                            </li>
                                            <li
                                                class="sub-category-item sub-has-children raw-food-fresh-prepared-meals">
                                                <a
                                                    href="https://thebullysupply.com/category/?search_sub_category=Raw+Food%2C+Fresh+%26+Prepared+Meals">Raw
                                                    Food, Fresh &amp; Prepared Meals</a>
                                                <span class="mobile-sub-sub"><span class="mo-sub-sub-text"> Raw Food,
                                                        Fresh &amp; Prepared Meals</span><i class="fa fa-chevron-right"
                                                        aria-hidden="true"></i></span>
                                            </li>
                                            <li class="sub-category-item sub-has-children treats">
                                                <a
                                                    href="https://thebullysupply.com/category/?search_sub_category=Treats">Treats</a>
                                                <span class="mobile-sub-sub"><span class="mo-sub-sub-text">
                                                        Treats</span><i class="fa fa-chevron-right"
                                                        aria-hidden="true"></i></span>
                                            </li>
                                            <li class="sub-category-item sub-has-children vitamins-multivitamins">
                                                <a
                                                    href="https://thebullysupply.com/category/?search_sub_category=Vitamins+%26+Multivitamins">Vitamins
                                                    &amp; Multivitamins</a>
                                                <span class="mobile-sub-sub"><span class="mo-sub-sub-text"> Vitamins
                                                        &amp; Multivitamins</span><i class="fa fa-chevron-right"
                                                        aria-hidden="true"></i></span>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="category-item has-children care-services">
                                        <a href="#" class="cta-links">
                                            Care &amp; Services &nbsp;<p class="cta-description">Lorem ipsum dolor sit
                                                amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                        </a>
                                        <ul class="sub-menu">
                                            <li class="sub-category-item sub-has-children care">
                                                <a
                                                    href="https://thebullysupply.com/category/?search_sub_category=Care">Care</a>
                                                <span class="mobile-sub-sub"><span class="mo-sub-sub-text">
                                                        Care</span><i class="fa fa-chevron-right"
                                                        aria-hidden="true"></i></span>
                                                <ul class="sub-sub-menu">
                                                    <li class="sub-sub-li calming-care-anxiety">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Calming+Care+%26+Anxiety244">Calming
                                                            Care &amp; Anxiety</a>
                                                    </li>
                                                    <li class="sub-sub-li dental-care">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Dental+Care245">Dental
                                                            Care</a>
                                                    </li>
                                                    <li class="sub-sub-li dna-test">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=DNA+Test246">DNA
                                                            Test</a>
                                                    </li>
                                                    <li class="sub-sub-li ear-care">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Ear+Care247">Ear
                                                            Care</a>
                                                    </li>
                                                    <li class="sub-sub-li eye-care">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Eye+Care248">Eye
                                                            Care</a>
                                                    </li>
                                                    <li class="sub-sub-li first-aid-recovery">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=First+Aid+%26+Recovery249">First
                                                            Aid &amp; Recovery</a>
                                                    </li>
                                                    <li class="sub-sub-li flea-tick-shampoos">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Flea+%26+Tick+Shampoos250">Flea
                                                            &amp; Tick Shampoos</a>
                                                    </li>
                                                    <li class="sub-sub-li grooming-grooming-tools-hot-spot-itch-relief">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Grooming+%26+Grooming+Tools+Hot+Spot+%26+Itch+Relief251">Grooming
                                                            &amp; Grooming Tools Hot Spot &amp; Itch Relief</a>
                                                    </li>
                                                    <li class="sub-sub-li heartworm-prevention-dewormer">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Heartworm+Prevention+%26+Dewormer252">Heartworm
                                                            Prevention &amp; Dewormer</a>
                                                    </li>
                                                    <li class="sub-sub-li milk-replacers">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Milk+Replacers253">Milk
                                                            Replacers</a>
                                                    </li>
                                                    <li class="sub-sub-li reproduction-equipment">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Reproduction+Equipment254">Reproduction
                                                            Equipment</a>
                                                    </li>
                                                    <li class="sub-sub-li skin-care">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Skin+Care255">Skin
                                                            Care</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="sub-category-item sub-has-children general-services">
                                                <a
                                                    href="https://thebullysupply.com/category/?search_sub_category=General+Services">General
                                                    Services</a>
                                                <span class="mobile-sub-sub"><span class="mo-sub-sub-text"> General
                                                        Services</span><i class="fa fa-chevron-right"
                                                        aria-hidden="true"></i></span>
                                                <ul class="sub-sub-menu">
                                                    <li class="sub-sub-li al-reproduction">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Al+Reproduction256">Al
                                                            Reproduction</a>
                                                    </li>
                                                    <li class="sub-sub-li boarding">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Boarding257">Boarding</a>
                                                    </li>
                                                    <li class="sub-sub-li ear-cropping-tail-docks-declaw">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Ear+Cropping%2C+Tail+Docks+%26+Declaw258">Ear
                                                            Cropping, Tail Docks &amp; Declaw</a>
                                                    </li>
                                                    <li class="sub-sub-li grooming-spa">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Grooming+%26+Spa259">Grooming
                                                            &amp; Spa</a>
                                                    </li>
                                                    <li class="sub-sub-li miscellaneous-services">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Miscellaneous+Services260">Miscellaneous
                                                            Services</a>
                                                    </li>
                                                    <li class="sub-sub-li nannies-shippers-transportation-services">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Nannies%2C+Shippers+%26+Transportation+Services261">Nannies,
                                                            Shippers &amp; Transportation Services</a>
                                                    </li>
                                                    <li class="sub-sub-li pet-sitting">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Pet+Sitting262">Pet
                                                            Sitting</a>
                                                    </li>
                                                    <li class="sub-sub-li pregnancy-test">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Pregnancy+Test263">Pregnancy
                                                            Test</a>
                                                    </li>
                                                    <li class="sub-sub-li progesterone-test">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Progesterone+Test264">Progesterone
                                                            Test</a>
                                                    </li>
                                                    <li class="sub-sub-li ultrasound">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Ultrasound265">Ultrasound</a>
                                                    </li>
                                                    <li class="sub-sub-li vaccinations-heartworm-test">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Vaccinations+%26+Heartworm+Test266">Vaccinations
                                                            &amp; Heartworm Test</a>
                                                    </li>
                                                    <li class="sub-sub-li veterinary">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Veterinary267">Veterinary</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="sub-category-item sub-has-children merchandise-services">
                                                <a
                                                    href="https://thebullysupply.com/category/?search_sub_category=Merchandise+Services">Merchandise
                                                    Services</a>
                                                <span class="mobile-sub-sub"><span class="mo-sub-sub-text"> Merchandise
                                                        Services</span><i class="fa fa-chevron-right"
                                                        aria-hidden="true"></i></span>
                                                <ul class="sub-sub-menu">
                                                    <li class="sub-sub-li accessories">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Accessories268">Accessories</a>
                                                    </li>
                                                    <li class="sub-sub-li banners">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Banners269">Banners</a>
                                                    </li>
                                                    <li class="sub-sub-li hats">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Hats270">Hats</a>
                                                    </li>
                                                    <li class="sub-sub-li hoodies-sweatshirts">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Hoodies%2FSweatshirts271">Hoodies/Sweatshirts</a>
                                                    </li>
                                                    <li class="sub-sub-li logos">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Logos272">Logos</a>
                                                    </li>
                                                    <li class="sub-sub-li other-clothing-accessories">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Other+Clothing+%26+Accessories273">Other
                                                            Clothing &amp; Accessories</a>
                                                    </li>
                                                    <li class="sub-sub-li stickers">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Stickers274">Stickers</a>
                                                    </li>
                                                    <li class="sub-sub-li t-shirts">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=T-Shirts275">T-Shirts</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                class="sub-category-item sub-has-children nannies-shippers-transportation-services">
                                                <a
                                                    href="https://thebullysupply.com/category/?search_sub_category=Nannies%2C+Shippers+%26+Transportation+Services">Nannies,
                                                    Shippers &amp; Transportation Services</a>
                                                <span class="mobile-sub-sub"><span class="mo-sub-sub-text"> Nannies,
                                                        Shippers &amp; Transportation Services</span><i
                                                        class="fa fa-chevron-right" aria-hidden="true"></i></span>
                                                <ul class="sub-sub-menu">
                                                    <li class="sub-sub-li pet-nannies">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Pet+Nannies276">Pet
                                                            Nannies</a>
                                                    </li>
                                                    <li class="sub-sub-li ground-shippers">
                                                        <a
                                                            href="https://thebullysupply.com/category/?search_sub_sub_category=Ground+Shippers277">Ground
                                                            Shippers</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="collapse navbar-collapse" id="navbarText">
                            <div class="d-flex w-100 thebully-main-nav">

                                <div class="remo-boot-class top-right-nav">
                                    <TopCtaMenu />
                                    <li className="nav-item">
                                        <DesktopMegaMenu />
                                    </li>
                                </div>

                                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center sell-right-sec">
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" id="sell-dropdown" role="button"
                                            data-bs-toggle="dropdown" aria-expanded="false">Sell</a>
                                        <ul class="dropdown-menu create-manage-listing-8774"
                                            aria-labelledby="sell-dropdown">
                                            <li class="nav-item ruk2545"><i class="fa fa-plus" aria-hidden="true"></i><a
                                                    class="dropdown-item" id="sell-modal" href="#">Create Listings</a>
                                            </li>
                                            <li class="nav-item	ruk2545"><i class="fa fa-file-text-o"
                                                    aria-hidden="true"></i><a class="dropdown-item" id="sell-modal2"
                                                    href="#">Manage Listings</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link fav-dot" href="/my-favourites/">
                                            <i class="fa fa-heart-o icondot" aria-hidden="true"></i>
                                            <h1 class="fa fa-circle fav-dot-h1">.</h1>
                                        </a>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </header>
    </>
  );
}

export default Header;
