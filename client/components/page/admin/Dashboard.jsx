import React, { Fragment } from "react";
import NextLink from "next/link";
import { Box, Container, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import TotalSales from "./components/TotalSales";
import TotalMerchants from "./components/TotalMerchants";
import TotalCustomers from "./components/TotalCustomers";
import TotalOrders from "./components/TotalOrders";
import TotalProducts from "./components/TotalProducts";
import WidthdrawalRequest from "./components/WithdrawalRequests";
import ProductCategories from "./components/ProductCategories";
import TotalMessages from "./components/TotalMessages";
import SalesChart from "./components/SalesChart";
import TopSalesCategories from "./components/TopSalesCategories";
import LatestProducts from "./components/LatestProducts";
import LatestOrders from "./components/LatestOrders";
import LatestMerchants from "./components/LatestMarchants";
import LatestCustomers from "./components/LatestCustomers";
import TopRatedProducts from "./components/TopRatedProducts";
import TopRatedMerchant from "./components/TopRatedMerchant";

export const useStyles = makeStyles((theme) => ({
  main: {},
  card: {
    height: "100%",
    borderRadius: "4px",
    boxShadow:
      "rgba(145, 158, 171, 0.24) 0px 0px 2px 0px, rgba(145, 158, 171, 0.24) 0px 16px 32px -4px",
  },
}));

const Dashboard = (props) => {
  return (
    <Fragment>
      <Box
        sx={{
          backgroundColor: "background.default",
          minHeight: "100%",
          py: 3,
        }}
      >
        <Container maxWidth={false}>
          <Grid container spacing={2}>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <NextLink href="/admin/commerce/sales" passHref>
                <a>
                  <TotalSales />
                </a>
              </NextLink>
            </Grid>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <NextLink href="/admin/merchants" passHref>
                <a>
                  <TotalMerchants />
                </a>
              </NextLink>
            </Grid>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <NextLink href="/admin/customers" passHref>
                <a>
                  <TotalCustomers />
                </a>
              </NextLink>
            </Grid>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <NextLink href="/admin/commerce/orders" passHref>
                <a>
                  <TotalOrders />
                </a>
              </NextLink>
            </Grid>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <NextLink href="/admin/commerce/products" passHref>
                <a>
                  <TotalProducts />
                </a>
              </NextLink>
            </Grid>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <NextLink href="/admin/merchant/withdrawal" passHref>
                <a>
                  <WidthdrawalRequest />
                </a>
              </NextLink>
            </Grid>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <NextLink href="/admin/commerce/categories" passHref>
                <a>
                  <ProductCategories />
                </a>
              </NextLink>
            </Grid>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <NextLink href="/admin/messages" passHref>
                <a>
                  <TotalMessages />
                </a>
              </NextLink>
            </Grid>
            <Grid item lg={8} md={12} xl={9} xs={12}>
              <SalesChart />
            </Grid>
            <Grid item lg={4} md={6} xl={3} xs={12}>
              <TopSalesCategories sx={{ height: "100%" }} />
            </Grid>
            <Grid item lg={4} md={6} xl={3} xs={12}>
              <LatestProducts sx={{ height: "100%" }} />
            </Grid>
            <Grid item lg={8} md={12} xl={9} xs={12}>
              <LatestOrders />
            </Grid>
            <Grid item lg={4} md={6} xl={3} xs={12}>
              <LatestMerchants />
            </Grid>
            <Grid item lg={4} md={6} xl={3} xs={12}>
              <LatestCustomers />
            </Grid>
            <Grid item lg={4} md={6} xl={3} xs={12}>
              <TopRatedProducts />
            </Grid>
            <Grid item lg={4} md={6} xl={3} xs={12}>
              <TopRatedMerchant />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Fragment>
  );
};

export default Dashboard;
