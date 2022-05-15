import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  layout: {
    color: "#333",
  },
  drawer: {
    boxShadow:
      "0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 2px 1px 0 rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.14)",
  },
  container: {
    marginLeft: (props) =>
      `${
        props.isSmallScreen
          ? 0
          : props.panelSettings.showDrawer
          ? props.panelSettings.drawerWidth
          : 0
      }px`,
    // padding: "20px",
  },
  card: {
    boxShadow:
      "rgba(145, 158, 171, 0.24) 0px 0px 2px 0px, rgba(145, 158, 171, 0.24) 0px 16px 32px -4px",
  },
  footerDrawer: {
    position: "fixed",
    bottom: 0,
    textAlign: "center",
    paddingBottom: 10,
  },
}));
