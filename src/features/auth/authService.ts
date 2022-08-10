import axios from "axios";

const API_URL = "/api/auth/";

// Register user
const register = async (userData: any) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(userData));
  }

  return response.data;
};

// Login user
const login = async (userData: any) => {
  const response = await axios.post(`${API_URL}login`, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(userData));
  }

  return response.data;
};

// Logout user
const logout = async () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
