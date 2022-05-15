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
import { sampleStores } from "../../../../utils/sample-data";
import { LATEST_MERCHANTS, VIEW_ALL } from "../../../../utils/constants";

const LatestMerchants = (props) => (
  <Card {...props}>
    <CardHeader
      subtitle={`${sampleStores.length} in total`}
      title={LATEST_MERCHANTS}
    />
    <Divider />
    <List>
      {sampleStores.map((store, i) => (
        <ListItem divider={i < sampleStores.length - 1} key={store.id}>
          <ListItemAvatar>
            <img
              alt={store.name}
              src={store.imageUrl}
              style={{
                height: 48,
                width: 48,
                borderRadius: "50%",
              }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={store.name}
            secondary={`Registered ${store.updatedAt.fromNow()}`}
          />
          <NextLink href={`/admin/commerce/merchants/${store.id}`}>
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
      <NextLink href="/admin/commerce/merchants">
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

export default LatestMerchants;
