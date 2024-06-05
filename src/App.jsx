import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login.jsx";
import Dashboard from "./components/admin/Dashboard.jsx";
import DashboardEs from "./components/estudiante/DashboardEs.jsx";
import DashboardEm from "./components/empleado/DashboardEm.jsx";
import DashboardUn from "./components/unidad/DashboardUn.jsx";
import { useAuth } from "./components/AuthContext.jsx";
import { useEffect,useState } from "react";

function App() {
  const { token, setToken, setRol, rol } = useAuth();
  const [pathUrl, setPathUrl] = useState("");
  useEffect(() => {
    try {
      let tokenLocal = JSON.parse(localStorage.getItem("token"));
      let rolLocal = JSON.parse(localStorage.getItem("rol"));
      if (tokenLocal && rolLocal) {
        setToken(tokenLocal);
        setRol(rolLocal);
        setPathUrl(rolLocal.toLowerCase());
        console.log(
          "El token y rol fué encontrado en Localstorage y fue guardado" +
            token +
            rol
        );
      } else {
        console.log("Token no encontrado en Localstorage");
      }
    } catch (e) {
      console.error("Error al buscar token en local storage" + e);
    }

    return () => {};
  }, []);

  return (
    <>
      {
        <Routes>
          <Route
            path={"/"}
            element={
              token ? (
                rol === "ADMINISTRATOR" ? (
                  <Dashboard />
                ) : rol === "STUDENT" ? (
                  <DashboardEs />
                ) : rol === "UNIT" ? (
                  <DashboardUn />
                ) : rol === "EMPLOYEE" ? (
                  <DashboardEm />
                ) : (
                  <Login />
                )
              ) : (
                <Login />
              )
            }
          />
        </Routes>
      }
    </>
  );
}

export default App;
