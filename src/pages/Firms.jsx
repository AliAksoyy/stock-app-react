import  Typography  from '@mui/material/Typography'
import  Box  from '@mui/material/Box'
import  Button  from '@mui/material/Button'
import  Grid  from '@mui/material/Grid'
import React, { useEffect, useState } from 'react'
import { grey } from '@mui/material/colors'
import useStockCalls from '../hooks/useStockCalls'
import { useSelector } from 'react-redux'
import FirmCards from '../components/cards/FirmCards'
import FirmsModal from '../components/modals/FirmsModal'







const Firms = () => {

  const {firms}=useSelector(state=>state.stock)
  console.log(firms)
  const {getFirms}=useStockCalls()
  const [open,setOpen]=useState(false)
  const [info,setInfo]=useState({})
  useEffect(()=> {
    getFirms()
  },[])


  return (
    <Box>
      <Typography variant="h4" color="primary.dark" mb={3}>
        Firms
      </Typography>
      <Button onClick={()=>setOpen(true)}  sx={{backgroundColor:grey[300], "&:hover":{color:"white"}}} variant="contained">New Firms</Button>
      <FirmsModal open={open} setOpen={setOpen} info={info} setInfo={setInfo}/>
      <Grid container justifyContent="center" alignItems="center" spacing={3}  mt={3} >
        {firms?.map((firm)=> {
          return(
            <Grid key={firm.id} item>
              <FirmCards firm={firm} />
           </Grid>
          )
        })}
       
      </Grid>
    </Box>
  )
}

export default Firms