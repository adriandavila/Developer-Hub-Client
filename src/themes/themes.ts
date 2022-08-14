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
  },
});

// Export themes
const themes = {
  light,
  dark,
};

export default themes;
