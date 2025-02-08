import Image from "next/image";

export default function Hero(){
    return(

        <div className="xs:w-full flex justify-center overflow-hidden">
            <img src="/images/hero-img.png" alt="herobg" className="xs:w-11/12 xs:h-56 sm:w-10/12 sm:h-[350px] md:w-[645px] md:h-[480px] lg:w-[770px] lg:h-[520px] xl:w-[940px] xl:h-[540px] xl:ml-2 "/>

            <div className="absolute xs:mt-10 xs:-ml-32 sm:mt-20 sm:-ml-60 md:-ml-72 md:mt-32  lg:mt-36 xl:-ml-80">
            <h1 className="text-[#272343] xs:text-[8px] sm:text-[10px] md:text-[10px]  ">WELCOME TO CHAIRY</h1>
            <p className="font-bold xs:text-lg text-[#272343] xs:w-48 sm:text-2xl sm:w-60 md:text-3xl md:w-72 lg:text-4xl lg:w-96 xl:text-5xl xl:w-[500px]    ">Best Furniture Collection For Your Interior.</p>
            <button className="flex text-white xs:text-[10px] justify-center items-center absolute bg-[#029FAE] rounded-lg xs:px-2 xs:py-3 gap-2 xs:w-24 xs:h-8 xs:mt-3 sm:mt-6 sm:w-24  md:w-28 md:h-9 md:text-[12px] lg:w-32 lg:text-[13px] ">Shop Now<img src="/images/arrow.png" alt="arrow" className="xs:h-5 lg:h-6 " /></button>
            </div>
        </div>
    )
}
