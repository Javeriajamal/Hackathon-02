import Link from "next/link";

export default function Middle(){
    return(
        <>

        <div className="xs:h-14 w-screen bg-[#F0F2F3]">

                <div className="xs:ml-4 flex flex-row gap-2 xs:py-3">
                <img src="/images/Comfysofa.png" alt="logo" className="flex flex-row xs:h-[30px] " />
                
                <div className="w-[118px] h-[31px] text-[20px] xs:text-lg sm:w-[130px]  sm:h-[40px] sm:text-[30px] text-[#272343] font-medium leading-[120%]">Comforty</div>

                <div className="xs:w-24 xs:h-8 xs:ml-28 xs:-mt-0 bg-white rounded-md justify-end">
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