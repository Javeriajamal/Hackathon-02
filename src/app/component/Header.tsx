import Link from "next/link";
import Sidebar from "./Sidebar";
import Top from "./Top";
import Middle from "./Middle";

export default function Header(){
    return(
      <>
      <Top />
      <Middle /> 
        <header className='flex  bg-white border-b py-3 sm:px-6 px-4 font-[sans-serif] xs:h-12 tracking-wide relative z-50  '>
          
          <div className='flex max-w-screen-lg mx-auto w-80'>
            <div className='flex flex-wrap items-center lg:gap-y-2 gap-4 w-full'>

          

          <div id="collapseMenu"
            className='lg:ml-6 max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
            <button id="toggleClose" className='lg:hidden xl:hidden fixed top-2 right-4 z-[100] rounded-full bg-[#029FAE] w-7 h-7 flex items-center justify-center border'>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 fill-white" viewBox="0 0 320.591 320.591">
                <path
                  d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                  data-original="#000000"></path>
                <path
                  d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                  data-original="#000000"></path>
              </svg>
            </button>

            <ul
              className='lg:flex lg:gap-x-3 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'> 
              <li className='mb-6 hidden max-lg:block'>
                <div className="flex items-center justify-between ">
                  <img src="/images/Logo.png" alt="logo" className='w-40 ' />
                
                  
                </div>
              </li>
              
              <li className='max-lg:border-b max-lg:py-3 px-3 lg:-ml-[260px] xl:-ml-[343px] '><Link href={'/'}
                className='text-[#007580] hover:text-[#007bff] text-[14px] block font-semibold focus:outline-none focus:underline'>Home</Link></li>
              <li className='max-lg:border-b max-lg:py-3 px-3'><a href='javascript:void(0)'
                className='text-[#636270] hover:text-[#007bff] text-[14px] block font-semibold focus:outline-none focus:underline'>Shop</a></li>
              <li className='max-lg:border-b max-lg:py-3 px-3'><Link href={'/Product'}
                className='text-[#636270] hover:text-[#007bff] text-[14px] block font-semibold focus:outline-none focus:underline'>Product</Link></li>
              <li className='max-lg:border-b max-lg:py-3 px-3'><Link href={'/login'}
                className='text-[#636270] hover:text-[#007bff] text-[14px] block font-semibold focus:outline-none focus:underline'>Pages</Link></li>
              <li className='max-lg:border-b max-lg:py-3 px-3'><Link href={'/about'}
                className='text-[#636270]  hover:text-[#007bff] text-[14px] block font-semibold focus:outline-none focus:underline'>About</Link></li>
              
              <li className="ml-auto xs:hidden sm:hidden md:hidden lg:block xl:block lg:ml-[380px] xl:ml-[560px] lg:text-sm xl:text-sm"><span className="text-[#636270] lg:-ml-40 xl:-ml-[162px]  ">Contact: </span>(808) 555-0111
              </li>

            </ul>

          </div>


        
              <button id="toggleOpen" className='lg:hidden xs:ml-[324px] sm:ml-[396px] md:ml-[457px] '>
                <svg className="w-7 h-7" fill="#029FAE" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"></path>
                </svg>
              </button>


          
        </div>   
        </div>
    
      <Sidebar />
    </header>
    </>
    )
}