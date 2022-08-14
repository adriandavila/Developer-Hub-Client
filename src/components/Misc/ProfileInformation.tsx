// MUI Components
import { Box, Typography } from "@mui/material";

// Custom components
import UserAvatar from "./UserAvatar";

function ProfileInformation() {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ mr: 1 }}>
        <UserAvatar />
      </Box>
      <div>
        <Typography>Adrian Davila</Typography>
        <Typography>adrian@h2analytics.ca</Typography>
      </div>
    </Box>
  );
}

export default ProfileInformation;
