import React, { useEffect, useState } from 'react'
import  Box  from '@mui/material/Box'
import  Typography  from '@mui/material/Typography'
import  Button  from '@mui/material/Button'
import { grey } from '@mui/material/colors'
import {MultiSelectBox,MultiSelectBoxItem} from '@tremor/react';
import useStockCalls from '../hooks/useStockCalls'
import { useSelector } from 'react-redux'
import { deleteHover, selectStyle, upGrade } from '../styles/globalStyle'
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
import ProductsModal from '../components/modals/ProductsModal'


const Products = () => {

const {deleteProducts,getProCatBrands}=useStockCalls()
const {brands,products}=useSelector(state=>state.stock)

const [selectedBrands,setSelectedBrands]=useState([])
const [selectedProducts,setSelectedProducts]=useState([])
const [open,setOpen]=useState(false)
const [info,setInfo]=useState({})

const columnObj={
  brand:1,
  name:1,
  stock:1,
}
const {handleSort,sortedData,toggle}=useSortedData(products,columnObj)


useEffect(() => {
  getProCatBrands()
}, [])



const isSelectedBrands=(item)=>selectedBrands.includes(item.brand) || selectedBrands.length===0
const filteredProducts=products?.filter((item)=> selectedBrands.includes(item.brand) || selectedBrands.length===0).map((item)=>item)
const isSelectedProducts=(item)=>selectedProducts.includes(item.name) || selectedProducts.length===0

  return (
    <Box>
      <Typography variant="h4" color="primary.dark" mb={3}>Products</Typography>
      <Button onClick={()=> setOpen(true)} variant="contained" sx={{backgroundColor:grey[300], "&:hover":{color:"white"}}} >NEW PRODUCT</Button>
      <ProductsModal open={open} setOpen={setOpen} info={info} setInfo={setInfo}/>
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
                        <MultiSelectBoxItem key={ item.name } value={ item.name } text={ item.name } />
                    )) : [] }
                </MultiSelectBox>   
      </Box>  
      <Box>
      {sortedData?.length > 0 && (
          <TableContainer component={Paper} elevation={10}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">#</TableCell>
                <TableCell align="center">Category</TableCell>
                <TableCell align="center">
                <Box sx={upGrade} onClick={()=>handleSort("brand","text")}>
                {toggle.brand ===1 && <UpgradeIcon />}
                {toggle.brand !==1 && <VerticalAlignBottomIcon />}
                Brand
                </Box>
                </TableCell>
                <TableCell align="center">
                <Box sx={upGrade} onClick={()=>handleSort("name","text") }>
                {toggle.name ===1 && <UpgradeIcon />}
                {toggle.name !==1 && <VerticalAlignBottomIcon />}
                Name
                </Box>
                </TableCell>
                <TableCell align="center">
                <Box sx={upGrade} onClick={()=> handleSort("stock","number")}>
                {toggle.stock ===1 && <UpgradeIcon />}
                {toggle.stock !==1 && <VerticalAlignBottomIcon />}
                Stock
                </Box>
                </TableCell>
                <TableCell align="center">Operation</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedData?.filter((item)=>isSelectedBrands(item)).filter((item)=>isSelectedProducts(item)).map((product,i) => (
                <TableRow
                  key={product.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="center" component="th" scope="row">
                    {i+1}
                  </TableCell>
                  <TableCell align="center">{product.category}</TableCell>
                  <TableCell align="center">{product.brand}</TableCell>
                  <TableCell align="center">{product.name}</TableCell>
                  <TableCell align="center">{product.stock}</TableCell>
                  <TableCell align="center" onClick={()=>deleteProducts(product)}><DeleteIcon sx={deleteHover} /></TableCell>
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

export default Products