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
import GroupsIcon from "@mui/icons-material/Groups";
import { TOTAL_CUSTOMERS } from "../../../../utils/constants";
import { CustomArrowUpIcon } from "../../../utils/components/ArrowUpIcon";
import { CustomArrowDownIcon } from "../../../utils/components/ArrowDownIcon";

export default function TotalCustomers(props) {
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
              {TOTAL_CUSTOMERS}
            </Typography>
            <Typography color="textPrimary" variant="h3">
              {millify(1254)}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: "primary.dark",
                height: 56,
                width: 56,
              }}
            >
              <GroupsIcon />
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
            5 registered today
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
