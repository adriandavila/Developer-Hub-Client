import { IconButton, Link } from "@mui/material";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

function SettingsBtn() {
  return (
    <IconButton
      aria-label="Settings"
      color="inherit"
      component={Link}
      href="/settings"
    >
      <SettingsOutlinedIcon />
    </IconButton>
  );
}

export default SettingsBtn;
