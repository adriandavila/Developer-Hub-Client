import { IconButton, Badge } from "@mui/material";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

function NotificationsBtn() {
  return (
    <IconButton
      size="large"
      aria-label="show 17 new notifications"
      color="inherit"
    >
      <Badge badgeContent={17} color="error">
        <NotificationsOutlinedIcon />
      </Badge>
    </IconButton>
  );
}

export default NotificationsBtn;
