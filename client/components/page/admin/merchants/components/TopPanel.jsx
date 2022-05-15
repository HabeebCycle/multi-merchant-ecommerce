import React from "react";
import { Box, Tabs, Tab } from "@mui/material";
import { MERCHANT_TAB_VIEW } from "../../../../../utils/constants";

const TopPanel = (props) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        borderRadius: "4px",
        backgroundColor: "colors.white",
        boxShadow:
          "rgba(145, 158, 171, 0.24) 0px 0px 2px 0px, rgba(145, 158, 171, 0.24) 0px 16px 32px -4px",
      }}
    >
      <Tabs
        value={props.page}
        onChange={props.handleChange}
        textColor="primary"
        indicatorColor="secondary"
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="Merchant Details Tabs"
        sx={{ "& .MuiTabs-scrollButtons.Mui-disabled": { opacity: "0.3" } }}
      >
        {MERCHANT_TAB_VIEW.map((tab, index) => (
          <Tab key={index} value={`${index}`} label={tab} />
        ))}
      </Tabs>
    </Box>
  );
};

export default TopPanel;
