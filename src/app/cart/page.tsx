export default function Cart(){
    return(
        <div className="h-auto xs:pb-20">
            <div className="flex flex-col items-start absolute w-[963px] h-[211px] xs:ml-6 xs:mt-10 font-semibold sm:ml-14 sm:text-lg">Bag</div>
            <div className="flex xs:mt-4 sm:ml-8">
                <img src="/images/popular 1.png" alt="" className="xs:w-28 xs:h-32 xs:ml-6 xs:mt-20 sm:w-32 sm:h-32 "/>
                <h2 className="xs:mt-[74px] xs:ml-4 ">Library Stool Chair</h2>
                <p className="text-[#757575] xs:text-xs xs:mt-[125px] xs:-ml-32 ">Ashen Slate/Cobalt Bliss</p>

                <p className="text-[#757575] xs:text-[11px] xs:mt-[150px] xs:-ml-32">Size L</p>
                <p className="text-[#757575] xs:text-[11px] xs:mt-[150px] xs:ml-12">Quantity 1</p>
                
                <p className="text-[11px] xs:ml-16 xs:mt-20 sm:ml-48">MRP: $99</p>

                <img src="images/heart.png" alt="" className="xs:h-4 xs:w-4 xs:mt-48 xs:-ml-[235px] sm:-ml-[364px] "/>
                <img src="/images/dustbin.png" alt="" className="xs:h-4 xs:w-4 xs:mt-48 xs:ml-4 "/>


            </div>

            <hr className="xs:mt-8 xs:w-[364px] xs:ml-6 sm:ml-14 sm:w-[520px]"/>

            <div className="flex xs:-mt-12 sm:ml-8">
                <img src="/images/Image 2.png" alt="" className="xs:w-28 xs:h-32 xs:ml-6 xs:mt-20 sm:w-32 sm:h-32 "/>
                <h2 className="xs:mt-[74px] xs:ml-4 ">Library Stool Chair</h2>
                <p className="text-[#757575] xs:text-xs xs:mt-[125px] xs:-ml-32 ">Ashen Slate/Cobalt Bliss</p>

                <p className="text-[#757575] xs:text-[11px] xs:mt-[150px] xs:-ml-32">Size L</p>
                <p className="text-[#757575] xs:text-[11px] xs:mt-[150px] xs:ml-12">Quantity 1</p>
                
                <p className="text-[11px] xs:ml-16 xs:mt-20 sm:ml-48">MRP: $99</p>

                <img src="images/heart.png" alt="" className="xs:h-4 xs:w-4 xs:mt-48 xs:-ml-[235px] sm:-ml-[364px]  "/>
                <img src="/images/dustbin.png" alt="" className="xs:h-4 xs:w-4 xs:mt-48 xs:ml-4 "/>

            </div>

            <div className="xs:mt-12 xs:ml-8 sm:ml-14 ">
                <h2 className="font-semibold xs:text-lg">Summary</h2>
                <p className="text-xs xs:mt-5">Subtotal</p>
                <p className="xs:ml-[310px] xs:-mt-4 xs:text-xs sm:ml-[469px] ">$198.00</p>

                <p className="text-xs xs:mt-5">Estimated Delivery & Handling</p>
                <p className="xs:ml-[327px] xs:-mt-4 xs:text-xs sm:ml-[469px]">Free</p>

                <hr className="xs:mt-10 xs:w-[357px] sm:w-[530px]" />
                <p className="text-xs xs:mt-5">Total</p>
                <p className="xs:ml-[310px] xs:-mt-4 xs:text-xs sm:ml-[469px]">$198.00</p>

                <hr className="xs:mt-5 xs:w-[357px] sm:w-[530px] " />

                <div className="flex justify-center items-center xs:text-xs xs:mt-10 xs:ml-[72px] text-white xs:h-[40px] xs:w-44 bg-[#029FAE] rounded-[30px] sm:ml-[160px] sm:text-sm">Member Checkout</div>






            </div>



        </div>
    )
}