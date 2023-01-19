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
import PurchasesModal from '../components/modals/PurchasesModal'
import EditIcon from '@mui/icons-material/Edit';



const Purchases = () => {

const {getFirms,getProCatBrands,getPurchases,deletePurchases}=useStockCalls()
const {brands,purchases}=useSelector(state=>state.stock)


const [selectedBrands,setSelectedBrands]=useState([])
const [selectedProducts,setSelectedProducts]=useState([])
const [open,setOpen]=useState(false)
const [info,setInfo]=useState({})

const columnObj={
  createds:1,
  firm:1,
  brand:1,
  product:1,
  quantity:1,
  price:1,
  price_total:1
}
const {handleSort,sortedData,toggle}=useSortedData(purchases,columnObj)


useEffect(() => {
  getProCatBrands()
  getPurchases()
  getFirms()
}, [])



const isSelectedBrands=(item)=>selectedBrands.includes(item.brand) || selectedBrands.length===0
const filteredProducts=purchases?.filter((item)=> selectedBrands.includes(item.brand) || selectedBrands.length===0).map((item)=>item)
const isSelectedProducts=(item)=>selectedProducts.includes(item.product) || selectedProducts.length===0

  return (
    <Box>
      <Typography variant="h4" color="primary.dark" mb={3}>Purchases</Typography>
      <Button onClick={()=> setOpen(true)} variant="contained" sx={{backgroundColor:grey[300], "&:hover":{color:"white"}}} >NEW PURCHASES</Button>
      <PurchasesModal open={open} setOpen={setOpen} info={info} setInfo={setInfo}/>
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
                <Box sx={upGrade} onClick={()=>handleSort("firm","text")}>
                {toggle.firm ===1 && <UpgradeIcon />}
                {toggle.firm !==1 && <VerticalAlignBottomIcon />}
                <Typography variant="body2">Firm Name</Typography>
                </Box>
                </TableCell>
                <TableCell align="center">
                <Box sx={upGrade} onClick={()=>handleSort("brand","text") }>
                {toggle.brand ===1 && <UpgradeIcon />}
                {toggle.brand !==1 && <VerticalAlignBottomIcon />}
                <Typography variant="body2">Brand Name</Typography>
                
                </Box>
                </TableCell>
                <TableCell align="center">
                <Box sx={upGrade} onClick={()=> handleSort("product","text")}>
                {toggle.product ===1 && <UpgradeIcon />}
                {toggle.product !==1 && <VerticalAlignBottomIcon />}
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
              {sortedData?.filter((item)=>isSelectedBrands(item)).filter((item)=>isSelectedProducts(item)).map((purchase) => (
                <TableRow
                  key={purchase.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="center" component="th" scope="row">
                    {purchase.createds}
                  </TableCell>
                    <TableCell align="center">{purchase.category[0].name}</TableCell>
                  <TableCell align="center">{purchase.firm}</TableCell>
                  <TableCell align="center">{purchase.brand}</TableCell>
                  <TableCell align="center">{purchase.product}</TableCell>
                  <TableCell align="center">{purchase.quantity}</TableCell>
                  <TableCell align="center">{Number(purchase.price)}</TableCell>
                  <TableCell align="center">{Number(purchase["price_total"])}</TableCell>
                  <TableCell align="center" >
                  <Box>
                  <EditIcon sx={editHover} onClick={()=>{setOpen(true); setInfo(purchase)}}/>
                  <DeleteIcon sx={deleteHover} onClick={()=>deletePurchases(purchase)} />
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

export default Purchases