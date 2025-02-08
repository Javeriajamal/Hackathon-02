/*import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the type for a single cart item
export type Cart = {
  id: string; // Ensure ID is always a string
  title: string;
  price: number;
  image: string[];
  slug: string ;
  qty: number;
  discount: number;
  color?: string; // Optional property for color
  size?: string;  // Optional property for size
  uuid: number;   // Unique identifier for cart items
};

// Define the initial state as an empty cart
const initialState: Cart[] = [];

// Create the slice
export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add an item to the cart
    addtocart(state, action: PayloadAction<Omit<Cart, "uuid">>) {
      const uuid = Math.floor(1000 + Math.random() * 9000); // Generate a unique identifier
      const newItem = { ...action.payload, uuid }; // Add UUID to the item
      state.push(newItem);
    },


    // Delete an item from the cart
    delItem(state, action: PayloadAction<number>) {
      return state.filter((item) => item.uuid !== action.payload); // Filter out the item by UUID
    },

    // Increment the quantity of a specific item
    addition(state, action: PayloadAction<{ id: string; color?: string; size?: string }>) {
      const item = state.find(
        (val) =>
          val.id === action.payload.id &&
          val.color === action.payload.color &&
          val.size === action.payload.size
      );

      if (item) {
        item.qty += 1; // Increment quantity
      }
    },

    // Decrement the quantity of a specific item
    subraction(state, action: PayloadAction<{ id: string; color?: string; size?: string }>) {
      const item = state.find(
        (val) =>
          val.id === action.payload.id &&
          val.color === action.payload.color &&
          val.size === action.payload.size
      );

      if (item && item.qty > 1) {
        item.qty -= 1; // Decrement quantity if it's greater than 1
      }
    },
  },
});

// Export actions
export const { addtocart, delItem, addition, subraction } = CartSlice.actions;

// Export reducer
export default CartSlice.reducer;*/


import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the type for a single cart item
export type Cart = {
  id: string;
  title: string;
  price: number;
  image: string;
  slug: string;
  qty: number;
  discount: number;
  color?: string;
  size?: string;
  uuid: number;
};

// Define the initial state as an empty cart
const initialState: Cart[] = [];

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add an item to the cart or update quantity if it already exists
    addtocart(state, action: PayloadAction<Omit<Cart, "uuid">>) {
      const existingItem = state.find(
        (item) =>
          item.id === action.payload.id &&
          item.color === action.payload.color &&
          item.size === action.payload.size
      );

      if (existingItem) {
        existingItem.qty += action.payload.qty; // Increase quantity if item exists
      } else {
        const uuid = Math.floor(1000 + Math.random() * 9000);
        const newItem = { ...action.payload, uuid };
        state.push(newItem);
      }
    },

    // Delete an item from the cart
    delItem(state, action: PayloadAction<number>) {
      return state.filter((item) => item.uuid !== action.payload);
    },

    // Increment the quantity of a specific item
    addition(state, action: PayloadAction<{ id: string; color?: string; size?: string }>) {
      const item = state.find(
        (val) =>
          val.id === action.payload.id &&
          val.color === action.payload.color &&
          val.size === action.payload.size
      );

      if (item) {
        item.qty += 1;
      }
    },

    // Decrement the quantity of a specific item
    subraction(state, action: PayloadAction<{ id: string; color?: string; size?: string }>) {
      const item = state.find(
        (val) =>
          val.id === action.payload.id &&
          val.color === action.payload.color &&
          val.size === action.payload.size
      );

      if (item && item.qty > 1) {
        item.qty -= 1;
      }
    },
  },
});

// Export actions
export const { addtocart, delItem, addition, subraction } = CartSlice.actions;

// Export reducer
export default CartSlice.reducer;

