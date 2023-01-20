import  Grid  from '@mui/material/Grid';
import  Box  from '@mui/material/Box';
import  Typography  from '@mui/material/Typography';
import  Paper  from '@mui/material/Paper';
import {BadgeDelta,Block,Card,Metric,ProgressBar,Text,} from '@tremor/react';
import { useEffect } from 'react';
import useStockCalls from "../hooks/useStockCalls"
import { useSelector } from 'react-redux';




export default function KpiCards() {

    const {getProCatBrands,getSales,getPurchases}=useStockCalls()
    const {sales,purchases}=useSelector(state=>state.stock)
  

    useEffect(()=> {
        getProCatBrands()
        getSales()
        getPurchases()
    },[])

    const salesmetric=sales?.map((item)=>Number(item["price_total"])).reduce((acc,cur)=>acc+cur,0)
    const purchasesmetric=purchases?.map((item)=>Number(item["price_total"])).reduce((acc,cur)=>acc+cur,0)
    const profitmetric=salesmetric -purchasesmetric
    
    const kpiData = [
        {
            title: 'Sales',
            metric: `$ ${salesmetric || ""}`,
            progress: 43.5,
            target: '$ 10,000',
            delta: '13.2%',
            deltaType: 'moderateIncrease',
        },
        {
            title: 'Profit',
            metric: `$ ${profitmetric || ""}`,
            progress: 36.5,
            target: '$ 25,000',
            delta: '23.9%',
            deltaType: 'moderateDecrease',
        },
        {
            title: 'Purchases',
            metric: `$ ${purchasesmetric || ""}`,
            progress: 32.6,
            target: '500',
            delta: '10.1%',
            deltaType: 'increase',
        },
    ];

    return (
       
        <Grid container justifyContent="center" gap={3} mb={3}>
        { kpiData.map((item) => (
            <Grid item key={ item.title }  xs={12}
          sm={10}
          md={5}
          lg={3}
          sx={{ minWidth: "250px" }}>
            <Paper elevation={6}>
            <Card decoration="top"  decorationColor="indigo">
             
                <Box sx={{display:"flex", alignItems:"flex-start"}} >
                    <Block truncate={ true }>
                        <Typography>{ item.title }</Typography>
                        <Metric>{ item.metric }</Metric>
                    </Block>
                    <BadgeDelta deltaType={ item.deltaType } text={ item.delta } />
                </Box>
                <Box sx={{display:"flex", marginTop:"-4", gap:2}}>
                    <Text truncate={ true }>{ `${item.progress}% (${item.metric})` }</Text>
                    <Text>{ item.target }</Text>
                </Box>
                <ProgressBar color="gray" percentageValue={ item.progress } marginTop="mt-2" />
                
            </Card>
            </Paper>
            </Grid>
        )) }
    </Grid>
    
    );
}