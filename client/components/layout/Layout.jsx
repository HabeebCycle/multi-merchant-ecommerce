import React, { Fragment } from "react";
import { Box, Toolbar, CssBaseline, useMediaQuery } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Head from "next/head";
import { useStyles } from "../../styles/mainStyles";
import AdminPage from "../panel/header/admin";
import AdminFooter from "../panel/footer/admin";

import theme from "../../styles/theme";
import { panelSettings } from "../../utils/app-settings";
import Seo from "./SEO";

const Layout = (props) => {
  const isSmallScreen = useMediaQuery("(max-width:900px)");
  //const { showDrawer, drawerWidth } = panelSettings;
  const classes = useStyles({ panelSettings, isSmallScreen });

  return (
    <Fragment>
      <Seo title={props.title} description={props.description} />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {props.adminPage && <AdminPage isSmallScreen={isSmallScreen} />}
        <Toolbar />
        <Box className={classes.container}>{props.children}</Box>
        {props.adminPage && <AdminFooter />}
      </ThemeProvider>
    </Fragment>
  );
};

export default Layout;
