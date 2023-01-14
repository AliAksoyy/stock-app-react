import { Routes,Route } from "react-router-dom"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Firms from "../pages/Firms"
import Home from "../pages/Home"
import Brands from "../pages/Brands"
import Products from "../pages/Products"
import Purchases from "../pages/Purchases"
import Sales from "../pages/Sales"
import Dashboard from "../pages/Dashboard"
import PrivateRouter from "./PrivateRouter"




const AppRouter =()=> {
    return(
    <Routes>
       <Route path="/login" element={<Login />} />
       <Route path="/register" element={<Register />} />
       <Route path="/stock" element={<PrivateRouter />}>
         <Route path="" element={<Dashboard />} >
            <Route index element={<Home />} />
            <Route path="firms" element={<Firms />} />
            <Route  path="brands" element={<Brands />} />
            <Route  path="products" element={<Products />} />
            <Route  path="purchases" element={<Purchases />} />
            <Route  path="sales" element={<Sales />} />
         </Route>
       </Route>
    </Routes>
    )
}
export default AppRouter