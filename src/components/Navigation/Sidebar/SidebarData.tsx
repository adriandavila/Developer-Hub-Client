// Icons
// GlobalSidebarData
import HomeIcon from "@mui/icons-material/Home";
// Developers Icons
import PersonIcon from "@mui/icons-material/Person";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
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
    title: "Personal Dashboard",
    path: "/personal-dashboard",
    icon: <PersonIcon />,
  },
  {
    title: "Team Dashboard",
    path: "/team-dashboard",
    icon: <CorporateFareIcon />,
  },
];

export const AdministratorSidebarData: SidebarDatum[] = [
  {
    title: "Users",
    path: "/user-administration",
    icon: <GroupIcon />,
  },
];
