import { createSlice } from "@reduxjs/toolkit";

const viewDeatialsSlice=createSlice({
    name:"viewdeials",
    initialState:{
        products:[]
    },
    reducers:{
        setviewDetailsProduct:((state,action)=>{
      state.products=[action.payload]
        })
    }
    
})
export const{setviewDetailsProduct}=viewDeatialsSlice.actions
export default viewDeatialsSlice.reducer