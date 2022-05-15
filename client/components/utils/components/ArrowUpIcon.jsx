import React from "react";
import SvgIcon from "@mui/material/SvgIcon";
import { Box } from "@mui/material";

const ArrowUpIcon = (props) => {
  return (
    <SvgIcon {...props}>
      <path
        fill="currentColor"
        d="M21 7a.78.78 0 0 0 0-.21a.64.64 0 0 0-.05-.17a1.1 1.1 0 0 0-.09-.14a.75.75 0 0 0-.14-.17l-.12-.07a.69.69 0 0 0-.19-.1h-.2A.7.7 0 0 0 20 6h-5a1 1 0 0 0 0 2h2.83l-4 4.71l-4.32-2.57a1 1 0 0 0-1.28.22l-5 6a1 1 0 0 0 .13 1.41A1 1 0 0 0 4 18a1 1 0 0 0 .77-.36l4.45-5.34l4.27 2.56a1 1 0 0 0 1.27-.21L19 9.7V12a1 1 0 0 0 2 0V7z"
      />
    </SvgIcon>
  );
};

export const CustomArrowUpIcon = () => (
  <Box
    sx={{
      width: "24px",
      height: "24px",
      padding: "8px",
      display: "flex",
      borderRadius: "50%",
      alignItems: "center",
      justifyContent: "center",
      color: "rgb(84, 214, 44)",
      backgroundColor: "rgba(84, 214, 44, 0.16)",
    }}
  >
    <ArrowUpIcon sx={{ height: 16, width: 16 }} />
  </Box>
);

export default ArrowUpIcon;
