import React from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFail, fetchStart, getSuccess } from '../features/stockSlice'






const useStockCalls = () => {

    const {token}=useSelector(state=>state.auth)
    const BASE_URL="https://14281.fullstack.clarusway.com/"
    const dispatch=useDispatch()



        const getStockData=async(url)=> {
            dispatch(fetchStart())
            try {
            const {data}= await axios(`${BASE_URL}stock/${url}/`,{headers:{
                Authorization: `Token ${token}`
            }})
            console.log(data)
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