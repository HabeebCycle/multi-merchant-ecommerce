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
import { sampleTopRatedProducts } from "../../../../utils/sample-data";
import { TOP_RATED_PRODUCTS, VIEW_ALL } from "../../../../utils/constants";

const TopRatedProducts = (props) => (
  <Card {...props}>
    <CardHeader
      subtitle={`${sampleTopRatedProducts.length} in total`}
      title={TOP_RATED_PRODUCTS}
    />
    <Divider />
    <List>
      {sampleTopRatedProducts.map((product, i) => (
        <ListItem
          divider={i < sampleTopRatedProducts.length - 1}
          key={product.id}
        >
          <ListItemAvatar>
            <img
              alt={product.name}
              src={product.imageUrl}
              style={{
                height: 48,
                width: 48,
              }}
            />
          </ListItemAvatar>
          <Box sx={{ flexGrow: 1 }}>
            <ListItemText primary={product.name} />
            <span title={product.ratings}>
              <ReactStars
                size={16}
                edit={false}
                value={product.ratings}
                isHalf
              />
            </span>
          </Box>
          <NextLink href={`/admin/commerce/products/${product.id}`}>
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
      <NextLink href="/admin/commerce/products">
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

export default TopRatedProducts;
