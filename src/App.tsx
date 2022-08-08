import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

// Components
import Navbar from "src/components/Navigation/Navbar/Navbar";

// Pages
import Login from "src/pages/Login/Login";
import Dashboard from "src/pages/Dashboard";

function App() {
  const [showNav, setShowNav] = useState(false);
  const [token, setToken] = useState();

  let location = useLocation();
  useEffect(() => {
    if (location.pathname !== "/login") {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  }, [location]);

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <>
      <div className="App">
        {showNav && <Navbar />}
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
