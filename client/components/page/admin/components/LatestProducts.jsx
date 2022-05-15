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
import { sampleProducts } from "../../../../utils/sample-data";
import { LATEST_PRODUCTS, VIEW_ALL } from "../../../../utils/constants";

const LatestProducts = (props) => (
  <Card {...props}>
    <CardHeader
      subtitle={`${sampleProducts.length} in total`}
      title={LATEST_PRODUCTS}
    />
    <Divider />
    <List>
      {sampleProducts.map((product, i) => (
        <ListItem divider={i < sampleProducts.length - 1} key={product.id}>
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
          <ListItemText
            primary={product.name}
            secondary={`Updated ${product.updatedAt.fromNow()}`}
          />
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

export default LatestProducts;
