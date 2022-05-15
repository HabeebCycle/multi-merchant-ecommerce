import React from "react";
import SvgIcon from "@mui/material/SvgIcon";
import { Box } from "@mui/material";

const ArrowDownIcon = (props) => {
  return (
    <SvgIcon {...props}>
      <path
        fill="currentColor"
        d="M21 12a1 1 0 0 0-2 0v2.3l-4.24-5a1 1 0 0 0-1.27-.21L9.22 11.7L4.77 6.36a1 1 0 1 0-1.54 1.28l5 6a1 1 0 0 0 1.28.22l4.28-2.57l4 4.71H15a1 1 0 0 0 0 2h5a1.1 1.1 0 0 0 .36-.07l.14-.08a1.19 1.19 0 0 0 .15-.09a.75.75 0 0 0 .14-.17a1.1 1.1 0 0 0 .09-.14a.64.64 0 0 0 .05-.17A.78.78 0 0 0 21 17z"
      />
    </SvgIcon>
  );
};

export const CustomArrowDownIcon = () => (
  <Box
    sx={{
      width: "24px",
      height: "24px",
      padding: "8px",
      display: "flex",
      borderRadius: "50%",
      alignItems: "center",
      justifyContent: "center",
      color: "rgb(255, 72, 66)",
      backgroundColor: "rgb(255, 72, 66, 0.16)",
    }}
  >
    <ArrowDownIcon sx={{ height: 16, width: 16 }} />
  </Box>
);

export default ArrowDownIcon;
