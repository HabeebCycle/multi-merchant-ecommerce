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
import { red, green } from "@mui/material/colors";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { TOTAL_SALES } from "../../../../utils/constants";
import { CustomArrowUpIcon } from "../../../utils/components/ArrowUpIcon";
import { CustomArrowDownIcon } from "../../../utils/components/ArrowDownIcon";

export default function TotalSales(props) {
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
              {TOTAL_SALES}
            </Typography>
            <Typography color="textPrimary" variant="h3">
              ${millify(24600)}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar sx={{ backgroundColor: red[500], height: 56, width: 56 }}>
              <AttachMoneyIcon />
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
            Net sales this month
          </Typography>
          <Typography
            sx={{
              color: "rgb(255, 72, 66)",
              mr: 1,
              ml: 1,
            }}
            variant="subtitle2"
          >
            12%
          </Typography>
          <CustomArrowDownIcon />
        </Box>
      </CardContent>
    </Card>
  );
}
