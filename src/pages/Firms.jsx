import  Typography  from '@mui/material/Typography'
import  Box  from '@mui/material/Box'
import  Button  from '@mui/material/Button'
import React from 'react'
import { grey } from '@mui/material/colors'






const Firms = () => {

  



  return (
    <Box>
      <Typography variant="h4" color="primary.dark" mb={3}>
        Firms
      </Typography>
      <Button sx={{backgroundColor:grey[300], "&:hover":{color:"white"}}} variant="contained">New Firms</Button>
    </Box>
  )
}

export default Firms