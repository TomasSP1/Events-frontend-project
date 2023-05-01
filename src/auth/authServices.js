import axios from "axios";

const API_URL = "/api/users/";

// Registering User
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    const { token, role } = response.data;
    const user = { token, role };
    localStorage.setItem("user", JSON.stringify(user));
  }

  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

  if (response.data) {
    const { token, role } = response.data;
    const user = { token, role };
    localStorage.setItem("user", JSON.stringify(user));
  }

  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem("user");
};

const authServices = {
  register,
  logout,
  login,
};

export default authServices;
