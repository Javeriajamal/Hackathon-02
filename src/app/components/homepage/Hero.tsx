export default function Hero(){
    return(

        <div className="xs:w-full flex justify-center overflow-hidden">
            <img src="/images/hero-img.png" alt="herobg" className="xs:w-full xs:h-56 sm:w-11/12 sm:h-[350px] md:w-[645px] md:h-[500px] xl:w-[946px] xl:ml-2 "/>

            <div className="absolute xs:mt-10 xs:-ml-32 sm:mt-20 sm:-ml-60 md:-ml-72 md:mt-28">
            <h1 className="text-[#272343] xs:text-[10px] sm:text-[14px] md:text-[15px]  ">Welcome to chairy</h1>
            <p className="font-bold xs:text-lg text-[#272343] xs:w-48 sm:text-2xl sm:w-60 md:text-3xl md:w-72 ">Best Furniture Collection For Your Interior.</p>
            <button className="flex text-white xs:text-[10px] justify-center items-center absolute bg-[#029FAE] rounded-lg xs:px-2 xs:py-3 gap-2 xs:w-24 xs:h-8 xs:mt-3 sm:mt-6 sm:w-24  md:w-28 md:h-9 md:text-[12px]">Shop Now<img src="/images/arrow.png" alt="arrow" className="xs:h-5 " /></button>
            
            </div>
        </div>
    )
}