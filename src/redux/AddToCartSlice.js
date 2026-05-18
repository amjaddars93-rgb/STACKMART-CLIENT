import { createSlice } from "@reduxjs/toolkit";

const AddToCartSlice=createSlice({
    name:"addtoproducts",
    initialState:{
        AddtoCart:[],
    },
    reducers:{
        setAddtoCart:(state,action)=>{
           state.AddtoCart.push(action.payload);
        }
    }
})

export const {setAddtoCart}=AddToCartSlice.actions
export default AddToCartSlice.reducer