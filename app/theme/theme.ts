import { createTheme } from "@mui/material/styles";
import { Roboto } from "next/font/google";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { breakpoints } from "./breakpoints";
import { components } from "./components";
import { typography } from "./typography";




declare module "@mui/material/styles" {
  interface Components {
    MainMenuFrameComponent: {};
    GameButtonComponent: {};
  }
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    mobile: true;
    tablet: true;
    md: true;
    lg: true;
    xl: false;
  }
}
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
  typography,
  breakpoints,
  components
});

if (theme.components) {
  theme.components.MuiButton = {
    styleOverrides: {
      root: {
        whiteSpace: "nowrap",
        [theme.breakpoints.down("mobile")]: {
          color: "#f9ed69",
        },
        [theme.breakpoints.between("mobile", "tablet")]: {
          color: "#c500bb",
        },
        [theme.breakpoints.up("tablet")]: {
          color: "#f08a5d",
        },
      },
    },
  };
}
export default theme;