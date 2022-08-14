// MUI Components
import {
  Box,
  Drawer,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";

// Sidebar Data
import { SidebarData } from "./SidebarData";

// Custom Components
import ProfileInformation from "src/components/Misc/ProfileInformation";

const drawerWidth = 240;

function Sidebar() {
  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <Box sx={{ ml: 2, mt: 2 }}>
            <ProfileInformation />
          </Box>
          <List>
            {SidebarData.map((item, index) => {
              return (
                <ListItem disablePadding key={index}>
                  <ListItemButton component={Link} href={item.path}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.title} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Sidebar;
