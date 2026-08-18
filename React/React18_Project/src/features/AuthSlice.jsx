import { createSlice } from "@reduxjs/toolkit";

const AuthSlice=createSlice({
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
        }
    }
})

export const {addUser,removeUser}=AuthSlice.actions

export default AuthSlice.reducer