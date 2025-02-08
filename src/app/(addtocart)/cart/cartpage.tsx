/*import Image from 'next/image'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Minus, Plus, Trash } from "lucide-react";
import { addition, delItem, subraction } from '../Redux/features/cartSlice';

function Cartpage() {
    const cartItem = useSelector((state:any)=>state.cart)
    const dispatch = useDispatch();
  return (
    <div>
      {
        cartItem.length >= 1 && 
        cartItem.map((items:any,i:any)=>{
            return(
                <div key={i} className="flex  lg:w-[650px] p-4 rounded-[16px] border  justify-between">
                    <div className="flex">
                    <Image src={Array.isArray(items.image) && items.image.length > 0 ? items.image[0]} alt={items.title} width={100} height={100} ></Image>
                    <div className="flex flex-col ml-3">
                        <span>Size:{items.size[0]}</span>
                        <span>Color:{items.color[0]}</span>
                        {/* <span>${items.price}</span> }
                        <p className="font-bold" key={i}>${items.discount > 0 ? (items.price - 
                       (items.price * items.discount) / 100) * items.qty : items.price * items.qty}</p>
                    </div>
                    </div>
                    <div className="relative">
                         {/* btn }
                      <button  onClick={()=>dispatch(delItem(items.uuid))}><Trash  className="text-red-500 cursor-pointer absolute right-2 top-0"/></button>
                     {/* INcreament decreament }
                     <div className='flex justify-start items-center pt-10 '>
                     <button 
                     onClick={()=>dispatch(subraction(items))}
                     className='w-10'><Minus/></button>
                     <span className='w-4'>{items.qty}</span>
                     <button
                       onClick={()=>dispatch(addition(items))}
                     className='w-10'><Plus/></button>
                     </div>
                    </div>

                </div>
            )
          })
      }
    </div>
  )
}

export default Cartpage;*/




/*import Image from 'next/image';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Minus, Plus, Trash } from "lucide-react";
import { addition, delItem, subraction } from '../Redux/features/cartSlice';

const CartPage = () => {
  const cartItem = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="p-4 space-y-4">
      {cartItem.length > 0 ? (
        cartItem.map((item: any, i: number) => (
          <div key={i} className="flex lg:w-[650px] p-4 rounded-lg border justify-between">
            {/* Product Image & Details }
            <div className="flex items-center">
              <Image
                src={Array.isArray(item.image) && item.image.length > 0 ? item.image[0] : "/fallback.jpg"}
                alt={item.title || "Product Image"}
                width={100}
                height={100}
                className="rounded-md"
              />
              <div className="flex flex-col ml-3">
                <span>Size: {item.size?.[0] || "N/A"}</span>
                <p className="font-bold">
                  ${item.discount > 0 
                    ? ((item.price - (item.price * item.discount) / 100) * item.qty).toFixed(2) 
                    : (item.price * item.qty).toFixed(2)}
                </p>
              </div>
            </div>

            {/* Actions (Delete & Quantity Controls) }
            <div className="relative flex flex-col items-end">
              {/* Delete Button }
              <button onClick={() => dispatch(delItem(item.uuid))} aria-label="Remove item">
                <Trash className="text-red-500 cursor-pointer absolute right-2 top-0" />
              </button>

              {/* Quantity Controls }
              <div className="flex items-center mt-10 space-x-3">
                <button onClick={() => dispatch(subraction(item))} className="w-10 p-2">
                  <Minus />
                </button>
                <span className="w-6 text-center">{item.qty}</span>
                <button onClick={() => dispatch(addition(item))} className="w-10 p-2">
                  <Plus />
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;*/

/*/*/

/*import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Minus, Plus, Trash, Heart } from "lucide-react";
import { addition, delItem, subraction } from "../Redux/features/cartSlice";
import { useRouter } from "next/navigation"; 

const CartPage = () => {
  const cartItem = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();
  const router = useRouter();


  return (
    <div className="p-4 ">
      {cartItem.length > 0 ? (
        cartItem.map((item: any, i: number) => (
          <div
            key={item.uuid || i}
            className="flex lg:w-[570px] lg:h-[120px] p-4 rounded-[16px] border justify-between items-center mb-4"
          >
            {/* Image }
            <Image
              src={Array.isArray(item.imageUrl) && item.image.length > 0 ? item.imageUrl[0] : "/fallback.jpg"}
              alt={item.title || "Product Image"}
              width={100}
              height={100}
              className="rounded-md h-[100px] w-[100px] "
            />

            {/* Product Details }
            <div className="flex flex-col w-[150px] -ml-48">
              <p className="font-semibold text-lg truncate ">{item.title || "Untitled Product"}</p>
              <p className=" text-gray-500 mb-2 ">Price: ${(item.price).toFixed(2)}</p>

            {/* Quantity Controls }
            
            <div className="flex items-center gap-2">
              <button 
                onClick={() => dispatch(subraction(item))}
                className="w-8 h-8 flex justify-center items-center bg-gray-200 rounded-md"
              >
                <Minus size={16} />
              </button>
              <span className="w-6 text-center">{item.qty || 1}</span>
              <button 
                onClick={() => dispatch(addition(item))}
                className="w-8 h-8 flex justify-center items-center bg-gray-200 rounded-md"
              >
                <Plus size={16} />
              </button>
            </div>
            </div>


            {/* Trash & Wishlist Buttons }
            <div className="flex items-center gap-3">
              <button onClick={() => dispatch(delItem(item.uuid))} className="text-gray-500">
                <Trash size={20} />
              </button>
              <button onClick={() => router.push("/wishlist")} className="text-gray-500">
                <Heart size={20} />
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;*/






"use client"; 

import Image from "next/image";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Minus, Plus, Trash, Heart } from "lucide-react";
import { addition, delItem, subraction } from "../Redux/features/cartSlice";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const cartItem = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    console.log("Cart Items:", cartItem); // Debugging cart state
  }, [cartItem]);

  return (

    <div className="p-4">
            <h1 className="text-3xl font-bold -mt-14 mb-8 ml-14">Shopping Cart</h1>

      {cartItem.length > 0 ? (
        cartItem.map((item: any, i: number) => {
          console.log("Image URL:", item.image); // Debug image path
          console.log("Quantity:", item.qty); // Debug quantity updates

          return (
            <div
              key={item.uuid || i}
              className="flex lg:w-[580px] lg:h-[140px] p-4 rounded-[16px] border justify-between items-center mb-4 xl:ml-44 "
            >
              {/* Image */}
              <div className="w-[100px] h-[100px] relative">
                <Image
                  src={item.image[0]} 
                  alt={item.title || "Product Image"}
                  width={100}
                  height={100}
                  className="rounded-md object-cover "
                />
              </div>

              {/* Product Details */}
              <div className="flex flex-col w-[150px] -ml-52">
                <p className="font-semibold text-lg truncate ">{item.title || "Untitled Product"}</p>
                <p className="text-gray-500">Price: ${(item.price).toFixed(2)}</p>
              

              {/* Quantity Controls */}
              <div className="flex items-center gap-1 mt-5">
                <button
                  onClick={() => dispatch(subraction(item))}
                  className="w-7 h-7 flex justify-center items-center  bg-gray-200 rounded-md"
                >
                  <Minus size={14} />
                </button>
                <span className="w-6 font-medium  text-center">{item.qty || 1}</span>
                <button
                  onClick={() => dispatch(addition(item))}
                  className="w-7 h-7 flex justify-center items-center bg-gray-200 rounded-md"
                >
                  <Plus size={14} />
                </button>
              </div>
              </div>

              {/* Trash & Wishlist Buttons */}
              <div className="flex items-center gap-3">
                <button onClick={() => dispatch(delItem(item.uuid))} className="text-gray-500">
                  <Trash size={20} />
                </button>
                <button onClick={() => router.push("/wishlist")} className="text-gray-500">
                  <Heart size={20} />
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;

