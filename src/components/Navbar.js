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
  AppBar,
  Toolbar,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { Cloud, Home } from "@mui/icons-material";
import { red } from "@mui/material/colors";
import { Box } from "@mui/system";
const drawerWidth = 200;

const Navbar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawerContent = (
    <Box>
      <Box p={2} sx={{ display: "flex", alignItems: "center" }}>
        <Avatar />
        <Typography
          sx={{ fontSize: "24px", marginLeft: "5px", fontWeight: 700 }}>
          <Link to='/'>Test Logo</Link>
        </Typography>
      </Box>
      <Divider sx={{ borderBottom: 1, color: "rgba(38, 38, 38, 0.3)" }} />
      <Box>
        <MenuList
          id='fade-menu'
          sx={{
            fontSize: "20px",
          }}>
          <MenuItem
            sx={{
              fontSize: "20px",
              "& :hover": { backgroundColor: "background.misc" },
            }}>
            <ListItemIcon>
              <Home fontSize='medium' color='success' />
            </ListItemIcon>
            <Link to='/'>Home </Link>
          </MenuItem>
          <MenuItem sx={{ fontSize: "20px" }}>
            <ListItemIcon>
              <Cloud fontSize='medium' />
            </ListItemIcon>
            <Link to='/crypto'>Crypto </Link>
          </MenuItem>
          <MenuItem sx={{ fontSize: "20px" }}>
            <ListItemIcon>
              <Cloud fontSize='medium' />
            </ListItemIcon>
            <Link to='/exchanges'>Exchange </Link>
          </MenuItem>
        </MenuList>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position='fixed'
        sx={{
          display: { sm: "none" },
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "background.main",
        }}>
        <Toolbar sx={{ bgColor: "background.main" }}>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          display: { xs: "none", sm: "flex" },
          width: drawerWidth,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            display: "flex",
            color: "rgba(38, 38, 38, 0.3)",
            bgcolor: "background.second",
            borderRight: 1,
          },
        }}
        variant='permanent'
        anchor='left'>
        {drawerContent}
      </Drawer>
      <Drawer
        container={container}
        variant='temporary'
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            color: "rgba(38, 38, 38, 0.3)",
            bgcolor: "background.second",
          },
        }}>
        {drawerContent}
      </Drawer>
    </Box>
  );
};

export default Navbar;
