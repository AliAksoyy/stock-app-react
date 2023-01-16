import  Typography  from '@mui/material/Typography'
import  Box  from '@mui/material/Box'
import  Button  from '@mui/material/Button'
import  Grid  from '@mui/material/Grid'
import React, { useEffect, useState } from 'react'
import { grey } from '@mui/material/colors'
import useStockCalls from '../hooks/useStockCalls'
import { useSelector } from 'react-redux'
import BrandCards from '../components/cards/BrandCards'
import BrandsModal from '../components/modals/BrandsModal'







const Brands = () => {

  const {brands}=useSelector(state=>state.stock)
  console.log(brands)
  const {getBrands}=useStockCalls()
  const [open,setOpen]=useState(false)
  const [info,setInfo]=useState({})

  useEffect(()=> {
    getBrands()
  },[])


  return (
    <Box>
      <Typography variant="h4" color="primary.dark" mb={3}>
        Brands
      </Typography>
      <Button onClick={()=>setOpen(true)}  sx={{backgroundColor:grey[300], "&:hover":{color:"white"}}} variant="contained">New Brands</Button>
      <BrandsModal open={open} setOpen={setOpen} info={info} setInfo={setInfo}/>
      <Grid container justifyContent="center" alignItems="center" spacing={3}  mt={3} >
        {brands?.map((brand)=> (
            <Grid key={brand?.id} item>
              <BrandCards brand={brand} setOpen={setOpen} setInfo={setInfo} />
           </Grid>
        ))}
       
      </Grid>
    </Box>
  )
}

export default Brands