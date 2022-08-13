import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// Components
import Navbar from "src/components/Navigation/Navbar/Navbar";
import Sidebar from "src/components/Navigation/Sidebar/Sidebar";

// MUI Components
import Paper from "@mui/material/Paper";

// Pages
import Login from "src/pages/Login/Login";
import Dashboard from "src/pages/Dashboard";
import Settings from "src/pages/Settings/Settings";

// Theming
import { Box, CssBaseline, ThemeProvider, Toolbar } from "@mui/material";
import themes from "src/themes/themes";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [showNav, setShowNav] = useState(false);
  const { user } = useSelector((state: any) => state.auth);

  let location = useLocation();
  useEffect(() => {
    if (location.pathname !== "/login") {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  }, [location]);

  if (!user) {
    return <Login />;
  }

  return (
    <>
      <ThemeProvider theme={themes[theme]}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <Navbar />
          <Sidebar />
          <Box component="main" sx={{ flexGrow: 1 }}>
            <Toolbar />
            <CssBaseline />
            <Paper sx={{ display: "flex" }}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </Paper>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
