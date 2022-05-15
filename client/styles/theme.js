import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Create a theme instance.
let theme = createTheme({
  palette: {
    // type: darkMode ? "dark" : "light",
    background: {
      default: "#f4f6f8",
      paper: "#ffffff",
    },
    primary: {
      main: "#006aae",
      dark: "#27214d",
      light: "#009de6",
      contrastText: "#ffffff",
    },
    text: {
      primary: "#172b4d",
      secondary: "#6b778c",
    },
    info: {
      main: "#006aae",
      light: "#ebf5ff",
    },
    colors: {
      white: "#ffffff",
      tomato: "#ed3237",
      salmon: "#f3dad7",
      lime: "#5abebe",
      stale: "#00a764",
      teal: "#008080",
      olive: "#808000",
      giantblue: "#009de6",
    },
  },
  shadows: [
    "none",
    "0 0 0 1px rgba(63,63,68,0.05), 0 1px 2px 0 rgba(63,63,68,0.15)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 2px 2px -2px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 3px 4px -2px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 3px 4px -2px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 4px 6px -2px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 4px 6px -2px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 4px 8px -2px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 5px 8px -2px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 6px 12px -4px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 7px 12px -4px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 6px 16px -4px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 7px 16px -4px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 8px 18px -8px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 9px 18px -8px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 10px 20px -8px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 11px 20px -8px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 12px 22px -8px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 13px 22px -8px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 14px 24px -8px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 16px 28px -8px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 18px 30px -8px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 20px 32px -8px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 22px 34px -8px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 24px 36px -8px rgba(0,0,0,0.25)",
  ],
  typography: {
    fontFamily: "'Work Sans', sans-serif",
    h1: {
      fontWeight: 500,
      fontSize: 35,
      letterSpacing: "-0.24px",
    },
    h2: {
      fontWeight: 500,
      fontSize: 29,
      letterSpacing: "-0.24px",
    },
    h3: {
      fontWeight: 500,
      fontSize: 24,
      letterSpacing: "-0.06px",
    },
    h4: {
      fontWeight: 500,
      fontSize: 20,
      letterSpacing: "-0.06px",
    },
    h5: {
      fontWeight: 500,
      fontSize: 16,
      letterSpacing: "-0.05px",
    },
    h6: {
      fontWeight: 500,
      fontSize: 14,
      letterSpacing: "-0.05px",
    },
    overline: {
      fontWeight: 500,
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
