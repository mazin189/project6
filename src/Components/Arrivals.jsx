import React from 'react'
import "../App.css"
import {arrivals} from "../Components/AllProducts.js"

import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa"; 
import { FaPlus } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addToCart } from './CartSlice.js';
import { toast } from 'react-toastify';

function Arrivals() {

const navigate = useNavigate()

const dispatch = useDispatch()
const handleAddToCart = (product) => {
dispatch(addToCart(product))
toast.success("Product has been added to cart!")
}

  return (
    <>
      
    <div>


    <p className='text-4xl font-semibold pb-10 pt-16 text-center'>New Arrivals</p>





<div className='container mx-auto w-full max-w-5xl px-10 md:px-0'>
    <div className='md:grid flex-col flex md:grid-cols-3 gap-x-5 gap-y-6'>


    {
    arrivals.map((product,index) => {
     return (
      <div key={index} className={`bg-white flex flex-col border-2 border-blue-50 rounded-2xl group hover:scale-104 transition duration-700 ${index === 9 ? "col-span-1 col-start-2" : ""}`}>
    <div className='flex items-end justify-end px-3 pt-4'>
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
    <div onClick={()=> handleAddToCart(product)} className='cursor-pointer bg-transparent duration-600 transition hover:bg-blue-500 rounded-full flex items-center justify-center w-9 h-9 div-plusicon'>
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

export default Arrivals
