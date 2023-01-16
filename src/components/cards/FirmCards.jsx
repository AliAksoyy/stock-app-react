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

export default function FirmCards({firm}) {
    console.log(firm)
  return (
    <Card  elevation={10} sx={{ p:2, height:400,width:300, display:"flex", flexDirection:"column", justifyContent:"center"  }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {firm.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {firm.address}
        </Typography>
      </CardContent>
      <CardMedia
        sx={{ height: 200 ,objectFit:"contain"}}
        image={firm.image}
        title="green iguana"
      />
      <Typography variant="body2" color="text.secondary" m={2}>
         Phone: {firm.phone}
        </Typography>
      <CardActions sx={flex} >
        <EditIcon sx={{color:grey[400], "&:hover":{color:grey[700]},cursor:"pointer"}} />
        <DeleteIcon sx={{color:grey[400], "&:hover":{color:grey[700],cursor:"pointer"}}}/>
      </CardActions>
    </Card>
  );
}