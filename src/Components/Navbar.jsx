import React, { useEffect, useState } from 'react'
import "../App.css"
import { FaBagShopping } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Rotate } from "hamburger-react";


function Navbar() {





const QuantityOfAll = useSelector((state) => state.cart.totalQuantity)


const [scroll , setScroll] = useState(false)
const [open , setOpen] = useState(false)


useEffect(() => {
const handleScroll = () => {

if (window.scrollY > 100) {
setScroll(true)
}else{
setScroll(false)
}
}
window.addEventListener("scroll" , handleScroll)

}, [])



return (
<>

<div className={`${scroll ? "fixed top-0 w-full z-50 bg-white" : "" }`}>


<div className='container max-w-7xl mx-auto px-4'>

<div className='items-center justify-between pt-3 hidden md:flex'>

<div className='flex items-center gap-2'>
<FaBagShopping className='text-blue-500 text-2xl' />
<p className='font-extrabold text-xl md:text-2xl tracking-wider'>STORE</p>
</div>



<div className='flex items-center gap-4 md:gap-11'>
<ul className="list-none flex items-center gap-4 md:gap-11">
<li className='font-semibold text-[18px] cursor-pointer'><Link to={"/"}>Home</Link></li>
<li className='font-semibold text-[18px] cursor-pointer'><Link to={"/shop"}>Shop</Link></li>
<li className='font-semibold text-[18px] cursor-pointer'><Link to={"/cart"}>Cart</Link></li>
</ul>
<Link to={"/cart"}>
<div className='shoppingcart-icon relative'>
<FaShoppingCart className='text-[21px] cursor-pointer'/>
<span className='absolute bg-[#2286e2] text-white text-[12px] -top-px w-4 h-4 translate-x-1/2 -translate-y-1/2 right-0.5 cursor-pointer rounded-full flex items-center justify-center'>
{QuantityOfAll}
</span>
</div>
</Link>
</div>

</div>















<div className='pt-3 block md:hidden'>



<div className='flex items-center justify-between'>
<div className='flex items-center gap-2'>
<FaBagShopping className='text-blue-500 text-2xl' />
<p className='font-extrabold text-xl tracking-wider'>STORE</p>
</div>

<div className='flex items-center gap-2.5'>
<Link to={"/cart"}>
<div className='shoppingcart-icon relative'>
<FaShoppingCart className='text-[21px] cursor-pointer'/>
<span className='absolute bg-[#2286e2] text-white text-[12px] -top-px w-4 h-4 translate-x-1/2 -translate-y-1/2 right-0.5 cursor-pointer rounded-full flex items-center justify-center'>
{QuantityOfAll}
</span>
</div>
</Link>







 <Rotate
    toggled={open}   
    toggle={setOpen}   
    size={30}          
    duration={0.7}       
  />





</div>

</div>


<ul className={`list-none overflow-hidden transition-all duration-500 flex flex-col items-center gap-4 ${open ? "max-h-60" : "max-h-0"}`}>
<li className='font-semibold text-[18px] cursor-pointer'><Link to={"/"}>Home</Link></li>
<li className='font-semibold text-[18px] cursor-pointer'><Link to={"/shop"}>Shop</Link></li>
<li className='font-semibold text-[18px] cursor-pointer'><Link to={"/cart"}>Cart</Link></li>
</ul>












</div>




</div>


<hr className='mt-3 text-blue-500 border-b-3'></hr>

</div>


</>
)
}

export default Navbar