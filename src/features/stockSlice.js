import { createSlice } from "@reduxjs/toolkit"


export const initialState={
    loading:false,
    error:false,
    firms:null,
    brands:null,
    products:null,
    purchases:null,
    sales:null,
    categories:null
}

export const stockSlice=createSlice({
    name:"stock",
    initialState,
    reducers:{
        fetchStart:(state)=>{
            state.loading=true
        },
        getSuccess:(state,{payload:{data,url}})=> {
            state.loading=false
            state[url]=data
        },
        getProCatBrandsSuccess:(state,{payload})=> {
                state.products=payload[0]
                state.categories=payload[1]
                state.brands=payload[2]
        },
        fetchFail:(state)=> {
            state.loading=false
            state.error=true
        },
    },
})
export const {fetchStart,getSuccess,fetchFail,getProCatBrandsSuccess} =stockSlice.actions
export default stockSlice.reducer