import React from "react";
import NextLink from "next/link";
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { sampleCustomers } from "../../../../utils/sample-data";
import { LATEST_CUSTOMERS, VIEW_ALL } from "../../../../utils/constants";

const LatestCustomers = (props) => (
  <Card {...props}>
    <CardHeader
      subtitle={`${sampleCustomers.length} in total`}
      title={LATEST_CUSTOMERS}
    />
    <Divider />
    <List>
      {sampleCustomers.map((customer, i) => (
        <ListItem divider={i < sampleCustomers.length - 1} key={customer.id}>
          <ListItemAvatar>
            <img
              alt={customer.name}
              src={customer.imageUrl}
              style={{
                height: 48,
                width: 48,
                borderRadius: "50%",
              }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={customer.name}
            secondary={`Registered ${customer.updatedAt.fromNow()}`}
          />
          <NextLink href={`/admin/commerce/customers/${customer.id}`}>
            <IconButton edge="end" size="small" title="View Details">
              <MoreVertIcon />
            </IconButton>
          </NextLink>
        </ListItem>
      ))}
    </List>
    <Divider />
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        p: 2,
      }}
    >
      <NextLink href="/admin/commerce/customers">
        <Button
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
        >
          {VIEW_ALL}
        </Button>
      </NextLink>
    </Box>
  </Card>
);

export default LatestCustomers;
