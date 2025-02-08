/*"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { addtocart } from "@/app/(addtocart)/Redux/features/cartSlice"; // Correct action
import { RootState } from "@/app/(addtocart)/Redux/store"; // Import RootState
import { sanityFetch } from "@/sanity/lib/fetch";
import { Heart, ShoppingCart } from "lucide-react";

interface Product {
  title: string;
  imageUrl?: string;
  price: number;
  description: string;
  slug: string;
}

export default function ProductPage() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart); // Watch Redux state
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (!slug) return;

    async function fetchProduct() {
      try {
        const data = await sanityFetch(slug as string);
        setProduct(data);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [slug]);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    if (!product) return;

    dispatch(
      addtocart({
        id: slug,
        title: product.title,
        price: product.price,
        image: [product.imageUrl || "/default-image.png"], // Fix image format
        qty: quantity, // Ensure correct quantity
        discount: 0, // If required in cartSlice
        slug: slug as string,
        uuid: Math.floor(1000 + Math.random() * 9000), // Generate unique cart item
      })
    );
  };

  useEffect(() => {
    console.log("Cart Updated:", cartItems); // Debug to check if Redux updates
  }, [cartItems]);

  if (loading) {
    return <div className="text-center py-10 text-gray-600">Loading product...</div>;
  }

  if (!product) {
    return (
      <div className="text-center py-10">
        <h1 className="text-2xl font-bold text-red-500">Product Not Found</h1>
        <p>The product you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="h-[700px] mx-auto py-10">
      <h1 className="font-bold text-left xl:text-4xl xl:ml-auto xl:mr-[270px] xl:mt-20 xl:w-[340px]">
        {product.title}
      </h1>

      <img
        src={product.imageUrl || "/default-image.png"}
        alt={product.title}
        className="xl:w-full xl:max-w-md xl:mx-52 xl:my-5 xl:-mt-14 rounded-2xl"
      />

      <p className="text-white bg-[#029FAE] font-semibold xl:text-right xl:ml-[740px] xl:-mt-[374px] xl:w-28 xl:h-8 rounded-2xl xl:text-lg xl:px-4">
        ${product.price} USD
      </p>

      <hr className="xl:w-96 xl:ml-[740px] xl:mt-8" />

      <p className="text-gray-600 xl:mt-5 xl:text-md xl:ml-[740px] xl:w-96">
        {product.description}
      </p>

      {/* Quantity Selector }
      <div className="flex items-center font-semibold text-xl gap-4 xl:ml-[740px] xl:mt-8">
        Quantity:
        <button onClick={decreaseQuantity} className="px-3 py-1 bg-gray-300 rounded-md text-black text-lg">
          -
        </button>
        <span className="text-lg font-bold">{quantity}</span>
        <button onClick={increaseQuantity} className="px-3 py-1 bg-gray-300 rounded-md text-black text-lg">
          +
        </button>
      </div>

      {/* Add to Cart Button }
      <button
        onClick={handleAddToCart}
        className="flex flex-row justify-center items-center text-white bg-[#029FAE] xl:h-12 xl:w-44 xl:text-[17px] xl:ml-[740px] xl:mt-10 rounded-md cursor-pointer"
      >
        <ShoppingCart size={24} className="mr-2" /> Add To Cart
      </button>

      {/* Go to Cart Link }
      <a href="/cart" className="text-center border border-gray-300 flex flex-row justify-center items-center text-black bg-white hover:bg-gray-100 xl:h-12 xl:w-44 xl:text-[16px] xl:ml-[940px] xl:-mt-12 rounded-md cursor-pointer">
        <Heart size={20} className="mr-2" /> Add to Wishlist
      </a>
    </div>
  );
}*/



"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/(addtocart)/Redux/store";
import { addtocart } from "@/app/(addtocart)/Redux/features/cartSlice"; 
import { addToWishlist, removeFromWishlist } from "@/app/(addtocart)/Redux/features/wishlistSlice";
import { sanityFetch } from "@/sanity/lib/fetch";
import { Heart, ShoppingCart } from "lucide-react";

interface Product {
  title: string;
  imageUrl?: string;
  price: number;
  description: string;
  slug: string;
}

export default function ProductPage() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  // Get Redux states
  const cart = useSelector((state: RootState) => state.cart); // Track cart updates
  const wishlist = useSelector((state: RootState) => state.wishlist);

  // Check if product is in the wishlist
  const isInWishlist = wishlist.some((item) => item.id === slug);

  useEffect(() => {
    if (!slug) return;

    async function fetchProduct() {
      try {
        const data = await sanityFetch(slug as string);
        setProduct(data);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [slug]);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    if (!product) return;

    dispatch(
      addtocart({
        id: slug,
        title: product.title,
        price: product.price,
        image: product.imageUrl || "/default-image.png", 
        qty: quantity,
        discount: 0, 
        slug: slug as string,
        uuid: Math.floor(1000 + Math.random() * 9000), // Generate unique cart item
      })
    );
  };

  // Toggle Wishlist
  const toggleWishlist = () => {
    if (!product) return;

    if (isInWishlist) {
      dispatch(removeFromWishlist(slug));
    } else {
      dispatch(
        addToWishlist({
          id: slug,
          slug: slug,
          title: product.title,
          price: product.price,
          image: product.imageUrl || "/default-image.png",
        })
      );
    }
  };

  if (loading) {
    return <div className="text-center py-10 text-gray-600">Loading product...</div>;
  }

  if (!product) {
    return (
      <div className="text-center py-10">
        <h1 className="text-2xl font-bold text-red-500">Product Not Found</h1>
        <p>The product you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="h-[700px] mx-auto py-10">
      <h1 className="font-bold text-left xl:text-4xl xl:ml-auto xl:mr-[270px] xl:mt-20 xl:w-[340px]">
        {product.title}
      </h1>

      <img
        src={product.imageUrl || "/default-image.png"}
        alt={product.title}
        className="xl:w-full xl:max-w-md xl:mx-52 xl:my-5 xl:-mt-14 rounded-2xl"
      />

      <p className="text-white bg-[#029FAE] font-semibold xl:text-right xl:ml-[740px] xl:-mt-[374px] xl:w-28 xl:h-8 rounded-2xl xl:text-lg xl:px-4">
        ${product.price} USD
      </p>

      <hr className="xl:w-96 xl:ml-[740px] xl:mt-8" />

      <p className="text-gray-600 xl:mt-5 xl:text-md xl:ml-[740px] xl:w-96">
        {product.description}
      </p>

      {/* Quantity Selector */}
      <div className="flex items-center font-semibold text-xl gap-4 xl:ml-[740px] xl:mt-8">
        Quantity:
        <button onClick={decreaseQuantity} className="px-3 py-1 bg-gray-300 rounded-md text-black text-lg">
          -
        </button>
        <span className="text-lg font-bold">{quantity}</span>
        <button onClick={increaseQuantity} className="px-3 py-1 bg-gray-300 rounded-md text-black text-lg">
          +
        </button>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        className="flex flex-row justify-center items-center text-white bg-[#029FAE] xl:h-12 xl:w-44 xl:text-[17px] xl:ml-[740px] xl:mt-10 rounded-md cursor-pointer"
      >
        <ShoppingCart size={24} className="mr-2" /> Add To Cart
      </button>

      {/* Wishlist Button */}
      <button
        onClick={toggleWishlist}
        className="flex flex-row justify-center items-center border border-gray-300 xl:h-12 xl:w-44 xl:text-[16px] xl:ml-[940px] xl:-mt-12 rounded-md cursor-pointer"
      >
        <Heart size={20} className={isInWishlist ? "text-red-500" : "text-gray-500"} />
        <span className="ml-2">{isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}</span>
      </button>
    </div>
  );
}

