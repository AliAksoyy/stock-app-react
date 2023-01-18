import { grey } from "@mui/material/colors"

export const flexColumn={
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    width:"100%",
    gap:2,
}

export const flex={
    display:"flex",
    justifyContent:"center",
    gap:1
}

export const modalStyle={
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
}

export const selectStyle= {
    display:"flex",
    justifyContent:"center",
    flexDirection: {xs:"column", sm:"row"},
    gap:2,
    marginTop:3,
    marginBottom:3
}

export const deleteHover={
    cursor:"pointer",
    "&:hover":{color:grey[500]}
}

export const upGrade={
    display:"flex",
    justifyContent:"center",
    gap:"1",
    "&:hover":{color:grey[500]},
    cursor:"pointer",
    alignItems:"center",

}