import React, { useEffect, useState } from 'react'
import  Box  from '@mui/material/Box'
import  Typography  from '@mui/material/Typography'
import  Button  from '@mui/material/Button'
import { grey } from '@mui/material/colors'
import {MultiSelectBox,MultiSelectBoxItem} from '@tremor/react';
import useStockCalls from '../hooks/useStockCalls'
import { useSelector } from 'react-redux'
import { deleteHover, editHover, selectStyle, upGrade } from '../styles/globalStyle'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import UpgradeIcon from "@mui/icons-material/Upgrade";
import VerticalAlignBottomIcon from "@mui/icons-material/VerticalAlignBottom";
import useSortedData from '../hooks/useSortedData'
import SalesModal from '../components/modals/SalesModal'
import EditIcon from '@mui/icons-material/Edit';



const Sales = () => {

const {getFirms,getProCatBrands,getPurchases,getSales,deleteSales}=useStockCalls()
const {brands,sales}=useSelector(state=>state.stock)


const [selectedBrands,setSelectedBrands]=useState([])
const [selectedProducts,setSelectedProducts]=useState([])
const [open,setOpen]=useState(false)
const [info,setInfo]=useState({})

const columnObj={
  createds:1,
  brand_id:1,
  product_id:1,
  quantity:1,
  price:1,
  price_total:1
}
const {handleSort,sortedData,toggle}=useSortedData(sales,columnObj)


useEffect(() => {
  getProCatBrands()
  getPurchases()
  getFirms()
  getSales()
}, [])



const isSelectedBrands=(item)=>selectedBrands.includes(item.brand) || selectedBrands.length===0
const filteredProducts=sales?.filter((item)=> selectedBrands.includes(item.brand) || selectedBrands.length===0).map((item)=>item)
const isSelectedProducts=(item)=>selectedProducts.includes(item.product) || selectedProducts.length===0

  return (
    <Box>
      <Typography variant="h4" color="primary.dark" mb={3}>Sales</Typography>
      <Button onClick={()=> setOpen(true)} variant="contained" sx={{backgroundColor:grey[300], "&:hover":{color:"white"}}} >NEW SALES</Button>
      <SalesModal open={open} setOpen={setOpen} info={info} setInfo={setInfo}/>
       <Box sx={selectStyle}>
       <MultiSelectBox
                    handleSelect={ (item) => setSelectedBrands(item) }
                    placeholder="Select Brands"
                >
                    {brands ? brands.map((item) => (
                        <MultiSelectBoxItem key={ item.name } value={ item.name } text={ item.name } />
                    )) : []}
                </MultiSelectBox>
                  <MultiSelectBox
                    handleSelect={ (item) => setSelectedProducts(item) }
                    placeholder="Select Products"
                >
                    { filteredProducts ? filteredProducts.map((item) => (
                        <MultiSelectBoxItem key={ item.product } value={ item.product } text={ item.product } />
                    )) : [] }
                </MultiSelectBox>   
      </Box>  
      <Box>
      {sortedData?.length > 0 && (
          <TableContainer component={Paper} elevation={10}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">
                <Box sx={upGrade} onClick={()=>handleSort("createds","text")}>
                {toggle.createds ===1 && <UpgradeIcon />}
                {toggle.createds !==1 && <VerticalAlignBottomIcon />}
                <Typography variant="body2">Date</Typography>
                </Box>
                </TableCell>
                <TableCell align="center">Category</TableCell>
                <TableCell align="center">
                <Box sx={upGrade} onClick={()=>handleSort("brand_id","text") }>
                {toggle.brand_id ===1 && <UpgradeIcon />}
                {toggle.brand_id !==1 && <VerticalAlignBottomIcon />}
                <Typography variant="body2">Brand Name</Typography>
                
                </Box>
                </TableCell>
                <TableCell align="center">
                <Box sx={upGrade} onClick={()=> handleSort("product_id","text")}>
                {toggle.product_id ===1 && <UpgradeIcon />}
                {toggle.product_id !==1 && <VerticalAlignBottomIcon />}
                <Typography variant="body2">Product Name</Typography>

                </Box>
                </TableCell>
                <TableCell align="center">
                <Box sx={upGrade} onClick={()=> handleSort("quantity","number")}>
                {toggle.quantity ===1 && <UpgradeIcon />}
                {toggle.quantity !==1 && <VerticalAlignBottomIcon />}
                <Typography variant="body2">Quantity</Typography>
                
                </Box>
                </TableCell>
                <TableCell align="center">
                <Box sx={upGrade} onClick={()=> handleSort("price","number")}>
                {toggle.price ===1 && <UpgradeIcon />}
                {toggle.price !==1 && <VerticalAlignBottomIcon />}
                <Typography variant="body2">Amount</Typography>
                
                </Box>
                </TableCell>
                <TableCell align="center">
                <Box sx={upGrade} onClick={()=> handleSort("price_total","number")}>
                {toggle["price_total"] ===1 && <UpgradeIcon />}
                {toggle["price_total"] !==1 && <VerticalAlignBottomIcon />}
                <Typography variant="body2">Total Amount</Typography>
                
                </Box>
                </TableCell>
                <TableCell align="center">
                <Typography variant="body2">Operation</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
             <TableBody>
              {sortedData?.filter((item)=>isSelectedBrands(item)).filter((item)=>isSelectedProducts(item)).map((sale) => (
                <TableRow
                  key={sale.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="center" component="th" scope="row">
                    {sale.createds}
                  </TableCell>
                  <TableCell align="center">{sale.category[0].name}</TableCell>
                  <TableCell align="center">{sale.brand}</TableCell>
                  <TableCell align="center">{sale.product}</TableCell>
                  <TableCell align="center">{sale.quantity}</TableCell>
                  <TableCell align="center">{Number(sale.price)}</TableCell>
                  <TableCell align="center">{Number(sale["price_total"])}</TableCell>
                  <TableCell align="center" >
                  <Box>
                  <EditIcon sx={editHover} onClick={()=>{setOpen(true); setInfo(sale)}}/>
                  <DeleteIcon sx={deleteHover} onClick={()=>deleteSales(sale)} />
                  </Box>
                 
                  </TableCell>  
                </TableRow>
              ))}
            </TableBody>     
          </Table>
        </TableContainer>
      )}
      </Box>
    </Box>
  )
}

export default Sales