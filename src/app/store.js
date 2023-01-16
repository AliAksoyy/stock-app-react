import {configureStore} from "@reduxjs/toolkit"
import authReducer from "../features/authSlice"
import stockReducer from "../features/stockSlice"
export const store=configureStore({
    reducer:{
        auth: authReducer,
        stock:stockReducer
    },
})