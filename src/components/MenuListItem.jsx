import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from "@mui/icons-material/Dashboard";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import InventoryIcon from "@mui/icons-material/Inventory";
import StoreIcon from "@mui/icons-material/Store";
import StarsIcon from "@mui/icons-material/Stars";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";


const menu= [
    {
        icon: <DashboardIcon />,
        title:"Dashboard",
        navigate:"stock"
    },
    {
        icon: <AttachMoneyIcon />,
        title:"Purchase",
        navigate:"purchases"
    },
    {
        icon: <InventoryIcon />,
        title:"Sales",
        navigate:"sales"
    },
    {
        icon: <StoreIcon />,
        title:"Firms",
        navigate:"firms"
    },
    {
        icon: <StarsIcon />,
        title:"Brands",
        navigate:"brands"
    },
    {
        icon: <ShoppingCartIcon />,
        title:"Products",
        navigate:"products"
    },
    {
        icon: <SupervisorAccountIcon />,
        title:"Admin Panel",
        navigate:"https://14281.fullstack.clarusway.com/admin/"
    },
]


const MenuListItem = () => {
  return (
    <List>
        {menu.map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>
               {text.icon}
              </ListItemIcon>
              <ListItemText primary={text.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
  )
}

export default MenuListItem