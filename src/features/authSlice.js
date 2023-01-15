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
            state.loading={...state, loading:true}
        },
        loginSucces:(state,{payload})=> {
            state.currentUser={...state, currentUser:payload?.user?.username}
            state.token={...state, token:payload?.key}
            state.loading={...state, loading:false}
        },
        logoutSuccess:(state)=> {
            state.currentUser={...state, currentUser:null}
            state.loading={...state, loading:false}
            state.error={...state, error:false}
        },
        registerSuccess:(state,action)=> {
            state.currentUser={...state, currentUser:action.payload?.username}
            state.token={...state, token:action.payload?.token}
        },
        fetchFail:(state)=> {
            state.error={...state, error:true}
        },
    },
})
export const {fetchFail,fetchStart,loginSucces,logoutSuccess,registerSuccess}=authSlice.actions

export default authSlice.reducer

