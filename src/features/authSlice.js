import { createSlice } from "@reduxjs/toolkit";

const initialState={
    loading:false,
    error:false,
    currentUser:null,
    token:null,

}

export const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        fetchStart:(state)=>{
            state.loading=true
        },
        loginSuccess:(state,{payload})=> {
            state.currentUser=payload?.user?.username
            state.token=payload?.key
            state.loading=false
        },
        logoutSuccess:(state)=> {
            state.currentUser=null
            state.loading=false
            state.error=false
            state.token=null
        },
        registerSuccess:(state,action)=> {
            state.currentUser=action.payload?.username
            state.token=action.payload?.token
            state.loading=false
            state.error=false

        },
        fetchFail:(state)=> {
            state.error=true
            state.loading=false

        },
    },
})
export const {fetchFail,fetchStart,loginSuccess,logoutSuccess,registerSuccess}=authSlice.actions

export default authSlice.reducer

