import React from "react";
import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        textAlign: "center",
        py: 3,
        mt: 5,
        borderTop: "1px solid #3F51B5", 
        backgroundColor: "background.paper", 
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} CodeWithSari-Portfolio. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
