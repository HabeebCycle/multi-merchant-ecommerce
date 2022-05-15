import React from "react";
import millify from "millify";
import {
  Box,
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { PRODUCTS_IN_STOCK } from "../../../../utils/constants";
import { CustomArrowUpIcon } from "../../../utils/components/ArrowUpIcon";
import { CustomArrowDownIcon } from "../../../utils/components/ArrowDownIcon";

export default function TotalProducts(props) {
  return (
    <Card
      sx={{
        height: "100%",
        borderRadius: "4px",
        boxShadow:
          "rgba(145, 158, 171, 0.24) 0px 0px 2px 0px, rgba(145, 158, 171, 0.24) 0px 16px 32px -4px",
      }}
      {...props}
    >
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
          <Grid item>
            <Typography color="primary" gutterBottom variant="h6">
              {PRODUCTS_IN_STOCK}
            </Typography>
            <Typography color="textPrimary" variant="h3">
              {millify(410254)}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: "colors.lime",
                height: 56,
                width: 56,
              }}
            >
              <AddShoppingCartIcon />
            </Avatar>
          </Grid>
        </Grid>
        <Box
          sx={{
            pt: 2,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography color="textSecondary" variant="subtitle2">
            {millify(5254)} out of stock
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
