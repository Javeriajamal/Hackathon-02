import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type WishlistItem = {
  id: string;
  title: string;
  price: number;
  image: string;
  slug: string;
};

const initialState: WishlistItem[] = [];

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist(state, action: PayloadAction<WishlistItem>) {
      const exists = state.find((item) => item.id === action.payload.id);
      if (!exists) {
        state.push(action.payload);
      }
    },
    removeFromWishlist(state, action: PayloadAction<string>) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
