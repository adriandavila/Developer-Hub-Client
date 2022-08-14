import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";

function UserAvatar() {
  const { user } = useSelector((state: any) => state.auth);
  return <Avatar alt={user.name} src={user.picture} />;
}

export default UserAvatar;
