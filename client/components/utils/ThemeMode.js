import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import { DARK_MODE_OFF, DARK_MODE_ON } from "../../context/actions";
import { setCookies } from "../../utils/storage";
import { THEME_MODE } from "../../utils/constants";

import { Store } from "../../context/store";

function MyTheme() {
  const theme = useTheme();
  const { state, dispatch } = useContext(Store);
  const { darkMode } = state;

  const themeChangeHandler = () => {
    dispatch({ type: darkMode ? DARK_MODE_OFF : DARK_MODE_ON });
    const newDarkMode = !darkMode;
    setCookies(THEME_MODE, newDarkMode ? "ON" : "OFF");
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "text.primary",
        borderRadius: 1,
      }}
    >
      <IconButton
        sx={{ ml: 1 }}
        onClick={themeChangeHandler}
        color="inherit"
        title={`Switch to ${
          theme.palette.mode === "dark" ? "light" : "dark"
        } mode`}
      >
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Box>
  );
}

export default MyTheme;
