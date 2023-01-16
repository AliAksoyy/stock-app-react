import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import { flexColumn, modalStyle } from '../../styles/globalStyle';
import { grey } from '@mui/material/colors';
import useStockCalls from '../../hooks/useStockCalls';



const BrandsModal = ({info,setInfo,open,setOpen}) => {

    const {postBrands,putBrands}=useStockCalls()


    const handleChange=(e)=>{
        const {name,value}=e.target
        setInfo({...info, [name]:value} )
    }
    const handleSubmit=(e)=> {
        e.preventDefault()
        console.log(info)
        if(info.id){
            putBrands(info)
        }else {
            postBrands(info) 
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
                <TextField
                label="Brand Name*"
                id="name"
                name="name"
                variant="outlined"
                value={info?.name || ""}
                onChange={handleChange}
                />
                <TextField
                label="Image"
                id="image"
                name="image"
                variant="outlined"
                value={info?.image || ""}
                onChange={handleChange}
                />
                <Button type="submit" variant="contained" size="large" sx={{backgroundColor:grey[300], "&:hover":{color:"white"}}}>SAVE BRAND</Button>
            </Box>
        </Box>
      </Modal>
    </div>
  )
}

export default BrandsModal