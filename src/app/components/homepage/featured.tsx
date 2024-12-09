export default function Featured(){
    return(
        <section className="xs:mt-10 xs:h-96">
        <h1 className="mx-auto xs:text-[20px] xs:ml-5 font-semibold text-[#272343]">Featured Products</h1>

        <div className="grid xs:grid-cols-2 xs:gap-2 xs:mx-2 xs:mt-5">
            <img src="/images/Products 1.png" alt="" className="xs:h-40 xs:w-44" />
            <img src="/images/Products2.png" alt="" className="xs:h-40 xs:w-44" />
            <img src="/images/Products 3.png" alt="" className="xs:h-40 xs:w-44" />
            <img src="/images/Products 4.png" alt="" className="xs:h-40 xs:w-44" />

        </div>

        </section>
    )
}