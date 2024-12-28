export default function Cart(){
    return(
        <div className="h-auto xs:pb-20 lg:pb-40 xl:pb-48">
            <div className="flex flex-col items-start absolute w-[963px] h-[211px] xs:ml-6 xs:mt-10 font-semibold sm:ml-14 sm:text-lg md:ml-16  lg:ml-[110px] xl:ml-52 xl:text-xl xl:mt-14 ">Bag</div>
            <div className="flex xs:mt-4 sm:ml-8 md:ml-10 lg:ml-[85px] xl:ml-[182px] xl:pt-8  ">
                <img src="/images/popular 1.png" alt="" className="xs:w-28 xs:h-32 xs:ml-6 xs:mt-20 sm:w-32 sm:h-32 lg:w-28 lg:h-32 xl:w-32 xl:h-32 "/>
                <h2 className="xs:mt-[74px] xs:ml-4 lg:mt-[77px]">Library Stool Chair</h2>
                <p className="text-[#757575] xs:text-xs xs:mt-[125px] xs:-ml-32 ">Ashen Slate/Cobalt Bliss</p>

                <p className="text-[#757575] xs:text-[11px] xs:mt-[150px] xs:-ml-32">Size L</p>
                <p className="text-[#757575] xs:text-[11px] xs:mt-[150px] xs:ml-12">Quantity 1</p>
                
                <p className="text-[11px] xs:ml-16 xs:mt-20 sm:ml-48 md:ml-80 lg:ml-48 xl:ml-72">MRP: $99</p>

                <img src="images/heart.png" alt="" className="xs:h-4 xs:w-4 xs:mt-48 xs:-ml-[235px] sm:-ml-[364px] md:-ml-[490px] lg:-ml-[364px] xl:-ml-[460px]"/>
                <img src="/images/dustbin.png" alt="" className="xs:h-4 xs:w-4 xs:mt-48 xs:ml-4 "/>


            </div>

            <hr className="xs:mt-8 xs:w-[364px] xs:ml-6 sm:ml-14 sm:w-[520px] md:ml-16 md:w-[670px] lg:ml-[110px] lg:w-[520px] xl:ml-[205px] xl:w-[630px] "/>

            <div className="flex xs:-mt-12 sm:ml-8 md:ml-10 lg:ml-[85px] xl:ml-[182px] ">
                <img src="/images/Image 2.png" alt="" className="xs:w-28 xs:h-32 xs:ml-6 xs:mt-20 sm:w-32 sm:h-32 lg:w-28 lg:h-32 xl:w-32 xl:h-32"/>
                <h2 className="xs:mt-[74px] xs:ml-4 lg:text-sm lg:mt-[77px] ">Library Stool Chair</h2>
                <p className="text-[#757575] xs:text-xs xs:mt-[125px] xs:-ml-32 lg:text-[12px] lg:-ml-28 ">Ashen Slate/Cobalt Bliss</p>

                <p className="text-[#757575] xs:text-[11px] xs:mt-[150px] xs:-ml-32 lg:text-[10px]">Size L</p>
                <p className="text-[#757575] xs:text-[11px] xs:mt-[150px] xs:ml-12">Quantity 1</p>
                
                <p className="text-[11px] xs:ml-16 xs:mt-20 sm:ml-48 md:ml-80 lg:ml-48 xl:ml-72">MRP: $99</p>

                <img src="images/heart.png" alt="" className="xs:h-4 xs:w-4 xs:mt-48 xs:-ml-[235px] sm:-ml-[364px] md:-ml-[490px] lg:-ml-[364px] xl:-ml-[460px] "/>
                <img src="/images/dustbin.png" alt="" className="xs:h-4 xs:w-4 xs:mt-48 xs:ml-4 "/>

            </div>

            <div className="xs:mt-12 xs:ml-8 sm:ml-14 md:ml-16  lg:ml-[670px] lg:-mt-[370px] xl:ml-[890px] xl:-mt-[380px]  ">
                <h2 className="font-semibold xs:text-lg md:text-xl ">Summary</h2>
                <p className="text-xs xs:mt-5 md:mt-7 ">Subtotal</p>
                <p className="xs:ml-[310px] xs:-mt-4 xs:text-xs sm:ml-[469px] md:ml-[598px] lg:ml-[180px] xl:ml-[210px]  ">$198.00</p>

                <p className="text-xs xs:mt-5 ">Estimated Delivery & Handling</p>
                <p className="xs:ml-[327px] xs:-mt-4 xs:text-xs sm:ml-[469px] md:ml-[598px] lg:ml-[200px] xl:ml-[230px] ">Free</p>

                <hr className="xs:mt-10 xs:w-[357px] sm:w-[530px] md:w-[670px] lg:w-[240px] xl:w-[270px] " />
                <p className="text-xs xs:mt-5">Total</p>
                <p className="xs:ml-[310px] xs:-mt-4 xs:text-xs sm:ml-[469px] md:ml-[598px] lg:ml-[180px] xl:ml-[210px] ">$198.00</p>

                <hr className="xs:mt-5 xs:w-[357px] sm:w-[530px] md:w-[670px] lg:w-[240px] xl:w-[270px] " />

                <div className="flex justify-center items-center xs:text-xs xs:mt-10 xs:ml-[72px] text-white xs:h-[40px] xs:w-44 bg-[#029FAE] rounded-[30px] sm:ml-[160px] sm:text-sm md:w-72 md:ml-[170px] md:text-base  lg:ml-[40px] lg:w-44 lg:text-sm xl:w-64 xl:ml-[7px] ">Member Checkout</div>






            </div>



        </div>
    )
}