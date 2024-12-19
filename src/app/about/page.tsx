import React from 'react'

export default function About(){
  return (

    <div className='xs:h-[1600px] xs:mb-20'> 
    
    <div className=" w-80 h-72 xs:mt-14 xs:ml-10 bg-[#007580]">
      
      <div className=" flex flex-col items-start gap-3 ">
        
        <h1 className="font-inter font-bold xs:text-lg  leading-[39px] text-white xs:pt-10 xs:pl-8">About Us - Comforty</h1>
        
        
        <p className="w-80 xs:text-xs leading-[22px] text-white xs:pl-8 xs:pr-8">
          At Comforty, we believe that the right chair can transform your space and elevate your comfort.Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality.
        </p>
      </div>
      
      
      <button className="w-40 h-10 font-inter font-normal xs:text-xs bg-[rgba(249,249,249,0.15)] text-white xs:ml-8 xs:mt-14">View collection</button>
      
      <img src="/images/popular 3.png" alt="" className='w-80 h-72 xs:mt-8' />

      <div className='xs:mt-32 flex gap-4 xs:-ml-2  '>
        <img src="/images/box1.png" alt="" className='xs:h-36 xs:w-40 xs: '/>
        <img src="/images/box2.png" alt="" className='xs:h-36 xs:w-40 xs: '/>
      </div>
      <div className='xs:mt-4 flex gap-4 xs:-ml-2'>
        <img src="/images/box3.png" alt="" className='xs:h-36 xs:w-40 xs: '/>
        <img src="/images/box4.png" alt="" className='xs:h-36 xs:w-40 xs: '/>
      </div>


      <div className='xs:mt-24 '>
        <h1 className='xs:font-semibold '>Our Popular Products </h1>
        
        <div className='xs:mt-5 '>
        <img src="/images/about-product1.png" alt="" className='xs:w-96 xs:h-48 ' />
        </div>
        <div className='xs:mt-5 flex gap-4'>

        <img src="/images/about-product2.png" alt="" className='xs:w-40 xs:h-48  '/>
        <img src="/images/about-product3.png" alt="" className='xs:w-40 xs:h-48 '/>

        </div>
      </div>


  
</div>
</div>

  )
}

