import Link from "next/link";

export default function AllProduct(){
    return(
    
    <div className="xs:mt-10 xs:h-auto ">
        <h1 className="mx-auto xs:text-[20px] xs:ml-7 font-semibold text-[#272343] sm:ml-16">All Products</h1>

        <div className="grid xs:grid-cols-2 xs:gap-3 xs:mx-6 xs:mt-5 sm:flex sm:flex-wrap sm:mx-16">
            <img src="/images/Products 1.png" alt="" className="xs:h-44 xs:w-44 sm:mt-0 sm:w-40 sm:h-40" />
            <Link href={'/single-product'}>
            <img src="/images/Products2.png" alt="" className="xs:h-44 xs:w-44 sm:w-40 sm:h-40" />
            </Link>
            <img src="/images/Products 3.png" alt="" className="xs:h-44 xs:w-44 xs:mt-4 sm:w-40 sm:h-40 sm:mt-0" />
            <img src="/images/Products 4.png" alt="" className="xs:h-44 xs:w-44 xs:mt-4 sm:w-40 sm:h-40" />
            <img src="/images/Products 7.png" alt="" className="xs:h-44 xs:w-44 xs:mt-4 sm:w-40 sm:h-40" />
            <img src="/images/Products 8.png" alt="" className="xs:h-44 xs:w-44 xs:mt-4 sm:w-40 sm:h-40" />
            <img src="/images/Products 9.png" alt="" className="xs:h-44 xs:w-44 xs:mt-4 sm:w-40 sm:h-40" />
            <img src="/images/Products 5.png" alt="" className="xs:h-44 xs:w-44 xs:mt-4 sm:w-40 sm:h-40" />
            <img src="/images/Products2.png" alt="" className="xs:h-44 xs:w-44 xs:mt-4 sm:w-40 sm:h-40" />
            <img src="/images/Products 10.png" alt="" className="xs:h-44 xs:w-44 xs:mt-4 sm:w-40 sm:h-40" />
            <img src="/images/Products 1.png" alt="" className="xs:h-44 xs:w-44 xs:mt-4 sm:w-40 sm:h-40 " />
            <img src="/images/Products 3.png" alt="" className="xs:h-44 xs:w-44 xs:mt-4 sm:w-40 sm:h-40 " />




        </div>


        <div className="xs:h-auto xs:mt-20 bg-gray-100 xs:pb-12">
            
            <div className="xs:ml-10">
                <h2 className="flex items-center xs:text-[22px] font-roboto font-semibold text-center text-black xs:pt-16 xs:-ml-4">Or Subscribe To The Newsletter
                </h2>
                
                <div className="xs:w-60 xs:mt-12">
                    <input 
                    type="text"
                    placeholder="Email address..."
                    className="w-full h-full top-0 left-0 border-b-2 border-black text-[16px] font-roboto font-semibold text-[#1E2832]/50"/>
                </div>
                
                <div className="xs:w-60 xs:-mt-24 ">
                    
                    <div className=" justify-center items-center px-[16px] gap-[4px] xs:w-44">
                    <div className=" w-[20px] xs:mt-32"></div>
                    <span className="w-[59px] h-[22px] text-center text-[16px] font-open-sans font-normal  text-[#1E2832]">Submit</span>
                    </div>
                    
                    <div className="w-[91px] h-0 border-2 border-[#1E2832]"></div>
                </div>
    
            </div>

            <div className="mt-24">
            <h1 className="xs:text-xl xs:ml-[84px] xs:w-56 text-center font-semibold">Follow Products And Discounts On Instagram</h1>

            <div className="flex xs:gap-4 xs:mx-4 xs:mt-6">
                <img src="/images/Image 1.png" alt="" className="xs:w-28 xs:h-28 "/>
                <img src="/images/Image 2.png" alt="" className="xs:w-28 xs:h-28 rounded-sm"/>
                <img src="/images/Image 3.png" alt="" className="xs:w-28 xs:h-28 "/>
            </div>

            <div className="flex xs:gap-4 xs:mx-4 xs:mt-4">
                <img src="/images/Popular 3.png" alt="" className="xs:w-28 xs:h-28 rounded-sm"/>
                <img src="/images/Popular 1.png" alt="" className="xs:w-28 xs:h-28 rounded-sm"/>
                <img src="/images/Image 4.png" alt="" className="xs:w-28 xs:h-28 rounded-sm"/>
            </div>
            </div>


        </div>

        
        
    </div>
    )
}