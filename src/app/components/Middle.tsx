import Link from "next/link";

export default function Middle(){
    return(
        <>

        <div className="xs:h-14 w-screen bg-[#F0F2F3] overflow-hidden">

                <div className="xs:ml-4 flex flex-row gap-2 xs:py-3 sm:ml-12 md:ml-16 xl:ml-52">
                <img src="/images/Comfysofa.png" alt="logo" className="flex flex-row xs:h-[28px] xl:h-[33px] " />
                
                <div className="w-[118px] h-[31px] xs:text-[20px] xs:text-lg sm:w-[130px] sm:h-[40px] sm:text-[20px] text-[#272343] font-medium leading-[120%] xl:text-2xl ">Comforty</div>

                <div className="xs:w-24 xs:h-8 xs:ml-28 xs:-mt-0 bg-white rounded-md justify-end sm:ml-[297px] md:ml-[370px] xl:ml-[670px]  ">
                    <Link href={'/cart'}>
                    <img src="/images/cart.png" className="xs:h-4 xs:w-4 xs:ml-3 xs:my-2"/>
                    </Link>
                    <p className="xs:text-[11px] xs:ml-9 xs:-mt-6">Cart</p>
                    <img src="/images/No.png" className="xs:h-4 xs:w-4 xs:ml-16 xs:-mt-4" />


                </div>


                </div>
                
                
                



        </div>

        </>
    )
}