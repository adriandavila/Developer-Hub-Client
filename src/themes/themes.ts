import { createTheme } from "@mui/material";

const light = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
    },
  },
});

const dark = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#152642",
    },
    secondary: {
      main: "#ff99cc",
    },
    background: {
      default: "#0D1117",
      paper: "#0D1117",
    },
  },
});

// Export themes
const themes = {
  light,
  dark,
};

export default themes;
