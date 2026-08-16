import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../features/counterSlice'
import cartSlice from '../features/CartSlice'

export const store=configureStore({
    reducer:{
        counter:counterReducer,
        cart:cartSlice
    }
})