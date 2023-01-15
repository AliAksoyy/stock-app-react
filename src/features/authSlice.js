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
        loginSucces:(state,action)=> {

        },
        logoutSuccess:(state,action)=> {

        },
        registerSuccess:(state,action)=> {

        },
        fetchFail:(state)=> {

        },
    },
})
export const {fetchFail,fetchStart,loginSucces,logoutSuccess,registerSuccess}=authSlice.actions

export default authSlice.reducer

