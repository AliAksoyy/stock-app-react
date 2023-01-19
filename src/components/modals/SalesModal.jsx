import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import { flexColumn, modalStyle } from '../../styles/globalStyle';
import { grey } from '@mui/material/colors';
import useStockCalls from '../../hooks/useStockCalls';
import  MenuItem from '@mui/material/MenuItem';
import FormControl  from '@mui/material/FormControl';
import InputLabel  from '@mui/material/InputLabel';
import Select  from '@mui/material/Select';
import { useSelector } from 'react-redux';



const ProductsModal = ({info,setInfo,open,setOpen}) => {

    const {getProducts,postSales,putSales}=useStockCalls()
  const {sales,brands,products}=useSelector(state=>state.stock)
console.log(info)
    const handleChange=(e)=>{
        const {name,value}=e.target
        setInfo({...info, [name]:Number(value)} )
    }
    const handleSubmit=(e)=> {
        e.preventDefault()
        if(info.id){
          putSales(info)
        }else {
        postSales(info) 
        }
        setInfo({})
        setOpen(false)
    }
  return (
    <div>
         <Modal
        open={open}
        onClose={()=>{setOpen(false); setInfo({})}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
            <Box sx={flexColumn} component="form" onSubmit={handleSubmit}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Brand</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="brand_id"
                  name="brand_id"
                  value={info?.brand_id || ""}
                  label="Brand"
                  onChange={handleChange}
                >
                {brands?.map((item)=>{
                 
                  return (
                    <MenuItem  key={item.id} value={item.id}>{item.name}</MenuItem>
                  )
                })}  
                </Select>
                </FormControl>
                <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Products</InputLabel>
                <Select
                  id="product_id"
                  name="product_id"
                  value={info?.product_id || ""}
                  label="Products"
                  onChange={handleChange}
                >
                 {products?.map((item)=>{
                  return (
                    <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                  )
                })}  
                </Select>
                </FormControl>
                <TextField
                label="Quantity"
                id="quantity"
                name="quantity"
                variant="outlined"
                value={info?.quantity || ""}
                onChange={handleChange}
                />
                <TextField
                label="Price"
                id="price"
                name="price"
                variant="outlined"
                value={info?.price || ""}
                onChange={handleChange}
                />
                <Button type="submit" variant="contained" size="large" sx={{backgroundColor:grey[300], "&:hover":{color:"white"}}}>ADD NEW SALE</Button>
            </Box>
        </Box>
      </Modal>
    </div>
  )
}

export default ProductsModal