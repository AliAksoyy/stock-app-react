
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchFail, fetchStart, registerSuccess,loginSuccess } from '../features/authSlice'



const useAuthCalls = () => {
const navigate=useNavigate()
const dispatch=useDispatch()
const BASE_URL="https://14281.fullstack.clarusway.com/"

const register=async(value)=> {
    dispatch(fetchStart())
    try{
    const {data}=  await axios.post(`${BASE_URL}account/register/`, value)
        navigate("/stock")
        dispatch(registerSuccess(data))
    }catch(error){
        dispatch(fetchFail())
        console.log(error)
    }
}
const login=async(value)=> {
    dispatch(fetchStart())
    try{
    const {data}=  await axios.post(`${BASE_URL}account/auth/login/`, value)
        navigate("/stock")
        dispatch(loginSuccess(data))
    }catch(error){
        dispatch(fetchFail())
        console.log(error)
    }
}

  return {register,login}
}

export default useAuthCalls