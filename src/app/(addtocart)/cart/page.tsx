"use client"
import React from 'react'
import { useSelector } from 'react-redux'
import Cartpage from './cartpage';
import { Button } from '@/components/ui/button';




interface CartItem {
  price: number;
  discount: number;
  qty: number;
}

function Cart() {
  
  // formula 
   
  const cartArray: CartItem[] = useSelector((state: { cart: CartItem[] }) => state.cart);

  const total = cartArray.reduce((total: number, arr: CartItem) => {
    const discountedPrice = arr.discount > 0 ? arr.price - (arr.price * arr.discount) / 100 : arr.price;
    return total + discountedPrice * arr.qty;
  }, 0);


   
  return (
      <div className=' mt-24 flex flex-col lg:flex-row justify-around items-center lg:items-start'>
         <Cartpage/>
           {/* Order Summary */}
           <div className="bg-white p-6 w-[90%] lg:w-[330px] lg:h-[330px] border rounded-[20px] mt-5 lg:mt-0 xl:mr-44">
                             <h2 className="text-2xl font-bold mb-5 ">Summary</h2>
                             <div className="space-y-2">
                               <div className="flex justify-between">
                                 <p >Subtotal</p>
                                 <p>${total}</p>
                               </div>
                               {/*<div className="flex justify-between">
                                 <p>Discount (-20%)</p>
                                 <p>-${0}</p>
                               </div>*/}
                               <div className="flex justify-between">
                                 <p className='mt-3 mb-3'>Delivery Fee</p>
                                 <p className='mt-3 mb-3'>$0</p>
                               </div>
                               <div className="border-t pt-4 flex justify-between font-bold">
                                 <p className='text-lg'>Total</p>
                                 <p className='text-lg'>${total}</p>
                               </div>
                               {/*<div className="flex justify-between items-center">
                                <input className="h-10 rounded-[6px] bg-[#F0F0F0] px-4 w-[200px] md:w-[360px] border-none" type="search" placeholder="Add promo code" />
                                <Button className="w-[100px] rounded-[20px]">Apply</Button>
                               </div>*/}
                             </div>
                             <p className='font-semibold text-center mt-3'>
                              Sign in to proceed with Checkout
                             </p>
                             <button className="w-32 mt-4 bg-[#029FAE] text-white py-2 rounded-3xl">
                               Sign In
                             </button>
                             <button className="w-32 mt-4 bg-white text-black border border-gray-300 py-2 rounded-3xl ml-6">
                               Sign Up
                             </button>
                         </div>
        
      </div>
  )
}

export default Cart