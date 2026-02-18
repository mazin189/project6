import React from 'react'
import "../App.css"
import { FaCarSide, FaCreditCard, FaShieldAlt, FaUndo } from 'react-icons/fa';

function Services() {

const features = [
    {
    icon : <FaCarSide className='text-xl'/>,
    title : "Free Shipping",
    description : "Lorem ipsum dolor sit amet.",
    color : "bg-slate-400"
    },
    {
    icon : <FaCreditCard className='text-xl'/>,
    title : "Safe Payment",
    description : "Lorem ipsum dolor sit amet.",
    color : "bg-emerald-500"
    },
    {
    icon : <FaShieldAlt className='text-xl'/>,
    title : "Secure Payment",
    description : "Lorem ipsum dolor sit amet.",
    color : "bg-teal-700"
    },
    {
    icon : <FaUndo className='text-xl'/>,
    title : "Back Guarantee",
    description : "Lorem ipsum dolor sit amet.",
    color : "bg-emerald-200"
    }
]


  return (
    <>
      



     <div className='container mx-auto max-w-7xl w-full'>
     <div className='flex flex-col md:flex-row gap-2.5 items-center py-16'>

  
 
{
features.map((product , index) => {
    return(
    <div key={index} className={`text-center rounded-3xl px-15 py-6 ${product.color}`}>
    <div className='bg-white rounded-full w-fit mx-auto p-3'>
    {product.icon}
    </div>
    <p className='text-xl font-semibold py-4'>{product.title}</p>
    <p className=''>{product.description}</p>
    </div>
    )
})
}



     </div>
     </div>


    </>
  )
}

export default Services
