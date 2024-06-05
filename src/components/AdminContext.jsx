import React from "react";
import { createContext, useState, useContext } from "react";
import axios from "../api/axios.js";

const AdminContext = createContext();
export const AdminProvider = ({ children }) => {

const registerUnidad = () => {

}
  

  return (
    <AdminContext.Provider value={{registerUnidad}}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAuth = () => useContext(AdminContext);
