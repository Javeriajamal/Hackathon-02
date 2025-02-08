/*import Link from "next/link";

export default function Middle(){
    return(
        <>

        <div className="xs:h-14 w-screen bg-[#F0F2F3] overflow-hidden">

                <div className="xs:ml-4 flex flex-row gap-2 xs:py-3 sm:ml-12 md:ml-16 lg:ml-32  xl:ml-52">
                <img src="/images/Comfysofa.png" alt="logo" className="flex flex-row xs:h-[28px] xl:h-[33px] " />
                
                <div className="w-[118px] h-[31px] xs:text-[20px] xs:text-lg sm:w-[130px] sm:h-[40px] sm:text-[20px] text-[#272343] font-medium leading-[120%] xl:text-2xl ">Comforty</div>

                <div className="xs:w-24 xs:h-8 xs:ml-[122px] xs:-mt-0 bg-white rounded-md justify-end sm:ml-[262px] md:ml-[370px] lg:ml-[497px] xl:ml-[670px]  ">
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
}*/

/*"use client";


import Link from "next/link";
import { useSelector } from "react-redux";

export default function Middle() {
  const cartItems = useSelector((state: any) => state.cart);

  // Calculate total quantity of items in the cart
  const totalQuantity = cartItems.reduce((total: number, item: any) => total + item.qty, 0);

  return (
    <div className="xs:h-14 w-screen bg-[#F0F2F3] overflow-hidden">
      <div className="xs:ml-4 flex flex-row gap-2 xs:py-3 sm:ml-12 md:ml-16 lg:ml-32 xl:ml-52">
        {/* Logo  }
        <img src="/images/Comfysofa.png" alt="logo" className="flex flex-row xs:h-[28px] xl:h-[33px]" />
        <div className="w-[118px] h-[31px] xs:text-[20px] xs:text-lg sm:w-[130px] sm:h-[40px] sm:text-[20px] text-[#272343] font-medium leading-[120%] xl:text-2xl">
          Comforty
        </div>

        {/* Cart Section }
        <div className="relative xs:w-24 xs:h-8 xs:ml-[122px] xs:-mt-0 bg-white rounded-md flex items-center justify-center sm:ml-[262px] md:ml-[370px] lg:ml-[497px] xl:ml-[670px]">
          <Link href="/cart">
            <img src="/images/cart.png" className="xs:h-4 xs:w-4 xs:ml-3 xs:my-2" />
          </Link>
          {/* Cart Text }
          <p className="xs:text-[11px] xs:ml-9 xs:-mt-6">Cart</p>

          {/* Cart Quantity Badge }
          {totalQuantity > 0 && (
            <span className="absolute top-0 right-0 xs:-mt-2 xs:-mr-2 bg-red-500 text-white text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full">
              {totalQuantity}
            </span>
          )}

          <img src="/images/No.png" className="xs:h-4 xs:w-4 xs:ml-16 xs:-mt-4" />
        </div>
      </div>
    </div>
  );
}*/



/*"use client"; // Required for useSelector

import Link from "next/link";
import { useSelector } from "react-redux";

export default function Middle() {
  const cartItems = useSelector((state: any) => state.cart.cart); // Ensure path is correct

  // Calculate total quantity of items in the cart
  const totalQuantity = (cartItems ?? []).reduce((total: number, item: any) => total + item.qty, 0);

  return (
    <div className="xs:h-14 w-screen bg-[#F0F2F3] overflow-hidden">
      <div className="xs:ml-4 flex flex-row gap-2 xs:py-3 sm:ml-12 md:ml-16 lg:ml-32 xl:ml-52">
        <img src="/images/Comfysofa.png" alt="logo" className="xs:h-[28px] xl:h-[33px]" />

        <div className="w-[118px] h-[31px] xs:text-[20px] xs:text-lg sm:w-[130px] sm:h-[40px] sm:text-[20px] text-[#272343] font-medium leading-[120%] xl:text-2xl">
          Comforty
        </div>

        <div className="xs:w-24 xs:h-8 xs:ml-[122px] bg-white rounded-md justify-end sm:ml-[262px] md:ml-[370px] lg:ml-[497px] xl:ml-[670px] relative">
          <Link href="/cart">
            <img src="/images/cart.png" className="xs:h-4 xs:w-4 xs:ml-3 xs:my-2" />
          </Link>
          <p className="xs:text-[11px] xs:ml-9 xs:-mt-6">Cart</p>

          {/* Show total quantity as badge }
          {totalQuantity > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-2">
              {totalQuantity}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}*/


/*/*/


/*"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/app/(addtocart)/Redux/store"; // Import RootState
import { ShoppingCart } from "lucide-react";

export default function Middle() {
  // Use useSelector with proper state typing
  const cartItems = useSelector((state: RootState) => state.cart) || [];

  // Ensure correct quantity property (check whether it's `qty` or `quantity` in Redux state)
  const totalQuantity = cartItems.reduce((total, item) => total + (item.qty || 0), 0);

  return (
    <div className="xs:h-14 w-screen bg-[#F0F2F3] overflow-hidden">
      <div className="xs:ml-4 flex flex-row gap-2 xs:py-3 sm:ml-12 md:ml-16 lg:ml-32 xl:ml-52">
        <img src="/images/Comfysofa.png" alt="logo" className="flex flex-row xs:h-[28px] xl:h-[33px]" />
        
        <div className="w-[118px] h-[31px] xs:text-[20px] xs:text-lg sm:w-[130px] sm:h-[40px] sm:text-[20px] text-[#272343] font-medium leading-[120%] xl:text-2xl">
          Comforty
        </div>

        {/* Cart Icon with Badge }
        <Link href="/cart">
          <div className="relative flex items-center xs:w-32 xs:h-10 xs:ml-[80px] bg-white rounded-md sm:ml-[262px] md:ml-[370px] lg:ml-[497px] xl:ml-[637px] xl:-mt-1  ">
            <ShoppingCart size={20} className="text-gray-500 xl:ml-4"/>
            <p className="xs:text-[16px] xs:ml-3">Cart</p>

            {/* Cart Badge }
            {totalQuantity > 0 && (
              <span className=" -right-2 bg-[#029FAE] text-white text-xs font-bold px-2 py-1 rounded-full xl:ml-3">
                {totalQuantity}
              </span>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
}*/




/*"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/app/(addtocart)/Redux/store";
import { ShoppingCart, Heart } from "lucide-react";

export default function Middle() {
  // Get cart and wishlist data from Redux store
  const cartItems = useSelector((state: RootState) => state.cart) || [];
  const wishlistItems = useSelector((state: RootState) => state.wishlist) || [];

  // Calculate total quantity in cart
  const totalQuantity = cartItems.reduce((total, item) => total + (item.qty || 0), 0);

  return (
    <div className="xs:h-14 w-screen bg-[#F0F2F3] overflow-hidden">
      <div className="xs:ml-4 flex flex-row gap-2 xs:py-3 sm:ml-12 md:ml-16 lg:ml-32 xl:ml-52">
        <img src="/images/Comfysofa.png" alt="logo" className="flex flex-row xs:h-[28px] xl:h-[33px]" />
        
        <div className="w-[118px] h-[31px] xs:text-[20px] xs:text-lg sm:w-[130px] sm:h-[40px] sm:text-[20px] text-[#272343] font-medium leading-[120%] xl:text-2xl">
          Comforty
        </div>

        {/* Cart Icon with Badge }
        <Link href="/cart">
          <div className="relative flex items-center xs:w-32 xs:h-10 xs:ml-[80px] bg-white rounded-md sm:ml-[262px] md:ml-[370px] lg:ml-[497px] xl:ml-[637px] xl:-mt-1">
            <ShoppingCart size={20} className="text-gray-500 xl:ml-4"/>
            <p className="xs:text-[16px] xs:ml-3">Cart</p>
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#029FAE] text-white text-xs font-bold px-2 py-1 rounded-full">
                {totalQuantity}
              </span>
            )}
          </div>
        </Link>

        {/* Wishlist Icon with Badge/}
        <Link href="/wishlist">
          <div className="relative flex items-center xs:w-32 xs:h-10 xs:ml-4 bg-white rounded-md xl:-mt-1">
            <Heart size={20} className="text-gray-500 xl:ml-4"/>
            <p className="xs:text-[16px] xs:ml-3">Wishlist</p>
            {wishlistItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                {wishlistItems.length}
              </span>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
}*/

/*//*/

"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/app/(addtocart)/Redux/store";
import { ShoppingCart, Heart } from "lucide-react";
import { useEffect, useState } from "react";

export default function Middle() {
  // Get cart and wishlist data from Redux store
  const cartItems = useSelector((state: RootState) => state.cart) || [];
  const wishlistItems = useSelector((state: RootState) => state.wishlist) || [];

  // State to prevent hydration errors
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Calculate total quantity in cart
  const totalQuantity = cartItems.reduce((total, item) => total + (item.qty || 0), 0);

  return (
    <div className="xs:h-14 w-screen bg-[#F0F2F3] overflow-hidden">
      <div className="xs:ml-4 flex flex-row gap-2 xs:py-3 sm:ml-12 md:ml-16 lg:ml-32 xl:ml-52">
        <img src="/images/Comfysofa.png" alt="logo" className="flex flex-row xs:h-[28px] xl:h-[33px]" />
        
        <div className="w-[118px] h-[31px] xs:text-[20px] xs:text-lg sm:w-[130px] sm:h-[40px] sm:text-[20px] text-[#272343] font-medium leading-[120%] xl:text-2xl">
          Comforty
        </div>

        {/* Cart Icon with Badge */}
        <Link href="/cart">
          <div className="relative flex items-center xs:w-32 xs:h-10 xs:ml-[80px] bg-white rounded-md sm:ml-[262px] md:ml-[370px] lg:ml-[497px] xl:ml-[637px] xl:-mt-1">
            <ShoppingCart size={20} className="text-gray-500 xl:ml-4"/>
            <p className="xs:text-[16px] xs:ml-3">Cart</p>
            {mounted && totalQuantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#029FAE] text-white text-xs font-bold px-2 py-1 rounded-full">
                {totalQuantity}
              </span>
            )}
          </div>
        </Link>

        {/* Wishlist Icon with Badge */}
        <Link href="/wishlist">
          <div className="relative flex items-center xs:w-32 xs:h-10 xs:ml-4 bg-white rounded-md xl:-mt-1">
            <Heart size={20} className="text-gray-500 xl:ml-4"/>
            <p className="xs:text-[16px] xs:ml-3">Wishlist</p>
            {mounted && wishlistItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                {wishlistItems.length}
              </span>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
}
