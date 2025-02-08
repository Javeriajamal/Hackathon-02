
/*"use client"
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import  ProductSlice  from './features/productSlice'
import  CartSlice  from './features/cartSlice'
import persistedReducer from "@/"


const persistconfiq = {
  key:"root",
  version:1,
}

const reducer = combineReducers({
  product:ProductSlice,
  cart:CartSlice
})

const persistedReducer = PersistedReducer (persistconfiq,reducer)


export const Store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck:false}),
 
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof Store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof Store.dispatch*/


/*import { combineReducers, configureStore } from '@reduxjs/toolkit'
import  ProductSlice  from './features/productSlice'
import  CartSlice  from './features/cartSlice'

import storage  from 'redux-persist/lib/storage';
import { persistReducer } from "redux-persist";


const persistconfiq = {
  key:"root",
  version:1,
  storage,
}

const reducer = combineReducers({
  product:ProductSlice,
  cart:CartSlice
})

const persistedReducer = persistReducer(persistconfiq,reducer)


export const Store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck:false}),
 
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof Store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof Store.dispatch*/


import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./features/productSlice";
import CartSlice from "./features/cartSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import wishlistReducer from "./features/wishlistSlice"; 


const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  product: ProductSlice,
  cart: CartSlice,
  wishlist: wishlistReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);

// Corrected export names to follow standard convention
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;




