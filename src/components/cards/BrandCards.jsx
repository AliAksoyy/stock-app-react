import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { grey } from '@mui/material/colors';
import { flex } from '../../styles/globalStyle';
import useStockCalls from '../../hooks/useStockCalls';

export default function BrandCards({brand,setOpen,setInfo}) {

    
    const {deleteBrands}=useStockCalls()
    
  return (
    <Card  elevation={10} sx={{ p:2, height:400,width:300, display:"flex", flexDirection:"column", justifyContent:"center"  }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {brand?.name}
        </Typography>
      </CardContent>
      <CardMedia
        sx={{ height: 200 ,objectFit:"contain"}}
        image={brand?.image}
        title="green iguana"
      />
      <CardActions sx={flex} >
        <EditIcon onClick={()=>{setOpen(true); setInfo(brand)}} sx={{color:grey[400], "&:hover":{color:grey[700]},cursor:"pointer"}} />
        <DeleteIcon onClick={()=> deleteBrands(brand)} sx={{color:grey[400], "&:hover":{color:grey[700],cursor:"pointer"}}}/>
      </CardActions>
    </Card>
  );
}