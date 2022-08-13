import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// Components
import Navbar from "src/components/Navigation/Navbar/Navbar";
import { Paper } from "@mui/material";

// Pages
import Login from "src/pages/Login/Login";
import Dashboard from "src/pages/Dashboard";

// Theming
import { ThemeProvider } from "@mui/material";
import themes from "src/themes/themes";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
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
        <div className="App">
          <Paper style={{ height: "100vh" }}>
            {showNav && <Navbar />}
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </Paper>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
