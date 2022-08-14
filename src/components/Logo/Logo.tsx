import { Typography } from "@mui/material";

function Logo() {
  return (
    <Typography
      variant="h6"
      component="div"
      sx={{
        flexGrow: 1,
        "font-family": '"Caveat", cursive',
        "font-size": "30px",
      }}
    >
      H2 DevHub
    </Typography>
  );
}

export default Logo;
