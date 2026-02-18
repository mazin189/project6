import backgroundImage from "../assets/shopbackground.jpg"
import { useEffect, useState } from "react";
import { allProducts } from "./AllProducts.js";
import { useNavigate, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa"; 
import { FaPlus } from 'react-icons/fa6'
import { useDispatch } from "react-redux";
import { addToCart } from "./CartSlice.js";
import { toast } from "react-toastify";


function ProductDetails() {


const[showFirst , setShowFirst] = useState(true)

const {productId} = useParams()

const product = allProducts.find(p=> p.id.toString() === productId)

const productsYouMightLike = allProducts.filter(p=> p.category === product.category && p.id !== product.id)

const navigate = useNavigate()

useEffect(() => {
window.scrollTo({
top: 0,
behavior: 'smooth'
})
},[productId])


const dispatch = useDispatch()
const handleAddToCart = (product) => {
dispatch(addToCart(product))
toast.success("Product has been added to cart!")
}




  return (
    <>


   <div className='relative py-24 w-full bg-cover' style={{backgroundImage : `url(${backgroundImage})`}}>
   <div className='absolute inset-0 flex items-center justify-center text-center' style={{backgroundColor : "rgba(0,0,0,0.75)"}}>
   <h1 className='text-[#1A90FF] text-6xl font-bold '>{product.description}</h1>
   </div>
   </div>








<div className='container w-full mx-auto max-w-7xl'>
  <div className='flex gap-6 md:flex-row flex-col pt-12 pb-30'>
  <img src={product.img} alt={product.alt} className="w-full max-w-130 mx-auto object-cover"/>
  <div className='flex flex-col gap-6 px-4 md:px-0'>
  <h1 className='text-[#1A90FF] text-5xl font-semibold'>{product.description}</h1>
  <div className='flex items-center gap-10'>
    <div className='flex items-center text-yellow-300 gap-1.5'>
      <FaStar className="w-3 h-3"/>
      <FaStar className="w-3 h-3"/>
      <FaStar className="w-3 h-3"/>
      <FaStar className="w-3 h-3"/>
      <FaStar className="w-3 h-3"/>
      </div>
  <p>{product.rating} ratings</p>
  </div>
  <div className='flex items-center gap-10'>
    <p className='font-bold text-3xl'>$253</p>
    <p>category : {product.category}</p>
  </div>
  <p className='pb-3'>{product.overview}</p>
   <input defaultValue={1} type="number" className='border outline-none w-19 rounded-md border-blue-400 px-2.5 py-0.5'/>
  <button onClick={()=> handleAddToCart(product)} className='text-white bg-blue-500 py-3 px-4 rounded-md w-fit cursor-pointer'>Add to Cart</button>
  </div>
  </div>
</div>









<div className='container w-full mx-auto max-w-7xl px-3 md:px-0'>



<div className="flex items-center gap-3 mb-5">

<button onClick={()=> setShowFirst(true)} className={`bg-blue-200 text-black p-2 rounded-3xl cursor-pointer font-semibold ${showFirst ? "text-black" : "text-gray-400" }`}>Description</button>
<button onClick={()=> setShowFirst(false)} className={`bg-blue-200 text-black p-2 rounded-3xl cursor-pointer font-semibold ${!showFirst ? "text-black" : "text-gray-400" }`}>Reviews ({product.reviews.length})</button>

</div>




<div className="pb-30">

{
showFirst ? (
<div>{product.desc}</div>
) : (
<div className="flex flex-col gap-5">





<div className="flex flex-col gap-1">
<p>{product.reviews[0].name}</p>
<p className="text-amber-400">{product.reviews[0].rate} (rating)</p>
<p>{product.reviews[0].text}</p>
</div>




<div className="flex flex-col gap-1">
<p>{product.reviews[1] && product.reviews[1].name}</p>
<p className="text-amber-400">{product.reviews[1] && product.reviews[1].rate + " (rating)"}</p>
<p>{product.reviews[1] && product.reviews[1].text}</p>
</div>







</div>
)
}
</div>



<h1 className="font-semibold text-[28px] mb-3">You might also like</h1>


</div>






<div className="container mx-auto max-w-6xl w-full px-6 md:px-0">



   <div className='grid grid-cols-1 md:grid-cols-3 gap-y-5 mb-16'>


{
productsYouMightLike.map((p) => {
  return (
 

   <div key={p.id} className='bg-white border-2 border-blue-50 flex flex-col rounded-2xl group hover:scale-104 transition duration-700 md:w-90'>
        <div className='flex items-end justify-end px-3 pt-4'>
          <FaRegHeart className='text-[18px] opacity-0 group-hover:opacity-100 duration-500 transition cursor-pointer'/>
        </div>
        <img onClick={()=> navigate(`/shop/${p.id}`)} src={p.img} alt={p.alt} className='object-contain w-60 h-60 mx-auto cursor-pointer'/>
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
            <div onClick={()=> handleAddToCart(p)} className='cursor-pointer bg-transparent duration-600 transition hover:bg-blue-500 rounded-full flex items-center justify-center w-9 h-9 div-plusicon'>
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
      
    </>
  )
}

export default ProductDetails
