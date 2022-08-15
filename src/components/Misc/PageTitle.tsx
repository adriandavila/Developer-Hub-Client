import { Box, Divider, Typography } from "@mui/material";

function PageTitle(props: { title: string }) {
  return (
    <Box>
      <Typography
        sx={{
          fontFamily: "'Gloria Hallelujah', cursive",
          fontSize: "32px",
          fontWeight: 700,
          lineHeight: 1,
          pb: 1,
        }}
      >
        {props.title}
      </Typography>
      <Divider />
    </Box>
  );
}

export default PageTitle;
