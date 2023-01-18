import { useDispatch} from 'react-redux'
import { fetchFail, fetchStart, getSuccess } from '../features/stockSlice'
import useAxios from './useAxios'


const useStockCalls = () => {

    
    const dispatch=useDispatch()
    const {axiosWithToken}=useAxios()

        // TODO Get Data
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
        const getBrands=()=>getStockData("brands")
        const getProducts=()=>getStockData("products")
        const getCategories=()=>getStockData("categories")
        


        // TODO Post Data
        const postStockData=async(info,url)=> {
          
            try {
            await axiosWithToken.post(`stock/${url}/`,info)
            getStockData(url)
            } catch (error) {
            console.log(error)
            }
        }
        const postFirms=(info)=>postStockData(info,"firms")
        const postBrands=(info)=>postStockData(info,"brands")
        const postProducts=(info)=>postStockData(info,"products")

        // TODO Put Data
        const putStockData=async(info,url)=> {
        
            try {
                await axiosWithToken.put(`stock/${url}/${info.id}/`, info)
            getStockData(url)
            } catch (error) {
            console.log(error)
           
            }
        }
        const putFirms=(info)=>putStockData(info,"firms")
        const putBrands=(info)=>putStockData(info,"brands")
        const putProducts=(info)=>putStockData(info,"products")

        // TODO Delete Data
        const deleteStockData=async(info,url)=> {

            try {
                await axiosWithToken.delete(`stock/${url}/${info.id}/`)
            getStockData(url)
            } catch (error) {
            console.log(error)
            
            }
        }
        const deleteFirms=(info)=>deleteStockData(info,"firms")
        const deleteBrands=(info)=>deleteStockData(info,"brands")
        const deleteProducts=(info)=>deleteStockData(info,"products")
       


  return {getFirms,getProducts,getCategories,getBrands,postFirms,postBrands,postProducts,putFirms,putBrands,putProducts,deleteBrands,deleteFirms,deleteProducts}
}

export default useStockCalls