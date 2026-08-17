import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../features/CounterSlice'
import authReducer from '../features/authSlice'

export const store=configureStore({
    reducer:{
        counter: counterReducer,
        auth:authReducer
    }
})



