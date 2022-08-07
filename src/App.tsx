import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Dashboard from "src/pages/Dashboard";
import Login from "src/pages/Login/Login";
import Navbar from "src/components/Navigation/Navbar/Navbar";
import { useEffect, useState } from "react";

function App() {
  const [showNav, setShowNav] = useState(false);
  let location = useLocation();
  useEffect(() => {
    if (location.pathname !== "/login") {
      console.log("Settings showNav = true");
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  }, [location]);

  return (
    <>
      <div className="App">
        {showNav && <Navbar />}
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
