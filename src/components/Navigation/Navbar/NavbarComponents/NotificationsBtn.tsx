// React
import * as React from "react";
import { useState } from "react";

// MUI Components
import { IconButton, Badge, Menu, Typography } from "@mui/material";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

import Box from "@mui/material/Box";
import { useTheme } from "src/app/hooks";

export default function NotificationsMenu() {
  const [anchorElNotifications, setAnchorElNotifications] =
    useState<null | HTMLElement>(null);

  const handleOpenNotificationsMenu = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    setAnchorElNotifications(event.currentTarget);
  };

  const handleCloseNotificationsMenu = () => {
    setAnchorElNotifications(null);
  };

  const theme = useTheme();

  const menuDropShadow = {
    light: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
    dark: "drop-shadow(0px 2px 8px rgba(255,153,204,0.4))",
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <IconButton
        size="large"
        aria-label="show 17 new notifications"
        color="inherit"
        onClick={handleOpenNotificationsMenu}
      >
        <Badge badgeContent={17} color="secondary">
          <NotificationsOutlinedIcon />
        </Badge>
      </IconButton>

      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElNotifications}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElNotifications)}
        onClose={handleCloseNotificationsMenu}
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
        <Box
          sx={{
            width: 350,
            px: 2,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography>Notifications</Typography>
          <Typography component="a" href="" color="secondary">
            Mark all as read
          </Typography>
        </Box>
      </Menu>
    </Box>
  );
}
