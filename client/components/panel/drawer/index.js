import React from "react";
import {
  Box,
  Typography,
  Drawer,
  Toolbar,
  List,
  Divider,
  Avatar,
  Button,
} from "@mui/material";
import Link from "next/link";
import { stringToColor } from "../../../utils/app-utils";
import { navItems } from "../../../utils/sample-data";
import NavItem from "./NavItem";

export const user = {
  avatar: "/static/images/avatars/avatar_6.png",
  jobTitle: "Senior Engineer",
  name: "Habeeb Okunade",
};

const AdminDrawer = ({ drawerWidth, isSmallScreen, open, setOpen }) => {
  //const drawerWidth = 240;

  const stringAvatar = (name) => {
    return {
      sx: {
        bgcolor: stringToColor(name),
        cursor: "pointer",
        width: 64,
        height: 64,
        my: 2,
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  };

  return (
    <Box sx={{ overflow: "hidden" }}>
      <Drawer
        variant={`${isSmallScreen ? "persistent" : "permanent"}`}
        open={open}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            boxShadow:
              "0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 2px 1px 0 rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.14)",
          },
        }}
      >
        <Toolbar />
        <Box
          sx={{
            overflow: "auto",
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              p: 2,
            }}
          >
            <Link href="/admin/account" passHref>
              <a>
                <Avatar {...stringAvatar(user.name)} />
              </a>
            </Link>
            <Typography color="textPrimary" variant="h5">
              {user.name}
            </Typography>
            <Typography color="textSecondary" variant="body2">
              {user.jobTitle}
            </Typography>
          </Box>
          <Divider />

          <Box sx={{ p: 2 }}>
            <List>
              {navItems.map((item) => (
                <NavItem
                  href={item.href}
                  key={item.title}
                  title={item.title}
                  icon={item.icon}
                  setOpen={setOpen}
                  isSmallScreen={isSmallScreen}
                />
              ))}
            </List>
          </Box>

          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{
              backgroundColor: "background.default",
              m: 2,
              p: 2,
            }}
          >
            <Typography align="center" gutterBottom variant="h4">
              Need more?
            </Typography>
            <Typography align="center" variant="body2">
              Upgrade to PRO version and access 20 more screens
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                pt: 2,
              }}
            >
              <Button
                color="primary"
                component="a"
                href="http://127.0.0.1:3000"
                variant="contained"
              >
                See PRO version
              </Button>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

export default AdminDrawer;
