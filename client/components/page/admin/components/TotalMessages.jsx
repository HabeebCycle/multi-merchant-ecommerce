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
import EmailIcon from "@mui/icons-material/Email";
import { UNREAD_MESSAGES } from "../../../../utils/constants";
import { CustomArrowUpIcon } from "../../../utils/components/ArrowUpIcon";
import { CustomArrowDownIcon } from "../../../utils/components/ArrowDownIcon";

export default function TotalMessages(props) {
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
              {UNREAD_MESSAGES}
            </Typography>
            <Typography color="textPrimary" variant="h3">
              {millify(24)}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: "colors.olive",
                height: 56,
                width: 56,
              }}
            >
              <EmailIcon />
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
            New 4 merchant, 2 customer messages
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
