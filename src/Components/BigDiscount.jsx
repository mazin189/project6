import React from 'react'
import "../App.css"

import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa"; 
import { FaPlus } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import {products} from "../Components/AllProducts.js"
import { useDispatch } from 'react-redux';
import { addToCart } from './CartSlice.js';
import { toast } from 'react-toastify';


function BigDiscount() {



const dispatch = useDispatch()
const handleAddToCart = (product) => {
dispatch(addToCart(product))
toast.success("Product has been added to cart!")
}



const navigate = useNavigate()


  return (
    <>
      
    <div className='bg-blue-100 pt-20 pb-16'>

    <p className='text-4xl font-semibold pb-12 text-center'>Big Discount</p>
    

    <div className='container mx-auto w-full max-w-6xl px-10 md:px-0'>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-6'>


    {
    products.map((product,index) => {
     return (
      <div key={index} className='bg-white rounded-2xl group hover:scale-104 transition duration-700 flex flex-col'>
    <div className='flex items-center justify-between px-3 pt-3'>
    <div className='rounded-4xl py-0.5 font-light px-4 bg-blue-500 text-white'>{product.offer}</div>
    <FaRegHeart className='text-[18px] opacity-0 group-hover:opacity-100 duration-500 transition cursor-pointer'/>
    </div>
    <img onClick={()=> navigate(`/shop/${product.id}`)} src={product.img} alt={product.alt} className='object-contain w-full max-w-60 h-60 mx-auto cursor-pointer'/>
    <div className='px-6'>
    <p onClick={()=> navigate(`/shop/${product.id}`)} className='font-semibold text-xl cursor-pointer'>{product.description}</p>
    <div className='flex items-center text-yellow-300 mt-3 mb-4'>
    <FaStar className="w-4 h-4"/>
    <FaStar className="w-4 h-4"/>
    <FaStar className="w-4 h-4"/>
    <FaStar className="w-4 h-4"/>
    <FaStar className="w-4 h-4"/>
    </div>
    <div className='flex items-center justify-between pb-4'>
    <p className='font-semibold text-2xl'>${product.price}</p>
    <div onClick={() => handleAddToCart(product)} className='cursor-pointer bg-transparent duration-600 transition hover:bg-blue-500 rounded-full flex items-center justify-center w-9 h-9 div-plusicon'>
    <FaPlus className='text-xl plusicon'/>
    </div>
    </div>
    </div>
    <hr className='border-2 text-blue-500 opacity-0 group-hover:opacity-100 mt-auto'/>
    </div>
     )
    })
    }


















    </div>
    </div>

    </div>




    </>
  )
}

export default BigDiscount
