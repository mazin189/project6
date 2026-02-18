import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaMinus, FaPlus } from 'react-icons/fa6'
import { FaXmark } from "react-icons/fa6";
import { decrease, increase, removeFromCart } from './CartSlice.js';



function CartDetails() {


const cartItems = useSelector((state) => state.cart.items)

const priceOfAll = useSelector((state) => state.cart.totalPrice)
const dispatch = useDispatch()

const handleDeleteCart = (product) => {
dispatch(removeFromCart(product))
}


const handleIncrease = (product) => {
  dispatch(increase(product))
}

const handleDecrease = (product) => {
  dispatch(decrease(product))
}




  return (
    <>
      <div className='bg-blue-50'>
      <div className='container w-full max-w-7xl mx-auto px-4 md:px-0'>
      <div className={`flex flex-col md:flex-row items-center ${cartItems.length > 0 && "items-start"} gap-9 pt-14 pb-17`}>



<div className='flex flex-col gap-9 w-full md:w-auto order-2 md:order-1'>
{
cartItems.length === 0 ? (
<div className='bg-white w-full md:w-200 rounded-2xl min-h-33 pt-4 group transition duration-700 flex flex-col hover:scale-105'>
<p className='text-[18px] ms-5'>No Items are added to Cart</p>
<hr className='border-2 text-blue-500 opacity-0 group-hover:opacity-100 mt-auto'/>
</div>
) : (
cartItems.map((product , index) => 
<div key={index} className='bg-white w-full max-w-200 md:w-200 min-h-40 flex items-center justify-start px-6 pb-7 md:pb-0'>
<div className='flex items-center gap-10 w-full md:flex-row flex-col'>
  <img src={product.img} alt="" className='object-contain md:w-40 md:h-30 max-w-70 w-full hidden md:block'/>
<div className='flex md:hidden w-full'>
  <img src={product.img} alt="" className='object-contain max-h-80 w-full'/>
<FaXmark onClick={() => handleDeleteCart(product)} className='text-2xl cursor-pointer mt-4 -me-3'/>
</div>
<div className='flex flex-col gap-0 md:gap-10 w-full'>
<div className='flex-none md:flex md:justify-between'>
<p className='text-xl font-semibold text-center md:text-left'>{product.description}</p>
<FaXmark onClick={() => handleDeleteCart(product)} className='text-2xl cursor-pointer -mt-2 hidden md:block'/>
</div>
<div className='flex items-center gap-1 justify-between md:flex-row flex-col'>
<div className='flex items-center gap-5'>
<p>${product.price} * {product.quantity}</p>
<p className='text-blue-950 font-semibold'>${product.price * product.quantity}</p>
</div>
<div className='flex items-center gap-1.5 pe-4'>
<div className='cursor-pointer border bg-white border-gray-200 rounded-md flex items-center justify-center w-9 h-9'>
<FaPlus onClick={() => handleIncrease(product)} className='text-xl'/>
</div>
<div className='cursor-pointer bg-gray-100 rounded-md flex items-center justify-center w-9 h-9'>
<FaMinus onClick={() => handleDecrease(product)} className='text-xl'/>
</div>
</div>
</div>
</div>
</div>
</div>
)
)
}

</div>
      

      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      <div className='bg-white shadow-md w-full md:w-100 px-5 py-5 order-1 md:order-2'>
      <p className='pb-1 font-semibold text-[18px] text-blue-950'>Cart Summary</p>
      <hr className='text-gray-200'/>
      <p className='pt-4'>Total Price :</p>
      <p className='pt-1 text-blue-950 text-xl font-semibold'>${priceOfAll}</p>
      </div>
      
      
      
      
      </div>
      </div>
      </div>
    </>
  )
}

export default CartDetails
