import React from "react";
import {
  Button,
  Typography,
  Container,
  Avatar,
  MenuList,
  MenuItem,
  ListItemIcon,
  Divider,
  Drawer,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Cloud, Home } from "@mui/icons-material";
import { red } from "@mui/material/colors";
const drawerWidth = 250;

const Navbar = () => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          // display: "flex",
          color: "rgba(38, 38, 38, 0.3)",
          bgcolor: "background.second",
          borderRight: 1,
        },
      }}
      variant='permanent'
      anchor='left'>
      <div className='logo'>
        <Avatar />
        <Typography>
          <Link to='/'>Test Logo</Link>
        </Typography>
      </div>
      <Divider sx={{ borderBottom: 1, color: "rgba(38, 38, 38, 0.3)" }} />
      <div className='content'>
        <MenuList id='fade-menu'>
          <MenuItem>
            <ListItemIcon>
              <Home fontSize='small' />
            </ListItemIcon>
            <Link to='/'>Home </Link>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Cloud fontSize='small' />
            </ListItemIcon>
            <Link to='/crypto'>Crypto </Link>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Cloud fontSize='small' />
            </ListItemIcon>
            <Link to='/exchanges'>Exchange </Link>
          </MenuItem>
        </MenuList>
      </div>
    </Drawer>
  );
};

export default Navbar;
