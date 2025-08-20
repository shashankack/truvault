import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#000000",
    },
    text: {
      primary: "#000000",
      secondary: "#ffffff",
    },
  },
  typography: {
    h1: {
      fontFamily: "Clash Display",
      color: "#ffffff",
    },
    body1: {
      fontFamily: "City Boys",
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          fontFamily: "City Boys",
        },
      },
    },

    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(255,255,255,0.6)",
          height: 1,
          width: "100%",
          margin: "0",
        },
      },
    },
  },
});

export default theme;
