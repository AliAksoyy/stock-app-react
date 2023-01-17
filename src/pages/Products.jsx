import React, { useEffect, useState } from 'react'
import  Box  from '@mui/material/Box'
import  Typography  from '@mui/material/Typography'
import  Button  from '@mui/material/Button'
import { grey } from '@mui/material/colors'
import {MultiSelectBox,MultiSelectBoxItem} from '@tremor/react';
import useStockCalls from '../hooks/useStockCalls'
import { useSelector } from 'react-redux'
import { deleteHover, selectStyle } from '../styles/globalStyle'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';


const Products = () => {

const {getProducts,getBrands,getCategories}=useStockCalls()
const {brands,products}=useSelector(state=>state.stock)
const [selectedBrands,setSelectedBrands]=useState([])
const [selectedProducts,setSelectedProducts]=useState([])
console.log(selectedBrands)
console.log(selectedProducts)
console.log(brands)
console.log(products)

useEffect(() => {
  getProducts()
  getCategories()
  getBrands()
}, [])


  return (
    <Box>
      <Typography variant="h4" color="primary.dark" mb={3}>Products</Typography>
      <Button variant="contained" sx={{backgroundColor:grey[300], "&:hover":{color:"white"}}} >NEW PRODUCT</Button>
      <Box sx={selectStyle}>
       <MultiSelectBox
      handleSelect={ (value) => setSelectedBrands(value) }
      placeholder="Select Brands">
      { brands?.map((brand) => (
        <MultiSelectBoxItem key={ brand?.id } value={ brand?.name } text={ brand?.name } />
      )) }
      </MultiSelectBox>
       <MultiSelectBox
      handleSelect={ (value) => setSelectedProducts(value) }
      placeholder="Select Products">
      { products?.map((product) => (
         <MultiSelectBoxItem key={ product?.name } value={ product?.name } text={ product?.name } />
      )) }
      </MultiSelectBox>   
      </Box>
      <Box>
          <TableContainer component={Paper} elevation={10}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">#</TableCell>
                <TableCell align="center">Category</TableCell>
                <TableCell align="center">Brand</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Stock</TableCell>
                <TableCell align="center">Operation</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products?.map((product,i) => (
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
                  <TableCell align="center"><DeleteIcon sx={deleteHover} /></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  )
}

export default Products