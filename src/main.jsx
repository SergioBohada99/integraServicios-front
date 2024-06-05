import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./components/AuthContext.jsx";
import { AlertProvider } from "./components/AlertContext.jsx";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import {DateProvider} from './components/DateFormaterContext.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <AlertProvider>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateProvider>
              <App />
            </DateProvider>
          </LocalizationProvider>
        </AlertProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
