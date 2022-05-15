import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  colors,
  useTheme,
} from "@mui/material";
import { TOP_CATEGORIES_SALES } from "../../../../utils/constants";

const TopSalesCategories = (props) => {
  const theme = useTheme();

  const data = {
    datasets: [
      {
        data: [28, 16, 22, 20, 14],
        backgroundColor: [
          colors.indigo[500],
          colors.red[600],
          colors.orange[600],
          colors.green[600],
          colors.blue[600],
        ],
        borderWidth: 8,
        borderColor: colors.common.white,
        hoverBorderColor: colors.common.white,
      },
    ],
    labels: ["Electronics", "Foods", "Apparels", "Homeware", "Supplies"],
  };

  const options = {
    animation: true,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: true,
    },
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: "index",
      titleFontColor: theme.palette.text.primary,
    },
  };

  const categories = [
    {
      title: "Electronics",
      value: 28,
      color: colors.indigo[500],
    },
    {
      title: "Foods",
      value: 16,
      color: colors.red[600],
    },
    {
      title: "Apparels",
      value: 22,
      color: colors.orange[600],
    },
    {
      title: "Homeware",
      value: 20,
      color: colors.green[600],
    },
    {
      title: "Supplies",
      value: 14,
      color: colors.blue[400],
    },
  ];

  return (
    <Card {...props}>
      <CardHeader title={TOP_CATEGORIES_SALES} />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 300,
            position: "relative",
          }}
        >
          <Doughnut data={data} options={options} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            p: 2,
          }}
        >
          {categories.map(({ color, title, value }) => (
            <Box
              key={title}
              sx={{
                p: 1,
                textAlign: "center",
              }}
            >
              <Typography color="textPrimary" variant="body1">
                {title}
              </Typography>
              <Typography style={{ color }} variant="h5">
                {value}%
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default TopSalesCategories;
