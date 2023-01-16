import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import { flexColumn, modalStyle } from '../../styles/globalStyle';
import { grey } from '@mui/material/colors';
import useStockCalls from '../../hooks/useStockCalls';



const FirmsModal = ({info,setInfo,open,setOpen}) => {

    const {postFirms,putFirms}=useStockCalls()


    const handleChange=(e)=>{
        const {name,value}=e.target
        setInfo({...info, [name]:value} )
    }
    const handleSubmit=(e)=> {
        e.preventDefault()
        console.log(info)
        if(info.id){
            putFirms(info)
        }else {
            postFirms(info) 
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
                label="Firm Name*"
                id="name"
                name="name"
                variant="outlined"
                value={info?.name || ""}
                onChange={handleChange}
                />
                <TextField
                label="Phone*"
                id="phone"
                name="phone"
                variant="outlined"
                value={info?.phone || ""}
                onChange={handleChange}
                />
                <TextField
                label="Address"
                id="address"
                name="address"
                variant="outlined"
                value={info?.address || ""}
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
                <Button type="submit" variant="contained" size="large" sx={{backgroundColor:grey[300], "&:hover":{color:"white"}}}>SUBMİT FORM</Button>
            </Box>
        </Box>
      </Modal>
    </div>
  )
}

export default FirmsModal