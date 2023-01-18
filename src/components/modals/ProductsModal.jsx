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

    const {postProducts}=useStockCalls()
  const {categories,brands}=useSelector(state=>state.stock)
  console.log(categories)
    const handleChange=(e)=>{
        const {name,value}=e.target
        setInfo({...info, [name]:value} )
    }
    const handleSubmit=(e)=> {
        e.preventDefault()
        postProducts(info) 
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
                <InputLabel id="demo-simple-select-label">Categories</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="category_id"
                  name="category_id"
                  value={info?.category_id || ""}
                  label="Categories"
                  onChange={handleChange}
                >
                {categories?.map((item)=>{
                 
                  return (
                    <MenuItem value={item.id}>{item.name}</MenuItem>
                  )
                })}  
                </Select>
                </FormControl>
                <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Brands</InputLabel>
                <Select
                  id="brand_id"
                  name="brand_id"
                  value={info?.brand_id || ""}
                  label="Brands"
                  onChange={handleChange}
                >
                 {brands?.map((item)=>{
                
                  return (
                    <MenuItem value={item.id}>{item.name}</MenuItem>
                  )
                })}  
                </Select>
                </FormControl>
                <TextField
                label="Product Name"
                id="name"
                name="name"
                variant="outlined"
                value={info?.name || ""}
                onChange={handleChange}
                />
                <Button type="submit" variant="contained" size="large" sx={{backgroundColor:grey[300], "&:hover":{color:"white"}}}>SAVE FİRM</Button>
            </Box>
        </Box>
      </Modal>
    </div>
  )
}

export default ProductsModal