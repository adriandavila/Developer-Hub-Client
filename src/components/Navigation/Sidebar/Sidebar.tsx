// MUI Components
import {
  Box,
  Chip,
  Divider,
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
import {
  GlobalSidebarData,
  DeveloperSidebarData,
  AdministratorSidebarData,
} from "./SidebarData";

// Custom Components
import ProfileInformation from "src/components/Misc/ProfileInformation";

const drawerWidth = 260;

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
        BackdropProps={{ invisible: true }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <Box sx={{ ml: 2, mt: 2 }}>
            <ProfileInformation />
          </Box>
          <Divider sx={{ mt: 2 }}>
            <Chip label="H2 Analytics" variant="outlined" color="secondary" />
          </Divider>
          <List>
            {GlobalSidebarData.map((item, index) => {
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
          <Divider>
            <Chip label="Developers" variant="outlined" color="secondary" />
          </Divider>
          <List>
            {DeveloperSidebarData.map((item, index) => {
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
          <Divider>
            <Chip label="Administrators" variant="outlined" color="secondary" />
          </Divider>
          <List>
            {AdministratorSidebarData.map((item, index) => {
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
