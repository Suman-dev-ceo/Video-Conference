import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import httpStatus from "http-status";
import server from "../../environment";

export const AuthContext = createContext({});
const client = axios.create({
  baseURL: `${server}/api/v1/users`,
});

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  const [userData, setUserData] = useState(authContext);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
      // You might want to fetch user data here if needed
      setUserData({ token }); // Set basic user data
    }
  }, []);

  const handleRegister = async (name, username, password) => {
    try {
      let request = await client.post("/register", {
        name,
        username,
        password,
      });
      if (request.status === httpStatus.CREATED) {
        // Automatically log the user in after registration
        await handleLogin(username, password);
        return request.data.message;
      }
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    }
  };

  const handleLogin = async (username, password) => {
    try {
      let request = await client.post("/login", {
        username,
        password,
      });
      if (request.status === httpStatus.OK) {
        localStorage.setItem("token", request.data.token);
        setUserData({
          token: request.data.token,
          username: username,
        });
        setIsAuthenticated(true);

        // Redirect to home after successful login
        router("/home");
        return request.data;
      }
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUserData(null);
    setIsAuthenticated(false);
    navigate("/auth");
  };

  const getHistoryofUser = async () => {
    try {
      const token = localStorage.getItem("token");
      let request = await client.get("/get_all_activity", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return request.data;
    } catch (err) {
      throw err;
    }
  };

  const addToUserHistory = async (meetingCode) => {
    try {
      const token = localStorage.getItem("token");
      let request = await client.post(
        "/add_to_activity",
        {
          meeting_code: meetingCode,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return request;
    } catch (e) {
      throw e;
    }
  };

  const data = {
    userData,
    setUserData,
    handleRegister,
    isAuthenticated,
    handleLogin,
    handleLogout,
    getHistoryofUser,
    addToUserHistory,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
