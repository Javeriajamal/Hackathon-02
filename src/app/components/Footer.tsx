import Link from "next/link";

export default function Footer(){
  return(
    <footer className="font-sans tracking-wide bg-gray-50 px-10 pt-12 pb-6 h-auto">
      <div className="xs:flex xs:flex-wrap justify-between gap-10 xl:flex-row">
        <div className="max-w-md sm:ml-24 md:ml-6 lg:ml-20  xl:ml-44">
          <a href='javascript:void(0)'>
            <img src="/images/Logo.png" alt="logo" className='w-36 ' />
          </a>
          <div className="mt-6">
            <p className="text-gray-600 leading-relaxed text-sm md:w-48 lg:w-48  xl:w-48">Vivamus tristique odio sit amet velit semper, <br /> eu posuere turpis interdum. <br />
            Cras egestas purus </p>
          </div>
          <ul className="mt-10 xs:gap-4">
            <li className= "flex justify-start">
              <Link href={'/'}>
              <img src="/images/facebook.png" alt="" className="xs:w-8 xs:h-8"/>
              </Link>
              <Link href={'/'}>
                <img src="/images/twitter.png" alt="twitter" className="xs:w-8 xs:h-8" />
              </Link>
              <Link href={'/'}>
                <img src="/images/insta.png" alt="insta" className="xs:w-8 xs:h-8" />
              </Link>
              <Link href={'/'}>
                <img src="/images/pintrest.png" alt="pintrest" className="xs:w-8 xs:h-8" />
              </Link>
              <Link href={'/'}>
                <img src="/images/youtube.png" alt="" className="xs:w-8 xs:h-8"/>
              </Link>

            </li>
  
          </ul>
        </div>


        <div className="max-lg:min-w-[140px] sm:ml-24 sm:mt-10 md:mr-48 md:mt-0 lg:ml-[350px] lg:-mt-[250px] xl:mr-[740px] xl:ml-[30px] xl:mt-3 ">
          <h4 className="text-[#9A9CAA] font-semibold text-sm relative max-sm:cursor-pointer ">CATEGORY</h4>

          <ul className="mt-6 space-y-4 ">
            <li>
              <a href='javascript:void(0)' className='hover:text-gray-800  text-sm'>Sofa</a>
            </li>
            <li>
              <a href='javascript:void(0)' className='hover:text-gray-800  text-sm'>Armchair</a>
            </li>
            <li>
              <a href='javascript:void(0)' className='hover:text-gray-800 text-[#007580] underline text-sm'>Desk Chair</a>
            </li>
            <li>
              <a href='javascript:void(0)' className='hover:text-gray-800  text-sm'>wooden Chair</a>
            </li>
            <li>
              <a href='javascript:void(0)' className='hover:text-gray-800  text-sm'>Park Bench</a>
            </li>
          </ul>
        </div>

        <div className="max-lg:min-w-[140px] sm:mt-10 sm:mr-24 md:ml-[535px] md:-mt-[270px] lg:ml-[510px] lg:-mt-[288px] xl:pl-24 xl:-mt-[265px] ">
          <h4 className="text-[#9A9CAA] font-semibold text-sm relative max-sm:cursor-pointer">SUPPORT</h4>
          <ul className="space-y-4 mt-6">
            <li>
              <a href='javascript:void(0)' className='hover:text-gray-800  text-sm'>Help & Support</a>
            </li>
            <li>
              <a href='javascript:void(0)' className='hover:text-gray-800  text-sm'>Tearms & Conditions</a>
            </li>
            <li>
              <a href='javascript:void(0)' className='hover:text-gray-800  text-sm'>Privacy Policy </a>
            </li>
            <li>
              <a href='javascript:void(0)' className='hover:text-gray-800  text-sm'>Help</a>
            </li>
          </ul>
        </div>

      
      </div>


      <div className="xs:h left-[1196px] top-[80px] xs:mt-14 sm:ml-24 md:ml-5 lg:ml-[690px] lg:-mt-[290px] xl:ml-[797px] xl:-mt-[270px] ">
        
        <h2 className="font-inter font-medium text-[14px] tracking-[0.06em] uppercase text-[#9A9CAA] ">Newsletter</h2>
        
        <div className=" xs:w-52 xs:h-10 xs:mt-8 border-2 rounded-md sm:w-52 sm:flex md:w-72 lg:w-44 xl:w-52 xl:flex xl:gap-6 xl:h-12 ">
          <input className="bg- white border-[#333435] ml-3 pt-1 xs:w-48   md:w-72 lg:w-40 xl:w-44" 
          type="text"
          placeholder="Your email" />
          
        
        <button className="flex justify-center items-center xs:px-[20px] py-[10px] gap-[20px] bg-[#029FAE] rounded-[8px] xs:-mt-7 xs:ml-56 sm:ml-8 sm:h-10 sm:-mt-0 md:ml-28 lg:-ml-44 lg:mt-12 lg:h-8  xl:h-11 xl:mt-0 xl:-ml-0 xl:w-24 "><span className="w-[79px] h-[18px] font-inter xs:text-[14px] leading-[110%] text-center capitalize text-white xs:w-16  sm:w-[80px] lg:w-16  xl:w-[60px] xl:text-[14px]  ">Subscribe</span></button>

        </div>

        
        
        <p className="font-inter font-normal text-[15px] leading-[150%] text-[#272343] opacity-[0.6] xs:mt-4 xs:w-64 sm:mt-5 md:w-80 lg:mt-12 lg:w-56 xl:mt-4 xl:w-80 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.</p>
      </div>




      
    </footer>

  )
}