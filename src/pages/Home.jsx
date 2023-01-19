import  Box  from '@mui/material/Box'
import  Typography  from '@mui/material/Typography'
import React from 'react'
import LineCharts from '../components/LineCharts'
import KpiCards from '../components/KpiCards'

const Home = () => {





  return (
   <Box>
    <Typography variant="h4" color="primary.dark" mb={3} >
      Dashboard
    </Typography>
    <KpiCards />
    <LineCharts />
   </Box>
  )
}

export default Home