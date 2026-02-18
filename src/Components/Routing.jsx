import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
const Navbar = lazy(()=> import('./Navbar.jsx')) 
const HomePage = lazy(()=> import('./HomePage.jsx')) 
const Services = lazy(()=> import('./Services.jsx')) 
const BigDiscount = lazy(()=> import('./BigDiscount.jsx')) 
const Arrivals = lazy(()=> import('./Arrivals.jsx')) 
const BestSales = lazy(()=> import('./BestSales.jsx')) 
const Footer = lazy(()=> import('./Footer.jsx')) 
const Shop = lazy(()=> import('./Shop.jsx')) 
const Cart = lazy(()=> import('./Cart.jsx')) 
const SingleProduct = lazy(()=> import('./SingleProduct.jsx')) 
import Loader from './Loader.jsx'



function Routing() {



  return (
    <>

<Suspense fallback={<Loader />}>
<BrowserRouter>
<Routes>

<Route path='/' element={
<>
<Navbar />
<HomePage />
<Services />
<BigDiscount />
<Arrivals />
<BestSales />
<Footer />
</>
}/>


<Route path='/shop' element={<Shop />} />
<Route path='/cart' element={<Cart />} />
<Route path='/shop/:productId' element={<SingleProduct />} />
<Route path='*' element={<h1>Page Not Found</h1>} />
</Routes>
</BrowserRouter>
</Suspense>


    </>

  )
}

export default Routing


