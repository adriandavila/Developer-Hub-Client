// MUI Components
import { Container } from "@mui/material";

// Custom Components
import { AppThemeSwitch } from "src/components/Misc/AppThemeSwitch";

function Settings() {
  return (
    <>
      <Container sx={{ p: 2, m: 0 }}>
        <h1>Settings</h1>
        <AppThemeSwitch />
      </Container>
    </>
  );
}

export default Settings;
