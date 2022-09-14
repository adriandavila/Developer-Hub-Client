// React
import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

// MUI Components
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Link } from "@mui/material";

// Custom Components
import ProfileInformation from "src/components/Misc/ProfileInformation";
import UserAvatar from "src/components/User/UserAvatar";

// Icons
import { Logout, Settings } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

// Services
import { logout, reset } from "src/features/auth/authSlice";
import { useTheme } from "src/hooks/useTheme";

export default function UserInfoMenu() {
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  const theme = useTheme();

  const menuDropShadow = {
    light: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
    dark: "drop-shadow(0px 2px 8px rgba(255,153,204,0.4))",
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
        <UserAvatar />
      </IconButton>

      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: menuDropShadow[theme.theme as "light" | "dark"],
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
      >
        <MenuItem component={Link} href="/personal-dashboard">
          <ProfileInformation />
        </MenuItem>
        <Divider sx={{ my: 1 }} />
        <MenuItem component={Link} href="/settings">
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={onLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  );
}
