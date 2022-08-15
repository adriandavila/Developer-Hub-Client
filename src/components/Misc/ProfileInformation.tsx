// MUI Components
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";

// Custom components
import UserAvatar from "./UserAvatar";

function ProfileInformation() {
  const { user } = useSelector((state: any) => state.auth);
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ mr: 1 }}>
        <UserAvatar />
      </Box>
      <div>
        <Typography
          sx={{ fontFamily: "'DynaPuff', cursive", fontSize: "18px" }}
        >
          {user.name}
        </Typography>
        <Typography
          sx={{ fontFamily: "'DynaPuff', cursive", fontSize: "13px" }}
        >
          {user.email}
        </Typography>
      </div>
    </Box>
  );
}

export default ProfileInformation;
