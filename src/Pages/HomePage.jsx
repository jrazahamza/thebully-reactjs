import React from 'react'
import Header from '../components/HeaderFooter/DesktopHeader'
import ExploreCategories from '../components/Category/ExploreCategories'
import HomeBullies from '../components/List/HomeBullies'
import HomeFeatured from '../components/List/HomeFeatured'
import Footer from '../components/HeaderFooter/Footer'
import MainBammerLg from '../components/Banners/MainBammerLg'
import ShopBanner from '../components/Banners/ShopBanner'
import TopSpot from '../components/Banners/TopSpot'
import Blog from '../components/Blog/Blog'
import CareGive from '../components/Banners/CareGive'
import MainHeader from '../components/HeaderFooter/MainHeader'
import HomeBreeders from '../components/List/HomeBreeders'
import HomeSupplies from '../components/List/HomeSupplies'
import HomeServices from '../components/List/HomeServices'
import HomeRecently from '../components/List/HomeRecently'
import HomeSupplements from '../components/List/HomeSupplements'

function HomePage() {
  return (
    <>
    {/* <Header /> */}
    <MainHeader />
    {/* <!-- Main Banner Section --> */}
    <MainBammerLg />
    {/* <!-- Category Section --> */}
    <ExploreCategories />
   {/* <!-- Dog Listings Section 1--> */}
    <HomeBullies />
    <HomeFeatured />
    <HomeBreeders />
    {/* <!-- Shop Section--> */}
    <ShopBanner />
   {/* <!-- Dog Listings Section 1--> */}
    <HomeRecently />
   {/* <!-- want top spot section --> */}
    <TopSpot />
   {/* <!-- Dog Listings Section 1--> */}
   <HomeSupplies />
   <HomeServices />
   {/* <!-- Home page banner 2 Section --> */}
    <CareGive />
   {/* <!-- Dog Listings Section 1--> */}
   <HomeSupplements />
   {/* <!-- Blogs Section --> */}
    <Blog />
    <Footer />
    </>
  )
}

export default HomePage
