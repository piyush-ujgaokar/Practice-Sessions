import { createSlice } from "@reduxjs/toolkit";



const authSlice=createSlice({
    name:"auth",
    initialState:{
        user:null,
        isAuthenticate:false
    },
    reducers:{
        addUser:(state,action)=>{
            state.user=action.payload
            state.isAuthenticate=true
        },
        removeUser:(state,action)=>{
            state.user=null
            state.isAuthenticate=false
        }
    }
})

const {addUser,removeUser} =authSlice.actions

export default authSlice.reducer