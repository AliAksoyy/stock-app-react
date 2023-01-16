import React from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFail, fetchStart, getSuccess } from '../features/stockSlice'
import useAxios from './useAxios'






const useStockCalls = () => {

    
    const dispatch=useDispatch()
    const {axiosWithToken}=useAxios()


        const getStockData=async(url)=> {
            dispatch(fetchStart())
            try {
            const {data}= await axiosWithToken(`stock/${url}/`)
            dispatch(getSuccess({data,url}))
            } catch (error) {
            console.log(error)
            dispatch(fetchFail())
            }
        }
        const getFirms=()=>getStockData("firms")
       


  return {getFirms}
}

export default useStockCalls