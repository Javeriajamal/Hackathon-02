"use client"
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { product } from '@/types/product';

// API endpoint URL
const API_URL = 'https://example.com/api/products';  // Replace with your actual API URL

// Fetch products data from the API
export const fetchProducts = createAsyncThunk(
  'product/fetchProducts',
  async () => {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    return response.json();
  }
);

const initialState: product[] = [];

export const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        // You can add a loading state if necessary
        return state;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        // Handle error if needed
        return state;
      });
  },
});

export default ProductSlice.reducer;
