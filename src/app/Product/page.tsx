
import Link from "next/link";
import { fetchAllProducts } from "@/sanity/lib/fetch";
import { allproducts } from "@/sanity/lib/queries";

type Products = {
  _id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  slug?: string | null; // Ensure slug is optional and can be null
};

export default async function AllProducts() {
  const products: Products[] = await fetchAllProducts({ query: allproducts });
  console.log("Fetched Products:", products);

  return (
    <div className="xs:mt-10 xs:h-auto lg:mt-20">
      <h1 className="ml-16 text-xl mt-12 pt-5 mx-auto xs:text-[20px] xs:ml-7 font-semibold text-[#272343] sm:ml-1 lg:ml-32 xl:ml-[200px] xl:text-[24px]">
        All Products
      </h1>

      <div className="grid xs:grid-cols-2 xs:gap-3 xs:mx-6 xs:mt-5 sm:flex sm:flex-wrap sm:mx-16 md:mx-14 lg:mx-32 xl:mx-[200px] xl:gap-4 xl:pb-10 xl:grid xl:grid-cols-4">
        {products?.map((product) => {
          console.log("Product ID:", product._id);
          console.log("Slug Value:", product.slug);

          return (
            <div className="py-4 xl:pb-10" key={product._id}>
              {product.slug ? (
                <Link href={`/Product/${product.slug}`}>
                  <img
                    src={product.imageUrl || "/default-image.png"}
                    alt={product.title}
                    className="xs:h-44 xs:w-44 sm:mt-0 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-[182px] lg:h-56 xl:w-[220px] xl:h-56"
                  />
                </Link>
              ) : (
                <img
                  src={product.imageUrl || "/default-image.png"}
                  alt={product.title}
                  className="xs:h-44 xs:w-44 sm:mt-0 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-[182px] lg:h-56 xl:w-[220px] xl:h-56 opacity-50"
                />
              )}

              <h2 className="text-lg font-semibold pt-2 text-[#029FAE]">
                {product.title}
              </h2>
              <p className="text-left mt-2 font-bold">${product.price}</p>

              <img
                src="/images/AddCart-grey.png"
                alt="cart"
                className="h-10 w-10 xl:ml-[180px] -mt-12"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
