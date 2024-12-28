export default function SingleProduct(){
    return(
        <div className="xs:h-auto overflow-y-hidden">
        <div className="flex xs:h-auto xs:mt-14 sm:mx-4 sm:mt-20">
            <img src="/images/Image 3.png" alt="" className="xs:w-52 xs:h-60 xs:ml-4 sm:w-80 sm:h-72 sm:ml-6 md:ml-12 md:w-96 md:h-96 lg:ml-28 lg:w-96 lg:h-96 xl:ml-48 xl:w-[500px] xl:h-[450px] "/>

            <div className="">
            <h1 className="text-[#272343] font-bold xs:text-[21px] xs:ml-6 xs:-mt-1 xs:w-32 sm:ml-12 sm:text-[27px] sm:w-44 md:ml-10  lg:ml-14 lg:text-[33px] lg:w-52 xl:text-[37px] xl:w-60 xl:ml-16 ">Library Stool Chair</h1>
            <div className="bg-[#029FAE] text-white rounded-2xl xs:w-16 xs:h-6 xs:py-1 xs:px-1 xs:text-[10px] xs:ml-6 xs:mt-2 sm:ml-12 md:ml-10 lg:ml-14 lg:w-20 lg:h-7 lg:text-[12px] lg:px-2 lg:py-1 xl:w-24 xl:px-4 xl:ml-16 xl:mt-4">$20.00 USD</ div>

            <hr className="xs:w-32 text-[#D9D9D9] xs:ml-6 xs:mt-3 sm:ml-12 sm:w-44 md:ml-10 lg:ml-14 lg:w-60 xl:w-72 xl:ml-16 xl:mt-8"/>

            <p className="text-[#272343]/50 xs:text-[10px] xs:w-36 xs:ml-6 xs:mt-3 sm:ml-12 sm:w-48 md:ml-10 lg:ml-14 lg:w-60 xl:w-72 xl:text-[12px] xl:ml-16 xl:mt-6 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing</p>

            <div className="flex flex-row xs:gap-1 justify-center items-center text-white bg-[#029FAE] xs:w-24  rounded-md xs:h-8 xs:text-[9px] xs:ml-6 xs:mt-3 sm:ml-12 md:ml-10 lg:ml-14 lg:w-28 lg:text-[10px] lg:gap-2 xl:h-9 xl:text-[11px] xl:ml-16 xl:mt-5  " >
                <img src="/images/whiteCart.png" alt="" className="xs:w-4 xs:h-4 lg:w-5 lg:h-5 xl:w-4 xl:h-4 "/>
                Add To cart</div>

            </div>
        </div>



        <div className="xs:mt-20 xs:h-auto xs:pb-14 sm:mt-24 md:pb-20">
            <h2 className="font-bold xs:ml-4 xs:text-[15px] sm:text-[18px] sm:ml-10 md:ml-16 md:text-[16px]  lg:ml-32 lg:text-[18px] xl:ml-52 ">FEATURED PRODUCTS</h2>

            <div className="absolute w-[75px] h-[31px] left-[1587px] top-[1068px]">
                
                <div className="absolute w-[69px] h-[22px] left-[2px] top-[0px] text-[12px] font-inter font-bold lg:text-[14px] leading-[22px] text-black xs:-ml-[1270px] xs:-mt-[545px] sm:-ml-[1040px] sm:-mt-[454px] md:-ml-[940px] md:-mt-[364px] lg:-ml-[770px] lg:-mt-[360px] xl:-ml-[520px] xl:-mt-[294px] ">View all</div>
               
                <div className="absolute lg:w-[60px] w-[50px] h-0 left-[0px] top-[20px] border border-black xs:-ml-[1270px] xs:-mt-[545px] sm:-ml-[1040px] sm:-mt-[450px] md:-ml-[940px] md:-mt-[364px] lg:-ml-[770px] lg:-mt-[360px] xl:-ml-[520px] xl:-mt-[294px]"></div>
            </div>


            <div className="xs:grid xs:grid-cols-2 xs:gap-2 xs:mx-4 xs:mt-4 sm:flex sm:mx-10 md:mx-16 lg:mx-32 lg:mt-10 lg:pb-10  xl:mx-52 xl:gap-4  ">
                <img src="/images/Products 7.png" alt="" className="xs:w-44 xs:h-44 sm:w-36 sm:h-36 lg:w-36 lg:h-44 xl:w-44 xl:h-52 " />
                <img src="/images/Products 1.png" alt="" className="xs:w-44 xs:h-44 sm:w-36 sm:h-36 lg:w-36 lg:h-44 xl:w-44 xl:h-52" />
                <img src="/images/Products 10.png" alt="" className="xs:w-44 xs:h-44 xs:mt-4 sm:mt-0 sm:w-36 sm:h-36 lg:w-36 lg:h-44 xl:w-44 xl:h-52" />
                <img src="/images/Products 3.png" alt="" className="xs:w-44 xs:h-44 xs:mt-4 sm:mt-0 sm:w-36 sm:h-36 lg:w-36 lg:h-44 xl:w-44 xl:h-52" />
                <img src="/images/Products 11.png" alt="" className="xs:w-44 xs:h-44 xs:mt-4 sm:mt-0 xs:hidden sm:hidden sm:w-36 sm:h-36 md:block lg:block lg:w-36 lg:h-44 xl:w-44 xl:h-52" />


            </div>
        </div>
        </div>





    )
}