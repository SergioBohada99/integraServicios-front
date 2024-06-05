import React, { useState, createContext, useContext } from "react";
import { format } from "date-fns";


const DateContext = createContext();

export const DateProvider = ({ children }) => {

  function formatDateUnidad(date) {
    return format(date, "dd/MM/yyyy")
  }

  function formatTimeUnidad(time) {
    return format(time, "HH:mm") 
  }

  return (
    <DateContext.Provider value={{ formatDateUnidad, formatTimeUnidad }}>
      {children}
    </DateContext.Provider>
  );
};
export const useDate = () => useContext(DateContext);
