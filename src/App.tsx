import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "src/components/Navigation/Navbar/Buttons/Navbar";
import Dashboard from "src/pages/Dashboard";
import Login from "src/pages/Login/Login";
import Register from "src/pages/Login/Login";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          {window.location.pathname !== "/login" && <Navbar />}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
