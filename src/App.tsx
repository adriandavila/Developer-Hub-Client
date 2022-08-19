import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

// Components
import Navbar from "src/components/Navigation/Navbar/Navbar";
import Sidebar from "src/components/Navigation/Sidebar/Sidebar";

// Pages
import Login from "src/pages/Login/Login";
import Home from "src/pages/Global/Home";
import Settings from "src/pages/Settings/Settings";
import Timesheets from "src/pages/Global/Timesheets";
import Minigames from "src/pages/Global/Minigames";
import PersonalDashboard from "src/pages/Developers/PersonalDashboard";
import TeamDashboard from "src/pages/Developers/TeamDashboard";
import UserManagement from "src/pages/Administrators/UserManagement";
import TimesheetManagement from "src/pages/Administrators/TimesheetManagement";

// Theming
import { Box, CssBaseline, ThemeProvider, Toolbar } from "@mui/material";
import themes from "src/themes/themes";
import { ThemeContext } from "./themes/ThemeContext";

const localStorageTheme: "light" | "dark" | null = localStorage.getItem(
  "selectedTheme"
) as "light" | "dark" | null;

function App() {
  const [theme, setTheme] = useState<"light" | "dark">(
    localStorageTheme ? localStorageTheme : "dark"
  );

  const { user } = useSelector((state: any) => state.auth);

  if (!user) {
    return <Login />;
  }

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <ThemeProvider theme={themes[theme]}>
          <Box sx={{ display: "flex", height: "100vh" }}>
            <CssBaseline />
            <Navbar />
            <Sidebar />
            <Box component="main" sx={{ flexGrow: 1 }}>
              <CssBaseline />
              <Toolbar />
              <Box sx={{ height: "calc(100% - 64px)" }}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/timesheets" element={<Timesheets />} />
                  <Route path="/minigames" element={<Minigames />} />
                  <Route
                    path="/personal-dashboard"
                    element={<PersonalDashboard />}
                  />
                  <Route path="/team-dashboard" element={<TeamDashboard />} />
                  <Route
                    path="/user-administration"
                    element={<UserManagement />}
                  />
                  <Route
                    path="/timesheet-administration"
                    element={<TimesheetManagement />}
                  />
                </Routes>
              </Box>
            </Box>
          </Box>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
