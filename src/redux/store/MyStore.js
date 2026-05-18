import { configureStore } from "@reduxjs/toolkit";
import viewDeatialsReducer from "../viewDeatialsSlice";
import AddToCartReducer from '../AddToCartSlice'

export const store = configureStore({
  reducer: {
    viewdproduct:viewDeatialsReducer,
    Addproducts:AddToCartReducer
  },
});
