import React from "react";

import { Container } from "@mui/material";
import { Box } from "@mui/system";

const Layout = ({ children }) => {
  return (
    <>
      <Box
        sx={{
          bgcolor: "background.main",
          color: "#00000",
          width: "100%",
          //   maxWidth: "xs",
          // height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          // minWidth: "1500px",
          pt: { xs: "75px", md: "50px" },
          pl: { xs: 4, md: 10 },
          pr: { xs: 4, md: 10 },
        }}
        lg={{ minWidth: "1200px" }}>
        {children}
      </Box>
    </>
  );
};

export default Layout;
