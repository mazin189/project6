import React from 'react'
import "../App.css"
import { FaBagShopping } from 'react-icons/fa6'

      
      
      

function Footer() {
      
      
      
      
      
      
  return (
    <>
<div className='bg-[#2C3E50] pt-20 pb-24 ps-5 md:ps-0'>
<div className='container mx-auto max-w-7xl w-full'>

<div className='flex md:flex-row flex-col gap-y-5 md:gap-y-0 justify-between'>
 
<div className='flex flex-col gap-4 md:gap-6 w-full md:w-72'>
 <div className='flex items-center gap-2'>
  <FaBagShopping className='text-white text-2xl' />
  <p className='font-extrabold text-2xl text-white tracking-tighter'>STORE</p>
  </div>

<p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>
</div>





<ul className='flex flex-col gap-4'>
<li className='text-white font-semibold text-xl'>About Us</li>
<li className='text-gray-400'>Careers</li>
<li className='text-gray-400'>Our Stores</li>
<li className='text-gray-400'>Our Cares</li>
<li className='text-gray-400'>Terms & Conditions</li>
<li className='text-gray-400'>Privacy Policy</li>
</ul>




<ul className='flex flex-col gap-4'>
<li className='text-white font-semibold text-xl'>Customer Care</li>
<li className='text-gray-400'>Help Center</li>
<li className='text-gray-400'>How to Buy</li>
<li className='text-gray-400'>Track Your Order</li>
<li className='text-gray-400'>Corporate & Bulk Purchasing</li>
<li className='text-gray-400'>Returns & Refunds</li>
</ul>





 
<div className='flex flex-col gap-4 w-full md:w-75'>
<p className='text-white font-semibold text-xl'>Contact Us</p>
<p className='text-gray-400'>70 Washington Square South, New York, NY 10012, United States</p>
<p className='text-gray-400'>Email: uilib.help@gmail.com</p>
<p className='text-gray-400'>Phone: +1 1123 456 780</p>
</div>






</div>
</div>
</div>
      
    </>
  )
}

export default Footer
