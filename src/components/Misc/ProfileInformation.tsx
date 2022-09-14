// MUI Components
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";

// Custom components
import UserAvatar from "src/components/User/UserAvatar";

function ProfileInformation() {
  const { user } = useSelector((state: any) => state.auth);
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", textOverflow: "ellipsis" }}
    >
      <Box sx={{ mr: 1 }}>
        <UserAvatar />
      </Box>
      <div>
        <Typography
          sx={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "17px",
            fontWeight: 500,
            lineHeight: 1.3,
          }}
          component="div"
        >
          {user.name}
        </Typography>
        <Typography
          sx={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "12px",
            lineHeight: 1.3,
            fontWeight: 300,
          }}
          component="div"
        >
          {user.email}
        </Typography>
      </div>
    </Box>
  );
}

export default ProfileInformation;
