import Link from "next/link";

export default function Footer(){
  return(
    <footer className="font-sans tracking-wide bg-gray-50 px-10 pt-12 pb-6">
      <div className="flex flex-wrap justify-between gap-10">
        <div className="max-w-md">
          <a href='javascript:void(0)'>
            <img src="/images/Logo.png" alt="logo" className='w-36' />
          </a>
          <div className="mt-6">
            <p className="text-gray-600 leading-relaxed text-sm">Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
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

        <div className="max-lg:min-w-[140px]">
          <h4 className="text-[#9A9CAA] font-semibold text-base relative max-sm:cursor-pointer">Category</h4>

          <ul className="mt-6 space-y-4">
            <li>
              <a href='javascript:void(0)' className='hover:text-gray-800 text-gray-600 text-sm'>Sofa</a>
            </li>
            <li>
              <a href='javascript:void(0)' className='hover:text-gray-800 text-gray-600 text-sm'>Armchair</a>
            </li>
            <li>
              <a href='javascript:void(0)' className='hover:text-gray-800 text-[#007580] underline text-sm'>Desk Chair</a>
            </li>
            <li>
              <a href='javascript:void(0)' className='hover:text-gray-800 text-gray-600 text-sm'>wooden Chair</a>
            </li>
            <li>
              <a href='javascript:void(0)' className='hover:text-gray-800 text-gray-600 text-sm'>Park Bench</a>
            </li>
          </ul>
        </div>

        <div className="max-lg:min-w-[140px]">
          <h4 className="text-[#9A9CAA] font-semibold text-base relative max-sm:cursor-pointer">Support</h4>
          <ul className="space-y-4 mt-6">
            <li>
              <a href='javascript:void(0)' className='hover:text-gray-800 text-gray-600 text-sm'>Help & Support</a>
            </li>
            <li>
              <a href='javascript:void(0)' className='hover:text-gray-800 text-gray-600 text-sm'>Tearms & Conditions</a>
            </li>
            <li>
              <a href='javascript:void(0)' className='hover:text-gray-800 text-gray-600 text-sm'>Privacy Policy </a>
            </li>
            <li>
              <a href='javascript:void(0)' className='hover:text-gray-800 text-gray-600 text-sm'>Help</a>
            </li>
          </ul>
        </div>

      
      </div>


      <div className="xs:h left-[1196px] top-[80px] xs:mt-14">
        
        <h2 className="font-inter font-medium text-[14px] tracking-[0.06em] uppercase text-[#9A9CAA] ">Newsletter</h2>
        
        <div className=" xs:w-auto xs:h-10 xs:mt-8 border-2 rounded-md">
          <div className="bg-white  border-[#333435] "></div>
          <span className=" font-inter font-normal xs:text-[14px] text-[#9A9CAA] xs:px-4 xs:pt-2">Your email</span>
        </div>
        
        <button className="flex justify-center items-center xs:px-[20px] py-[10px] gap-[20px] bg-[#029FAE] rounded-[8px] xs:mt-4"><span className="w-[79px] h-[18px] font-inter text-[16px] leading-[110%] text-center capitalize text-white">Subscribe</span></button>
        
        
        <p className="font-inter font-normal text-[15px] leading-[150%] text-[#272343] opacity-[0.6] xs:mt-4 xs:w-64 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.</p>
      </div>




      
    </footer>

  )
}