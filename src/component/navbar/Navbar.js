
import React from 'react';
import {AppBar,Box,Divider,Drawer,IconButton,Toolbar,Typography,ListItem ,List,Button,CssBaseline,Avatar,
  Menu,
  MenuItem
  } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate} from "react-router-dom";
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import "../../assets/css/Navbar.css";
const drawerWidth = 240;

export default function Navbar({setShowLogin}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userLogin,setUserLogin] =useState("Sign Up");
  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate();
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const open = Boolean(anchorElUser);












  const [activeLink, setActiveLink] = useState(null)
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'left' }}>
       <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' }}}>
            <CloseIcon />
          </Typography>

      <Divider />
      <List sx={{display:"flex",flexDirection:"column",justifyItems:"center"}}>
      <ListItem
            disablePadding
            onClick={() => {
              navigate("Home"); }}>
         <Link onClick={() => setActiveLink("home")} style={activeLink === "home" ? styles.menubtn : styles.unmenubtn }> Home  </Link>
          </ListItem>
          <ListItem
            disablePadding
            onClick={() => {
              navigate("Toyshop"); }}>
         <Link  onClick={() => setActiveLink("toyshop")} style={activeLink === "toyshop" ? styles.menubtn : styles.unmenubtn }> ToyShop  </Link>
          </ListItem>
          <ListItem
            disablePadding
            onClick={() => {
              navigate("Tutorial"); }}>
         <Link onClick={() => setActiveLink("tutorial")} style={activeLink === "tutorial" ? styles.menubtn : styles.unmenubtn }> Tutorial  </Link>
          </ListItem>
          <ListItem
            disablePadding
            onClick={() => {
              navigate("Community"); }}>
         <Link onClick={() => setActiveLink("community")} style={activeLink === "community" ? styles.menubtn : styles.unmenubtn }> Community  </Link>
          </ListItem>
      </List>
    </Box>
  );


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component={"nav"}  sx={{backgroundColor:"#000" }}>
        <Toolbar>
          <IconButton
            color="white"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{mt:1,display: { sm: 'none', xs: 'block', },color:"#fff" }}
          >
            <MenuIcon />

          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block',justifyContent:"space-between" }}}>
              Innotoys
          </Typography>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <List sx={{display:"flex",flexDirection:"row",margin:"auto"}}>
          <ListItem
            disablePadding
            onClick={() => {
              navigate("Home"); }}>
         <Link onClick={() => setActiveLink("home")} style={activeLink === "home" ? styles.touchbtn : styles.untouchbtn }> Home  </Link>
          </ListItem>
          <ListItem
            disablePadding
            onClick={() => {
              navigate("Toyshop"); }}>
         <Link  onClick={() => setActiveLink("toyshop")} style={activeLink === "toyshop" ? styles.touchbtn : styles.untouchbtn }> ToyShop  </Link>
          </ListItem>
          <ListItem
            disablePadding
            onClick={() => {
              navigate("Tutorial"); }}>
         <Link  onClick={() => setActiveLink("tutorial")} style={activeLink === "tutorial" ? styles.touchbtn : styles.untouchbtn }> Tutorial  </Link>
          </ListItem>
          <ListItem
            disablePadding
            onClick={() => {
              navigate("Community"); }}>
         <Link  onClick={() => setActiveLink("community")} style={activeLink === "community" ? styles.touchbtn : styles.untouchbtn }> Community  </Link>
          </ListItem>
        
                    
         

          { userLogin === "Login" ?

        <ListItem>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
        <Avatar alt="TabTree" src="/static/images/avatar/2.jpg" />
      </IconButton>

      <Menu
        id="account-menu"
        open={open}
        anchorEl={anchorElUser}
        onClose={handleCloseUserMenu}
        onClick={handleCloseUserMenu}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleCloseUserMenu}>Profile</MenuItem>
      
        <MenuItem
          onClick={() => {
            handleCloseUserMenu();
          }}
        >
          Logout
        </MenuItem>
      </Menu>
     
</ListItem>
:
<Button onClick={()=>setShowLogin(true)} style={styles.Login}>Login</Button>
        
        
}



          
           
         


































             
        </List>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component={"nav"} >
        <Drawer
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
        >
          {drawer}
        </Drawer>
      </Box>
 <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3 }}>       
           <Toolbar />
        
      </Box>
    </Box>
  );
}

const styles = {

  touchbtn: {
    color: "#9290C3",
    padding: "10px",
    textDecoration:"none"

  },

  untouchbtn: {
    color: "#fff",
    padding: "10px",
    textDecoration:"none"

  },

  Login: {
    borderRadius:"20px",
    border:"1px solid #ffff",
    padding: "0px 50px 0px 50px",
    color: "#fff",

  },
  
  menubtn:{
    color: "#111",
    padding: "10px",
    textDecoration:"none"
  },
  unmenubtn:{
    color: "#111",
    textDecoration:"none",
    padding: "10px",
  }
};

