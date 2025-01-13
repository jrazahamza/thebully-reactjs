import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Category from './Pages/Category'
import 'bootstrap/dist/css/bootstrap.min.css'
import ProductDetail from './Pages/ProductDetail'
import AboutUs from './Pages/AboutUs'
import Blog from './Pages/Blog'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/category' element={<Category />}></Route>
      <Route path='/ProductDetail' element={<ProductDetail />}></Route>
      <Route path='/about-us' element={<AboutUs />}></Route>
      <Route path='/blog' element={<Blog />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
