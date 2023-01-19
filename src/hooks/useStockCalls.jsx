import { useDispatch} from 'react-redux'
import { fetchFail, fetchStart, getProCatBrandsSuccess, getSuccess } from '../features/stockSlice'
import { toastifyError, toastifySuccess } from '../helpers/toastify'
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
        const getPurchases=()=>getStockData("purchases")
        const getSales=()=>getStockData("sales")
        
        const getProCatBrands=async()=> {
            dispatch(fetchStart())
            try{
                const [products,categories,brands] = await Promise.all([axiosWithToken(`stock/products/`),axiosWithToken(`stock/categories/`), axiosWithToken(`stock/brands/`)])
                dispatch(getProCatBrandsSuccess([products.data,categories.data,brands.data]))
            }catch(err){
                console.log(err)
                dispatch(fetchFail())
            }
        }


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
        const postPurchases=(info)=>postStockData(info,"purchases")
        const postSales=(info)=>postStockData(info,"sales")

        // TODO Put Data
        const putStockData=async(info,url)=> {
        
            try {
                await axiosWithToken.put(`stock/${url}/${info.id}/`, info)
            toastifySuccess(`${url} updateted`)
            getStockData(url)
            } catch (error) {
                toastifyError(`${url} can not be updateted`)
            console.log(error)
           
            }
        }
        const putFirms=(info)=>putStockData(info,"firms")
        const putBrands=(info)=>putStockData(info,"brands")
        const putPurchases=(info)=>putStockData(info,"purchases")
        const putSales=(info)=>putStockData(info,"sales")
        

        // TODO Delete Data
        const deleteStockData=async(info,url)=> {

            try {
                await axiosWithToken.delete(`stock/${url}/${info.id}/`)
                toastifySuccess(`${url} successfully deleted`)
            getStockData(url)
            } catch (error) {
            console.log(error)
            toastifyError(`${url} can not be deleted`)
            
            }
        }
        const deleteFirms=(info)=>deleteStockData(info,"firms")
        const deleteBrands=(info)=>deleteStockData(info,"brands")
        const deleteProducts=(info)=>deleteStockData(info,"products")
        const deletePurchases=(info)=>deleteStockData(info,"purchases")
        const deleteSales=(info)=>deleteStockData(info,"sales")
       


  return {getFirms,getProducts,getCategories,getBrands,getPurchases,getSales,postFirms,getProCatBrands,postBrands,postProducts,postPurchases,postSales,putFirms,putBrands,putPurchases,putSales,deleteBrands,deleteFirms,deleteProducts,deletePurchases,deleteSales}
}

export default useStockCalls