export default function Hero(){
    return(

        <div className="xs:w-full flex justify-center">
            <img src="/images/hero-img.png" alt="herobg" className="xs:w-full xs:h-56  "/>

            <div className="absolute xs:mt-10 xs:-ml-32">
            <h1 className="text-[#272343] xs:text-[10px]">Welcome to chairy</h1>
            <p className="font-bold xs:text-lg text-[#272343] xs:w-48 ">Best Furniture Collection For Your Interior.</p>

            <button className="flex text-white xs:text-[10px] justify-center items-center absolute bg-[#029FAE] rounded-lg xs:px-2 xs:py-3 gap-2 xs:w-24 xs:h-8 xs:mt-3 sm:left-[50px] sm:top-[400px] md:left-[100px] md:top-[450px]">Shop Now<img src="/images/arrow.png" alt="arrow" className="xs:h-5 " /></button>

            </div>
        </div>
    )
}