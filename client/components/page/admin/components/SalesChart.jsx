import React from "react";
import NextLink from "next/link";
import { Bar } from "react-chartjs-2";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Menu,
  MenuItem,
  useTheme,
  colors,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { getChartLabel } from "../../../../utils/app-utils";
import { LATEST_SALES } from "../../../../utils/constants";

const SalesChart = (props) => {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [dayLabel, setDayLabel] = React.useState(7);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (days) => {
    setDayLabel(days);
    setAnchorEl(null);
  };

  const data = {
    datasets: [
      {
        backgroundColor: colors.indigo[500],
        barPercentage: 0.5,
        barThickness: 12,
        borderRadius: 4,
        categoryPercentage: 0.5,
        data: [18, 5, 19, 27, 29, 19, 20],
        label: `${dayLabel === 7 ? "This week" : "This month"}`,
        maxBarThickness: 10,
      },
      {
        backgroundColor: colors.grey[200],
        barPercentage: 0.5,
        barThickness: 12,
        borderRadius: 4,
        categoryPercentage: 0.5,
        data: [11, 20, 12, 29, 30, 25, 13],
        label: `${dayLabel === 7 ? "Last week" : "Last month"}`,
        maxBarThickness: 10,
      },
    ],
    labels: getChartLabel(dayLabel),
  };

  const options = {
    animation: false,
    cornerRadius: 20,
    layout: { padding: 0 },
    legend: { display: false },
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      xAxes: [
        {
          ticks: {
            fontColor: theme.palette.text.secondary,
          },
          gridLines: {
            display: false,
            drawBorder: false,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            fontColor: theme.palette.text.secondary,
            beginAtZero: true,
            min: 0,
          },
          gridLines: {
            borderDash: [2],
            borderDashOffset: [2],
            color: theme.palette.divider,
            drawBorder: false,
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2],
            zeroLineColor: theme.palette.divider,
          },
        },
      ],
    },
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

  return (
    <Card {...props}>
      <CardHeader
        action={
          <>
            <Button
              id="basic-button"
              aria-controls="basic-menu"
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              endIcon={<ArrowDropDownIcon />}
              size="small"
              variant="text"
            >
              Last {dayLabel} days
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={() => handleClose(dayLabel)}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem
                onClick={() => handleClose(7)}
                sx={{
                  background: `${dayLabel == 7 ? "#f4f6f8" : ""}`,
                }}
              >
                Last 7 days
              </MenuItem>
              <MenuItem
                onClick={() => handleClose(28)}
                sx={{
                  background: `${dayLabel == 28 ? "#f4f6f8" : ""}`,
                }}
              >
                Last 28 days
              </MenuItem>
            </Menu>
          </>
        }
        title={LATEST_SALES}
      />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 400,
            position: "relative",
          }}
        >
          <Bar data={data} options={options} />
        </Box>
      </CardContent>
      <Divider />
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          p: 2,
        }}
      >
        <NextLink href="/admin/commerce/sales" passHref>
          <Button
            color="primary"
            endIcon={<ArrowRightIcon />}
            size="small"
            variant="text"
          >
            Overview
          </Button>
        </NextLink>
      </Box>
    </Card>
  );
};

export default SalesChart;
