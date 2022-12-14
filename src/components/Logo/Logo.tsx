import { Typography, Link } from "@mui/material";

function Logo() {
  return (
    <Typography
      variant="h6"
      sx={{
        fontFamily: '"Caveat", cursive',
        fontSize: "30px",
        textDecoration: "none",
        color: "inherit",
      }}
      component={Link}
      href="/"
    >
      H2 DevHub
    </Typography>
  );
}

export default Logo;
