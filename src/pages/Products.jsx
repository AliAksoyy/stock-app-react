import React, { useEffect, useState } from 'react'
import  Box  from '@mui/material/Box'
import  Typography  from '@mui/material/Typography'
import  Button  from '@mui/material/Button'
import { grey } from '@mui/material/colors'
import {MultiSelectBox,MultiSelectBoxItem} from '@tremor/react';
import useStockCalls from '../hooks/useStockCalls'
import { useSelector } from 'react-redux'



const Products = () => {

const {getProducts,getBrands,getCategories}=useStockCalls()
const {brands,products}=useSelector(state=>state.stock)
const [selectedBrands,setSelectedBrands]=useState([])
const [selectedProducts,setSelectedProducts]=useState([])
console.log(selectedBrands)

useEffect(() => {
  getProducts()
  getCategories()
  getBrands()
}, [])






  return (
    <Box>
      <Typography variant="h4" color="primary.dark" mb={3}>Products</Typography>
      <Button variant="contained" sx={{backgroundColor:grey[300], "&:hover":{color:"white"}}} >NEW PRODUCT</Button>
      <Box>
      <MultiSelectBox
      handleSelect={ (value) => setSelectedBrands(value) }
      placeholder="Select Brands">
      { brands?.map((brand) => {
       return( <MultiSelectBoxItem key={ brand?.id } value={ brand?.name } text={ brand?.name } />
      )}) }
      </MultiSelectBox>
      <MultiSelectBox
      handleSelect={ (value) => setSelectedProducts(value) }
      placeholder="Select Products">
      { products?.map((product) => {
        return (<MultiSelectBoxItem key={ product?.name } value={ product?.name } text={ product?.name } />
      )}) }
      </MultiSelectBox> 
      </Box>
    </Box>
  )
}

export default Products