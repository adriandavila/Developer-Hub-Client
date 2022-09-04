// MUI Components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";

// Icons
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

// Custom components
import Spacer from "src/components/Misc/Spacer";
import Logo from "src/components/Logo/Logo";
import NotificationsBtn from "./NavbarComponents/NotificationsBtn";
import UserInfoMenu from "./NavbarComponents/UserInfoMenu";

// MUI Components
import { Box, Divider } from "@mui/material";

export default function ButtonAppBar() {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      enableColorOnDark
      color="primary"
    >
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu">
          <RocketLaunchIcon />
        </IconButton>
        <Divider
          variant="middle"
          orientation="vertical"
          flexItem
          sx={{ mr: 2, color: "white", fill: "white" }}
        />
        <Logo />
        <Spacer />
        <NotificationsBtn />
        <Box sx={{ ml: 2 }}>
          <UserInfoMenu />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
