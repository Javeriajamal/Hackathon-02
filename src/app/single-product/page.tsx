export default function SingleProduct(){
    return(
        <div className="xs:h-auto">
        <div className="flex xs:h-auto xs:mt-14">
            <img src="/images/Image 3.png" alt="" className="xs:w-52 xs:h-60 xs:ml-3"/>

            <div className="">
            <h1 className="text-[#272343] font-bold xs:text-[21px] xs:ml-6 xs:-mt-1 xs:w-32">Library Stool Chair</h1>
            <div className="bg-[#029FAE] text-white rounded-2xl xs:w-16 xs:h-6 xs:py-1 xs:px-1 xs:text-[10px] xs:ml-6 xs:mt-2">$20.00 USD</div>

            <hr className="xs:w-36 text-[#D9D9D9] xs:ml-6 xs:mt-3"/>

            <p className="text-[#D9D9D9] xs:text-[10px] xs:w-40 xs:ml-6 xs:mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing</p>

            <div className="flex flex-row xs:gap-1 justify-center items-center text-white bg-[#029FAE] xs:w-24  rounded-md xs:h-8 xs:text-[9px] xs:ml-6 xs:mt-3" >
                <img src="/images/whiteCart.png" alt="" className="xs:w-4 xs:h-4"/>
                Add To cart</div>

            </div>
        </div>


        <div className="xs:mt-20 xs:h-auto xs:pb-14">
            <h2 className="font-semibold xs:ml-8 xs:text-[20px]">Featured Products</h2>

            <div className="flex xs:gap-4 xs:mx-8 xs:mt-4">
                <img src="/images/Products 7.png" alt="" className="xs:w-40 xs:h-40" />
                <img src="/images/Products 1.png" alt="" className="xs:w-40 xs:h-40" />
            </div>

            <div className="flex xs:gap-4 xs:mx-8 xs:mt-4">
                <img src="/images/Products 10.png" alt="" className="xs:w-40 xs:h-40 xs:mt-4" />
                <img src="/images/Products 3.png" alt="" className="xs:w-40 xs:h-40 xs:mt-4" />
            </div>
        </div>
        </div>





    )
}