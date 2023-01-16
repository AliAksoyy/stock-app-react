import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useSelector } from 'react-redux';
import useAuthCalls from '../hooks/useAuthCalls';
import MenuListItem from '../components/MenuListItem';
import { Outlet } from 'react-router-dom';
import { blueGrey } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 200;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
const navigate=useNavigate()
  const {logout}=useAuthCalls()
  const {currentUser}=useSelector(state=>state.auth)

  console.log(currentUser)
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
     <MenuListItem />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      
      >
        <Toolbar  >
          <IconButton
            color='primary.dark'
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography sx={{flexGrow:1,cursor:"pointer" }} onClick={()=> navigate("/stock")} variant="h6" noWrap component="div">
            Stock App
          </Typography>
          {currentUser && (
          <Typography onClick={()=>logout()} sx={{cursor:"pointer", "&:hover":{color:"white"}}} variant="h6" noWrap component="div">
            Logout
          </Typography>
          )}
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          PaperProps={{
            sx:{backgroundColor:blueGrey[900]}
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
           PaperProps={{
            sx:{backgroundColor:blueGrey[100]}
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Container
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
       
      <Outlet />
      </Container>
    </Box>
  );
}

export default Dashboard;