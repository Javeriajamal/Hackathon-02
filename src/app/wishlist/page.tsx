/*"use client";

import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "@/app/(addtocart)/Redux/features/wishlistSlice";
import Link from "next/link";
import { Heart } from "lucide-react";
import Image from "next/image";

export default function WishlistPage() {
  const wishlistItems = useSelector((state: any) => state.wishlist) ?? [];
  const dispatch = useDispatch();

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Your Wishlist</h1>
      {wishlistItems.length === 0 ? (
        <p className="text-gray-600">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {wishlistItems.map((item) => (
            <div key={item.id} className="border p-4 rounded-lg flex items-center justify-between">
              {/* Image Display }
              <div className="w-[100px] h-[100px] relative">
                <Image
                  src={Array.isArray(item.image) ? item.image[0] : item.image} // Fix for array
                  alt={item.title || "Product Image"}
                  width={100}
                  height={100}
                  className="rounded-md object-cover"
                />
              </div>

              {/* Product Details }
              <div>
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-gray-700">${item.price}</p>
                <Link href={`/Product/${item.slug}`} className="text-blue-500 hover:underline">
                  View Product
                </Link>
              </div>

              {/* Remove from Wishlist Button }
              <button
                onClick={() => dispatch(removeFromWishlist(item.id))}
                className="text-red-500 hover:text-red-700"
              >
                <Heart fill="red" size={24} />
              </button>
            </div>
          ))}
        </div>
      )}
    </ div>
  );
}*/




"use client";

import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { removeFromWishlist } from "@/app/(addtocart)/Redux/features/wishlistSlice";
import Link from "next/link";
import { Heart } from "lucide-react";
import Image from "next/image";

export default function WishlistPage() {
  const reduxWishlist = useSelector((state: any) => state.wishlist) ?? [];
  const dispatch = useDispatch();
  const [wishlistItems, setWishlistItems] = useState<any[]>([]);

  // Avoid hydration mismatch by setting state on mount
  useEffect(() => {
    setWishlistItems(reduxWishlist);
  }, [reduxWishlist]);

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Your Wishlist</h1>
      {wishlistItems.length === 0 ? (
        <p className="text-gray-600">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {wishlistItems.map((item) => (
            <div key={item.id} className="border p-4 rounded-lg flex items-center justify-between">
              {/* Image Display */}
              <div className="w-[100px] h-[100px] relative">
                <Image
                  src={Array.isArray(item.image) ? item.image[0] : item.image} // Fix for array
                  alt={item.title || "Product Image"}
                  width={100}
                  height={100}
                  className="rounded-md object-cover"
                />
              </div>

              {/* Product Details */}
              <div>
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-gray-700">${item.price}</p>
                <Link href={`/Product/${item.slug}`} className="text-blue-500 hover:underline">
                  View Product
                </Link>
              </div>

              {/* Remove from Wishlist Button */}
              <button
                onClick={() => dispatch(removeFromWishlist(item.id))}
                className="text-red-500 hover:text-red-700"
              >
                <Heart fill="red" size={24} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

