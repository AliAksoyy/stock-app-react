
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { fetchFail, fetchStart, registerSuccess } from '../features/authSlice'



const useAuthCalls = () => {
const dispatch=useDispatch()
const BASE_URL="https://14281.fullstack.clarusway.com/"

const register=async(value)=> {
    dispatch(fetchStart())
    try{
    const {data}=  await axios.post(`${BASE_URL}/account/register/`, value)
    console.log(data)
        dispatch(registerSuccess(data))
    }catch(error){
        dispatch(fetchFail())
        console.log(error)
    }
}



  return {register}
}

export default useAuthCalls