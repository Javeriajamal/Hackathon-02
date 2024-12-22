export default function SingleProduct(){
    return(
        <div className="xs:h-auto">
        <div className="flex xs:h-auto xs:mt-14 sm:mx-4 sm:mt-20">
            <img src="/images/Image 3.png" alt="" className="xs:w-52 xs:h-60 xs:ml-3 sm:w-72 sm:h-72 sm:ml-10"/>

            <div className="">
            <h1 className="text-[#272343] font-bold xs:text-[21px] xs:ml-6 xs:-mt-1 xs:w-32 sm:ml-12 sm:text-[27px] sm:w-44 ">Library Stool Chair</h1>
            <div className="bg-[#029FAE] text-white rounded-2xl xs:w-16 xs:h-6 xs:py-1 xs:px-1 xs:text-[10px] xs:ml-6 xs:mt-2 sm:ml-12">$20.00 USD</div>

            <hr className="xs:w-36 text-[#D9D9D9] xs:ml-6 xs:mt-3 sm:ml-12 sm:w-44"/>

            <p className="text-[#D9D9D9] xs:text-[10px] xs:w-40 xs:ml-6 xs:mt-3 sm:ml-12 sm:w-48">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing</p>

            <div className="flex flex-row xs:gap-1 justify-center items-center text-white bg-[#029FAE] xs:w-24  rounded-md xs:h-8 xs:text-[9px] xs:ml-6 xs:mt-3 sm:ml-12" >
                <img src="/images/whiteCart.png" alt="" className="xs:w-4 xs:h-4"/>
                Add To cart</div>

            </div>
        </div>


        <div className="xs:mt-20 xs:h-auto xs:pb-14 sm:mt-24">
            <h2 className="font-semibold xs:ml-8 xs:text-[20px] sm:text-[22px] sm:ml-10 ">Featured Products</h2>

            <div className="xs:grid xs:grid-cols-2 xs:gap-4 xs:mx-8 xs:mt-4 sm:flex sm:mx-10  ">
                <img src="/images/Products 7.png" alt="" className="xs:w-44 xs:h-44 sm:w-36 sm:h-36" />
                <img src="/images/Products 1.png" alt="" className="xs:w-44 xs:h-44 sm:w-36 sm:h-36" />
                <img src="/images/Products 10.png" alt="" className="xs:w-44 xs:h-44 xs:mt-4 sm:mt-0 sm:w-36 sm:h-36" />
                <img src="/images/Products 3.png" alt="" className="xs:w-44 xs:h-44 xs:mt-4 sm:mt-0 sm:w-36 sm:h-36" />
                <img src="/images/Products 11.png" alt="" className="xs:w-44 xs:h-44 xs:mt-4 sm:mt-0 xs:hidden sm:hidden sm:w-36 sm:h-36" />


            </div>
        </div>
        </div>





    )
}