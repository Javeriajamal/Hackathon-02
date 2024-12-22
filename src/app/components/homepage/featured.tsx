export default function Featured(){
    return(
        <section className="xs:mt-10 xs:h-auto sm:mt-16 md:mt-0">
        <h1 className="mx-auto xs:text-[20px] xs:ml-5 font-semibold text-[#272343] sm:ml-20 sm:text-[22px] md:ml-16 xl:ml-52 ">Featured Products</h1>

        <div className="grid xs:grid-cols-2 xs:gap-4 xs:mx-6 xs:mt-5 sm:mx-20 sm:gap-6 md:flex md:mx-16 md:gap-3 xl:mx-52">
            <img src="/images/Products 1.png" alt="" className="xs:h-40 xs:w-44 sm:h-60 sm:w-72 md:w-40 md:h-44 xl:w-56 xl:h-64 " />
            <img src="/images/Products2.png" alt="" className="xs:h-40 xs:w-44 sm:h-60 sm:w-72 md:w-40 md:h-44 xl:w-56 xl:h-64" />
            <img src="/images/Products 3.png" alt="" className="xs:h-40 xs:w-44 xs:mt-4 sm:h-60 sm:w-72 md:w-40 md:h-44 md:mt-0 xl:w-56 xl:h-64" />
            <img src="/images/Products 4.png" alt="" className="xs:h-40 xs:w-44 xs:mt-4 sm:h-60 sm:w-72 md:w-40 md:h-44 md:mt-0 xl:w-56 xl:h-64" />

        </div>

        </section>
    )
}