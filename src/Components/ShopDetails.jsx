import React, { useState } from 'react'
import backgroundImage from "../assets/shopbackground.jpg"
import "flowbite"
import { allProducts } from './AllProducts.js';
import { useNavigate } from 'react-router-dom';
import { FaPlus, FaRegHeart, FaStar } from 'react-icons/fa6';
import Select from 'react-select'
import { useDispatch } from 'react-redux';
import { addToCart } from './CartSlice.js';
import { toast } from 'react-toastify';

      
      

function ShopDetails() {
      



  
const [selectedCategory , setSelectedCategory] = useState("")
const [search , setSearch] = useState("")



const filteredProducts = allProducts.filter(p => { 
const matchesCategory = !selectedCategory || p.category.toLowerCase() === selectedCategory.toLowerCase()
const matchesSearch = !search || p.description.toLowerCase().includes(search.toLowerCase());
return matchesCategory && matchesSearch 
})


const options = [
  {value : "Sofa" ,label : "Sofa" },
  {value : "Chair" ,label : "Chair" },
  {value : "Mobile" ,label : "Mobile" },
  {value : "Wireless" ,label : "Wireless" },
]


const navigate = useNavigate()




const dispatch = useDispatch()
const handleAddToCart = (product) => {
dispatch(addToCart(product))
toast.success("Product has been added to cart!")
}

      
  return (
    <>
      
      
<div className='relative py-24 w-full bg-cover' style={{backgroundImage : `url(${backgroundImage})`}}>
<div className='absolute inset-0 flex items-center justify-center' style={{backgroundColor : "rgba(0,0,0,0.75)"}}>
<h1 className='text-[#1A90FF] text-6xl font-bold'>Products</h1>
</div>
</div>

      
      
      
      
      
      




<div className='container w-full max-w-7xl mx-auto px-3 md:px-0'>
      
<div className='flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-60 mt-14'>






<div className='w-53 order-2 md:order-1'>
  <Select
  isClearable
  onChange={(selected)=> setSelectedCategory(selected ? selected.value : null) }
  options={options}
  placeholder="Search By Category"
  styles={{
    control: (base) => ({
      ...base,
      borderRadius: "10px",
      padding: "4px 8px",
      backgroundColor:  "#3B82F6", 
      border: "none", 
      boxShadow: "none",
      outline: "none",
      cursor: "pointer"
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isFocused ? "#1A90FF" : "white",
      color: state.isFocused ? "white" : "#1A90FF",
      cursor: "pointer",
    }),
    placeholder: (base) => ({
      ...base,
      color: "white", 
    }),
    singleValue: (base) => ({
      ...base,
      color: "white"
    })
  }}
/>
</div>





      
      
      
      

<div className='flex items-center justify-end order-1 md:order-2'>
<input onChange={(e) => setSearch(e.target.value)} className='relative rounded-full w-118 md:w-160 py-2 px-5 outline-none bg-gray-200' placeholder='Search...' />
<svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-4 w-4 text-gray-600 absolute me-3"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
  strokeWidth={1.5} 
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
  />
</svg>

</div>
      
      
      
      
</div>
      
      
      
</div>
      
      
      
      
      
      
      
      
      
<div className='mx-auto w-full container max-w-6xl px-10 md:px-0'>
<div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-5 mb-15'>



{
filteredProducts.length === 0 ? (
<h1 className='text-[40px] font-semibold col-span-full text-center py-6'>Product Not Found!!</h1>
) : (
filteredProducts.map((p) => 
   <div key={p.id} className='bg-white border-2 border-blue-50 flex flex-col rounded-2xl group hover:scale-104 transition duration-700 md:w-88 md:h-100'>
        <div className='flex items-end justify-end px-3 pt-4'>
          <FaRegHeart className='text-[18px] opacity-0 group-hover:opacity-100 duration-500 transition cursor-pointer'/>
        </div>
        <img onClick={()=> navigate(`/shop/${p.id}`)} src={p.img} alt={p.alt} className='object-contain w-full max-w-60 h-60 mx-auto cursor-pointer'/>
        <div className='px-6'>
          <p onClick={()=> navigate(`/shop/${p.id}`)} className='font-semibold text-xl cursor-pointer'>{p.description}</p>
          <div className='flex items-center text-yellow-300 mt-3 mb-4'>
            <FaStar className="w-4 h-4"/>
            <FaStar className="w-4 h-4"/>
            <FaStar className="w-4 h-4"/>
            <FaStar className="w-4 h-4"/>
            <FaStar className="w-4 h-4"/>
          </div>
          <div className='flex items-center justify-between pb-4'>
            <p className='font-semibold text-2xl'>${p.price}</p>
            <div onClick={()=>handleAddToCart(p)} className='cursor-pointer bg-transparent duration-600 transition hover:bg-blue-500 rounded-full flex items-center justify-center w-9 h-9 div-plusicon'>
              <FaPlus className='text-xl plusicon'/>
            </div>
          </div>
        </div>
        <hr className='border-2 text-blue-500 opacity-0 group-hover:opacity-100 mt-auto'/>
      </div>




)
)
}
</div>
</div>

      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
    </>
  )
}

export default ShopDetails
