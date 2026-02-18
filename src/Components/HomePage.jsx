import React, { useEffect } from 'react'
import "../App.css"
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"
import img4 from "../assets/img4.png"
import { Link } from 'react-router-dom';



function HomePage() {

    
useEffect(() => {
window.scrollTo({
top: 0,
behavior: 'smooth'
})
},[])



return (
<>


<div className='bg-blue-200 min-h-138 w-full flex items-center py-14 md:py-0'>













<Splide
className="w-full overflow-hidden md:px-0 px-14"
options={{
type: 'loop',
perPage: 1,
// autoplay: true,
interval: 3000,
pagination: false,
arrows: true,
pauseOnHover: true,
}}
>






<SplideSlide>




<div className='h-full flex items-center justify-center max-w-7xl mx-auto w-full'>



<div className='flex items-center flex-col md:flex-row'>
<div className='max-w-130'>
<h1 className='font-semibold text-4xl'>75% Off For Your First Shopping</h1>
<p className='text-gray-600 py-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.</p>
<button className='py-3 px-6 bg-blue-950 text-gray-200 rounded-4xl cursor-pointer'><Link to="/shop">Visit Our Collections</Link></button>
</div>
<img src={img1} alt="#" className='max-w-md w-full md:max-w-lg'/>
</div>
</div>








</SplideSlide>
<SplideSlide>










<div className='h-full flex items-center justify-center max-w-7xl mx-auto w-full'>



<div className='flex items-center flex-col md:flex-row'>
<div className='max-w-130'>
<h1 className='font-semibold text-4xl'>50% Off For Your First Shopping</h1>
<p className='text-gray-600 py-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.</p>
<button className='py-3 px-6 bg-blue-950 text-gray-200 rounded-4xl'>Visit Our Collections</button>
</div>
<img src={img2} alt="#" className='w-full max-w-md md:max-w-lg'/>
</div>
</div>










</SplideSlide>
<SplideSlide>












<div className='h-full flex items-center justify-center max-w-7xl mx-auto w-full'>



<div className='flex items-center flex-col md:flex-row'>
<div className='max-w-130'>
<h1 className='font-semibold text-4xl'>30% Off For Your First Shopping For Mobile Section</h1>
<p className='text-gray-600 py-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.</p>
<button className='py-3 px-6 bg-blue-950 text-gray-200 rounded-4xl'>Visit Our Collections</button>
</div>
<img src={img3} alt="#" className='w-full max-w-md md:max-w-lg'/>
</div>
</div>










</SplideSlide>
<SplideSlide>














<div className='h-full flex items-center justify-center max-w-7xl mx-auto w-full'>



<div className='flex items-center flex-col md:flex-row'>
<div className='max-w-130'>
<h1 className='font-semibold text-4xl'>50% Off For Your First Shopping For Headphone Section</h1>
<p className='text-gray-600 py-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.</p>
<button className='py-3 px-6 bg-blue-950 text-gray-200 rounded-4xl'>Visit Our Collections</button>
</div>
<img src={img4} alt="#" className='w-full max-w-md md:max-w-lg'/>
</div>
</div>











</SplideSlide>
</Splide>
















</div>


</>
)
}

export default HomePage