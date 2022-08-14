// Icons
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";

// Types
import { ReactElement } from "react";

type SidebarDatum = {
  title: string;
  path: string;
  icon: ReactElement<any, any>;
};

export const SidebarData: SidebarDatum[] = [
  {
    title: "Home",
    path: "/",
    icon: <HomeIcon />,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <SettingsIcon />,
  },
];
