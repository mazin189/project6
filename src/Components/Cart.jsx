import React, { useEffect } from 'react'
import "../App.css"
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import CartDetails from './CartDetails.jsx'
      
      
      
      

function Cart() {
      
      
      
useEffect(() => {
window.scrollTo({
top: 0,
behavior: 'smooth'
})
},[])

      
      
      
      
  return (
    <>
      
      
      <Navbar />

      <CartDetails />

      <Footer />

      
    </>
  )
}

export default Cart
