import React from "react";

import { Container } from "@mui/material";
import { Box } from "@mui/system";

const Layout = ({ children }) => {
  return (
    <div>
      <Box
        sx={{
          bgcolor: "background.main",
          width: "100%",
          //   maxWidth: "xs",
          // height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 4,
        }}
        lg={{ minWidth: "1200px" }}>
        {children}
      </Box>
    </div>
  );
};

export default Layout;
