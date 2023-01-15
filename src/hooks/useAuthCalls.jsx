
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchFail, fetchStart, registerSuccess,loginSuccess } from '../features/authSlice'
import { toastifyError, toastifySuccess } from '../helpers/toastify'



const useAuthCalls = () => {
const navigate=useNavigate()
const dispatch=useDispatch()
const BASE_URL="https://14281.fullstack.clarusway.com/"

const register=async(value)=> {
    dispatch(fetchStart())
    try{
    const {data}=  await axios.post(`${BASE_URL}account/register/`, value)
    dispatch(registerSuccess(data))
    navigate("/stock")
    toastifySuccess("Register performed")
    }catch(error){
        dispatch(fetchFail())
        console.log(error)
        toastifySuccess("Register can not be performed")
        
    }
}
const login=async(value)=> {
    dispatch(fetchStart())
    try{
    const {data}=  await axios.post(`${BASE_URL}account/auth/login/`, value)
        navigate("/stock")
        dispatch(loginSuccess(data))
        toastifySuccess("Login can not be performed")

    }catch(error){
        toastifyError(`${error}`)
        dispatch(fetchFail())
        console.log(error)

    }
}

  return {register,login}
}

export default useAuthCalls