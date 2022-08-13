import axios from "axios";

const API_URL = "/api/auth";

// Login user
const login = async (userData: any) => {
  const response = await axios.post(`${API_URL}/login`, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(userData));
    console.log("Setting user to", userData);
  }

  return response.data;
};

// Logout user
const logout = async () => {
  localStorage.removeItem("user");
};

const authService = {
  logout,
  login,
};

export default authService;
