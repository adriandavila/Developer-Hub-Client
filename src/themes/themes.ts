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
    background: {
      default: "#18191B",
      paper: "#18191B",
    },
  },
});

// Export themes
const themes = {
  light,
  dark,
};

export default themes;
