import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        cart:"empty"
    },
    reducers:{
        AddToCart:(state,action)=>{
            state.cart=action.payload
        },
        removeCart:(state)=>{
            state.cart=null
        }
    }
})

export const {AddToCart,removeCart}=cartSlice.actions

export default cartSlice.reducer