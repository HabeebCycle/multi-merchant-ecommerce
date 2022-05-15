import React from "react";
import NextLink from "next/link";
import ReactStars from "react-rating-stars-component";
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
import { sampleTopRatedStores } from "../../../../utils/sample-data";
import { TOP_RATED_MERCHANTS, VIEW_ALL } from "../../../../utils/constants";

const TopRatedMerchant = (props) => (
  <Card {...props}>
    <CardHeader
      subtitle={`${sampleTopRatedStores.length} in total`}
      title={TOP_RATED_MERCHANTS}
    />
    <Divider />
    <List>
      {sampleTopRatedStores.map((store, i) => (
        <ListItem divider={i < sampleTopRatedStores.length - 1} key={store.id}>
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
          <Box sx={{ flexGrow: 1 }}>
            <ListItemText primary={store.name} />
            <span title={store.ratings}>
              <ReactStars size={16} edit={false} value={store.ratings} isHalf />
            </span>
          </Box>
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

export default TopRatedMerchant;
