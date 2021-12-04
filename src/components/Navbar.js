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
import { Box } from "@mui/system";
const drawerWidth = 200;

const Navbar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
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
              "& :hover": { backgroundColor: "background.misc" },
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
    </Drawer>
  );
};

export default Navbar;
