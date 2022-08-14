// MUI Components
import { Avatar, Box, Typography } from "@mui/material";

function ProfileInformation() {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Avatar sx={{ mr: 1 }} />
      <div>
        <Typography>Adrian Davila</Typography>
        <Typography>adrian@h2analytics.ca</Typography>
      </div>
    </Box>
  );
}

export default ProfileInformation;
