import { createTheme } from "@mui/material";

const light = createTheme({});

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
