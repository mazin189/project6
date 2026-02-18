import React, { useEffect } from 'react'
import "../App.css"
import Navbar from './Navbar.jsx'
import ShopDetails from './ShopDetails.jsx'
import Footer from './Footer.jsx'
      
      

function Shop() {

      
      
useEffect(() => {
window.scrollTo({
top: 0,
behavior: 'smooth'
})
},[])


      
      
  return (
    <>
      
      <Navbar />
      <ShopDetails />
      <Footer />

      
      
    </>
  )
}

export default Shop
