import React from 'react'
import { Card, Title, LineChart } from "@tremor/react";
import  Grid  from '@mui/material/Grid';
import  Paper  from '@mui/material/Paper';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';


const LineCharts = () => {

  const {sales,purchases}=useSelector(state=>state.stock)

  console.log(sales)
  console.log(purchases)

 const salesData=sales?.map((item)=> {
  return {
    date:item.createds,
    sales:Number(item.price_total)
  }
 })

 const purchasesData=purchases?.map((item)=> {
  return {
    date:item.createds,
    purchases:Number(item.price_total)
  }
 })

  

 
  const dataFormatter = (number) =>
  `$${Intl.NumberFormat("us").format(number).toString()}`;
  return (
    <Grid container justifyContent="center" gap={2}>
      <Grid item xs={12} md={5}  >
      <Paper elevation={4} >
          <Card >
              <Title>Daily Sales (USD)</Title>
              <LineChart
                data={salesData}
                dataKey="date"
                categories={["sales"]}
                colors={["blue"]}
                valueFormatter={dataFormatter}  
                marginTop="mt-6"         
                yAxisWidth="w-13"
              />
        </Card>
        </Paper>
      </Grid>
      <Grid item xs={12} md={5}>
      <Paper elevation={4}>
          <Card>
              <Title>Daily Purchases (USD)</Title>
              <LineChart
                data={purchasesData}
                dataKey="date"
                categories={["purchases"]}
                colors={["red"]}
                valueFormatter={dataFormatter}  
                marginTop="mt-6"         
                yAxisWidth="w-13"
              />
        </Card>
        </Paper>
     </Grid>
    </Grid>
   
   
  )
}

export default LineCharts