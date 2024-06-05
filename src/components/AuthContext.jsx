import React from "react";
import { createContext, useState, useContext } from "react";
import axios from "../api/axios.js";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  let LOGIN_URL = "api/auth/login";

  const [token, setToken] = useState(null);
  const [rol, setRol] = useState(null);

  const login = (userName, password) => {
    return axios
      .post(LOGIN_URL, {
        "username":userName,
        "password":password,
      })
      .then((response) => {
        if (response.data.success) {
          setToken(response.data.data.token);
          setRol(response.data.data.rol);
          localStorage.setItem("token", JSON.stringify(response.data.data.token));
          localStorage.setItem("rol", JSON.stringify(response.data.data.rol));
          console.log("login resonse"+response+"login response data"+response.data)
        }
        return response.data;
      }).catch((e) => {
        console.log("Response error: "+e)
        return e.message;
      });
  };


  const logout = () => {
    localStorage.clear();
    setToken(null);
    setRol(null);
  };


  return (
    <AuthContext.Provider value={{ token, login, logout,setToken,rol,setRol }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
