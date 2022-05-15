import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const AdminFooter = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        bgcolor: "colors.white",
        position: "fixed",
        bottom: 0,
        width: "100%",
        boxShadow: "0px -1px 5px 0px rgba(0,0,0,0.12);",
      }}
    >
      <Typography align="center" color="primary.main">
        © 2020 - {new Date().getFullYear()}, HabeebCycle Marketplace
      </Typography>
    </Box>
  );
};

export default AdminFooter;
