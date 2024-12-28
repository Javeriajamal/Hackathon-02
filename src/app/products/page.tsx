import Link from "next/link";

export default function AllProduct(){
    return(
    
    <div className="xs:mt-10 xs:h-auto lg:mt-20  ">
        <h1 className="mx-auto xs:text-[20px] xs:ml-7 font-semibold text-[#272343] sm:ml-16   lg:ml-32 xl:ml-[200px] xl:text-[24px]  ">All Products</h1>

        <div className="grid xs:grid-cols-2 xs:gap-3 xs:mx-6 xs:mt-5 sm:flex sm:flex-wrap sm:mx-16 md:mx-14  lg:mx-32 xl:mx-[200px] xl:gap-4 xl:pb-10  ">
            <img src="/images/Products 1.png" alt="" className="xs:h-44 xs:w-44 sm:mt-0 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-[182px] lg:h-56 xl:w-[225px] xl:h-60 " />
            <Link href={'/single-product'}>
            <img src="/images/Products2.png" alt="" className="xs:h-44 xs:w-44 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-[182px] lg:h-56 xl:w-[225px] xl:h-60 " />
            </Link>
            <img src="/images/Products 3.png" alt="" className="xs:h-44 xs:w-44 xs:mt-4 sm:w-40 sm:h-40 sm:mt-0 md:w-52 md:h-52 lg:w-[182px] lg:h-56 xl:w-[225px] xl:h-60 " />
            <img src="/images/Products 4.png" alt="" className="xs:h-44 xs:w-44 xs:mt-4 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-[182px] lg:h-56 lg:mt-0 xl:w-[225px] xl:h-60" />

            <img src="/images/Products 7.png" alt="" className="xs:h-44 xs:w-44 xs:mt-4 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-[182px] lg:h-56 xl:w-[225px] xl:h-60 " />
            <img src="/images/Products 8.png" alt="" className="xs:h-44 xs:w-44 xs:mt-4 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-[182px] lg:h-56 xl:w-[225px] xl:h-60 " />
            <img src="/images/Products 9.png" alt="" className="xs:h-44 xs:w-44 xs:mt-4 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-[182px] lg:h-56 xl:w-[225px] xl:h-60 " />
            <img src="/images/Products 5.png" alt="" className="xs:h-44 xs:w-44 xs:mt-4 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-[182px] lg:h-56 xl:w-[225px] xl:h-60 " />

            <img src="/images/Products2.png" alt="" className="xs:h-44 xs:w-44 xs:mt-4 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-[182px] lg:h-56 xl:w-[225px] xl:h-60" />
            <img src="/images/Products 10.png" alt="" className="xs:h-44 xs:w-44 xs:mt-4 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-[182px] lg:h-56 xl:w-[225px] xl:h-60" />
            <img src="/images/Products 1.png" alt="" className="xs:h-44 xs:w-44 xs:mt-4 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-[182px] lg:h-56 xl:w-[225px] xl:h-60" />
            <img src="/images/Products 3.png" alt="" className="xs:h-44 xs:w-44 xs:mt-4 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-[182px] lg:h-56 xl:w-[225px] xl:h-60" />


        </div>


        <div className="xs:h-auto xs:mt-20 bg-[#E5E5E5] xs:pb-12">
            
            <div className="xs:ml-10 sm:ml-14 md:ml-56 lg:ml-72 xl:ml-[308px]    ">
                <h2 className="flex items-center xs:text-[22px] font-roboto font-semibold text-center text-black xs:pt-16 xs:-ml-4 md:text-[20px[]  lg:text-[27px] xl:ml-40 xl:text-[30px]  ">Or Subscribe To The Newsletter
                </h2>
                
                <div className="xs:w-60 xs:mt-12 md:-ml-10 md:w-64 lg:w-80 lg:-ml-8 xl:ml-32 xl:w-96">
                    <input 
                    type="text"
                    placeholder="Email address..."
                    className="w-full bg-transparent h-full top-4 left-4 border-b-2 border-black text-[16px] font-roboto font-semibold text-[#1E2832]/50  "/>
                </div>
                
                <div className="xs:w-60 xs:-mt-24 md:ml-[240px] md:-mt-[154px] lg:ml-[308px] lg:-mt-[155px] xl:ml-[530px] ">
                    
                    <div className=" justify-center items-center px-[16px] gap-[4px] xs:w-44">
                    <div className=" w-[20px] xs:mt-32"></div>
                    <span className="w-[59px] h-[22px] text-center text-[14px] font-open-sans font-normal  text-[#1E2832]">SUBMIT</span>
                    </div>
                    
                    <div className="w-[91px] h-0 border border-[#1E2832]"></div>
                </div>
    
            </div>
            
            

            <div className="mt-24 md:pb-10 lg:pb-10 xl:ml-7">
            <h1 className="xs:text-xl xs:ml-[84px] xs:w-56 text-center font-semibold sm:ml-[200px]  md:w-auto md:-ml-10 md:text-xl lg:-ml-8 lg:w-auto lg:text-2xl xl:text-3xl ">Follow Products And Discounts On Instagram</h1>

            <div className="flex xs:gap-4 xs:mx-4 xs:mt-6 sm:mx-20 md:mx-16  lg:mx-32 xl:ml-44 xl:gap-3 ">
                <img src="/images/Image 1.png" alt="" className="xs:w-28 xs:h-28 sm:w-36 sm:h-32 md:w-48 md:h-44 lg:w-28 lg:h-32 xl:w-36 xl:h-36 "/>
                <img src="/images/Image 2.png" alt="" className="xs:w-28 xs:h-28 rounded-sm sm:w-36 sm:h-32 md:w-48 md:h-44 lg:w-28 lg:h-32 xl:w-36 xl:h-36"/>
                <img src="/images/Image 3.png" alt="" className="xs:w-28 xs:h-28 sm:w-36 sm:h-32 md:w-48 md:h-44 lg:w-28 lg:h-32 xl:w-36 xl:h-36"/> 
            </div>

            <div className="flex xs:gap-4 xs:mx-4 xs:mt-4 sm:mx-20 md:mx-16 lg:ml-[510px] lg:-mt-32 xl:ml-[650px]  xl:-mt-36 xl:gap-3  ">
                <img src="/images/Popular 3.png" alt="" className="xs:w-28 xs:h-28 rounded-sm sm:w-36 sm:h-32 md:w-48 md:h-44 lg:w-28 lg:h-32 xl:w-36 xl:h-36"/>
                <img src="/images/Popular 1.png" alt="" className="xs:w-28 xs:h-28 rounded-sm sm:w-36 sm:h-32 md:w-48 md:h-44 lg:w-28 lg:h-32 xl:w-36 xl:h-36"/>
                <img src="/images/Image 4.png" alt="" className="xs:w-28 xs:h-28 rounded-sm sm:w-36 sm:h-32 md:w-48 md:h-44 lg:w-28 lg:h-32 xl:w-36 xl:h-36 "/>
            </div>
            </div>


        </div>

        
        
    </div>
    )
}