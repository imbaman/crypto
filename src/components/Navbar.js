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
import { red, yellow, lightBlue } from "@mui/material/colors";
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
        <Avatar
          component={Link}
          to={"/"}
          sx={{ width: "50px", height: "50px", bgcolor: lightBlue[300] }}>
          Logo
        </Avatar>
      </Box>
      <Divider sx={{ borderBottom: 1, color: "rgb(255,255,255,0.3)" }} />
      <Box>
        <MenuList
          id='fade-menu'
          sx={{
            fontSize: "20px",
            fontWeight: "500",
            pt: 5,
            // letterSpacing: "3px",
          }}>
          <MenuItem
            sx={{
              fontSize: "17px",
            }}
            component={Link}
            to={"/"}
            content>
            <ListItemIcon>
              <Home fontSize='medium' sx={{ mr: 4 }} />
            </ListItemIcon>
            Home
          </MenuItem>
          <MenuItem sx={{ fontSize: "17px" }} component={Link} to={"/crypto"}>
            <ListItemIcon>
              <Cloud fontSize='medium' sx={{ mr: 4 }} />
            </ListItemIcon>
            Crypto
          </MenuItem>
          <MenuItem
            sx={{ fontSize: "17px" }}
            component={Link}
            to={"/exchanges"}>
            <ListItemIcon>
              <Cloud fontSize='medium' sx={{ mr: 4 }} />
            </ListItemIcon>
            Exchange
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
            borderColor: "rgb(255,255,255,0.3)",
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
