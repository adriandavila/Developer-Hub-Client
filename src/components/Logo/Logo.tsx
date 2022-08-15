import { Typography } from "@mui/material";

function Logo() {
  return (
    <Typography
      variant="h6"
      component="div"
      sx={{
        flexGrow: 1,
        fontFamily: '"Caveat", cursive',
        fontSize: "30px",
      }}
    >
      H2 DevHub
    </Typography>
  );
}

export default Logo;
