// Icons
// GlobalSidebarData
import HomeIcon from "@mui/icons-material/Home";
// Developers Icons
import WebhookIcon from "@mui/icons-material/Webhook";
// Administrators Icons
import GroupIcon from "@mui/icons-material/Group";

// Types
import { ReactElement } from "react";

type SidebarDatum = {
  title: string;
  path: string;
  icon: ReactElement<any, any>;
};

export const GlobalSidebarData: SidebarDatum[] = [
  {
    title: "Home",
    path: "/",
    icon: <HomeIcon />,
  },
];

export const DeveloperSidebarData: SidebarDatum[] = [
  {
    title: "API Monitor",
    path: "/api-monitor",
    icon: <WebhookIcon />,
  },
];

export const AdministratorSidebarData: SidebarDatum[] = [
  {
    title: "User Management",
    path: "/user-administration",
    icon: <GroupIcon />,
  },
];
