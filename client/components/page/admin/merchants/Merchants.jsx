import React, { Fragment } from "react";
import { Box, Container, Grid } from "@mui/material";
import TopPanel from "./components/TopPanel";
import { MERCHANT_TAB_VIEW } from "../../../../utils/constants";
import CustomTable from "../../../utils/components/CustomTable";
import TopToolbar from "./components/TopToolbar";

const Merchants = (props) => {
  const [page, setPage] = React.useState("0");

  const handleChange = (event, activePage) => {
    setPage(activePage);
  };

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
            <Grid item xs={12}>
              <TopPanel page={page} handleChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              {page === "0" && (
                <Box>
                  <TopToolbar title={MERCHANT_TAB_VIEW[page]} />
                  <CustomTable />
                </Box>
              )}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Fragment>
  );
};

export default Merchants;
