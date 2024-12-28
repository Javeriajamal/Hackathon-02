import React from 'react'

export default function About(){
  return (

    <div className='xs:h-[1600px] xs:mb-10 sm:h-[2100px] md:h-[1100px] xl:h-[1300px] '> 
    
    <div className="bg-[#007580] xs:w-[372px] xs:h-72 xs:mt-14 xs:mx-5 sm:ml-14 sm:w-[520px] sm:h-96 md:ml-16  md:w-[315px] md:h-80 md:mt-24  lg:w-[370px] lg:h-[370px] lg:ml-[130px] xl:w-[465px] xl:ml-[205px] xl:h-[350px] ">
      
      <div className=" flex flex-col items-start gap-3  ">
        
        <h1 className="font-inter font-bold xs:text-lg leading-[39px] text-white xs:pt-10 xs:pl-8 sm:pt-14 sm:pl-14 sm:text-xl md:pl-10 md:pt-10 lg:pt-12 lg:text-2xl ">About Us - Comforty</h1>
        
        
        <p className="xs:w-80 xs:text-xs leading-[22px] text-white xs:pl-8 xs:pr-8 sm:pl-14 sm:w-10/12 md:w-auto  md:pl-10 lg:pt-2 xl:w-11/12 xl:text-[13px]">
          At Comforty, we believe that the right chair can transform your space and elevate your comfort.Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality.
        </p>
      </div>
      
      
      <button className="w-40 h-10 font-inter font-normal xs:text-xs bg-[rgba(249,249,249,0.15)] text-white xs:ml-8 xs:mt-12 sm:ml-14 sm:mt-32 md:mt-20 md:ml-10 lg:mt-28 xl:mt-24">View collection</button>
      
      <img src="/images/popular 3.png" alt="" className='xs:w-[372px] xs:h-72 xs:mt-8 sm:w-[520px] sm:h-96 sm:mt-20 md:w-[315px] md:ml-[328px] md:-mt-[296px] md:h-80 lg:w-[370px] lg:h-[370px] lg:-mt-[332px] lg:ml-[390px] xl:w-[465px] xl:ml-[480px] xl:-mt-[316px] xl:h-[350px]' />

      <div className='xs:mt-28 flex flex-wrap xs:gap-3 xs:mx-1 sm:mx-2 sm:gap-6 md:flex-nowrap md:gap-5 md:mx-1 md:mt-32 lg:mx-0 xl:gap-4 '>
        <img src="/images/box1.png" alt="" className='xs:h-36 xs:w-44 sm:w-60 sm:h-52 md:w-36 md:h-32 lg:w-44 lg:h-36 xl:w-80 xl:h-44 '/>
        <img src="/images/box2.png" alt="" className='xs:h-36 xs:w-44 sm:w-60 sm:h-52 md:w-36 md:h-32 lg:w-44 lg:h-36 xl:w-80 xl:h-44'/>
        <img src="/images/box3.png" alt="" className='xs:h-36 xs:w-44 sm:w-60 sm:h-52 md:w-36 md:h-32 lg:w-44 lg:h-36 xl:w-80 xl:h-44'/>
        <img src="/images/box4.png" alt="" className='xs:h-36 xs:w-44 sm:w-60 sm:h-52 md:w-36 md:h-32 lg:w-44 lg:h-36 xl:w-80 xl:h-44'/>
      </div>


      <div className='xs:mt-24 xs:ml-1 sm:ml-3 md:ml-0 xl:mt-28'>
        <h1 className='xs:font-semibold xs:text-[20px] lg:text-[22px] '>Our Popular Products </h1>
        
        <div className='xs:mt-5 '>
        <img src="/images/about-product1.png" alt="" className='xs:w-96 xs:h-48 sm:w-[550px]  md:w-[400px] sm:h-64 lg:w-[630px] xl:h-[375px] ' />
        </div>

        <div className='xs:mt-5 flex xs:gap-4 sm:mt-10 xl:gap-3  '>

        <img src="/images/about-product2.png" alt="" className='xs:w-44 xs:h-52 sm:w-64 sm:h-72 md:w-36 md:h-64  md:ml-[330px] md:-mt-[296px] lg:ml-[400px] lg:w-56 xl:-mt-[415px] xl:w-[220px] xl:h-[374px] xl:ml-[485px] '/>
        <img src="/images/about-product3.png" alt="" className='xs:w-44 xs:h-52 sm:w-64 sm:h-72 md:-mt-[296px] md:-ml-1 md:w-36 md:h-64 lg:w-56 lg:ml-1 xl:-mt-[415px] xl:w-[220px] xl:h-[374px] '/>
        </div>
      </div>


  
</div>
</div>

  )
}

