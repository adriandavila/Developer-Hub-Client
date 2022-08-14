// MUI Components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

// Icons
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

// Custom components
import Logo from "src/components/Logo/Logo";
import UserInfoMenu from "./NavbarComponents/UserInfoMenu";
import { Divider } from "@mui/material";

export default function ButtonAppBar() {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
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

        <UserInfoMenu />
      </Toolbar>
    </AppBar>
  );
}
