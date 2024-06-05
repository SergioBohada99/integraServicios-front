import React from "react";
import "../Dashboard.css";
import "boxicons";
import { useState } from "react";
import Navbar from "./Navbar.jsx";
import Unidad from "./Unidad.jsx";
import Home from "./Home.jsx";
import Usuarios from "./Usuarios.jsx";
import Empleados from "./Empleados.jsx";
import Ayuda from "./Ayuda.jsx";

function Dashboard() {
  const [sidebarState, setSidebarState] = useState(false);
  const [currentComp, setCurrentComp] = useState(null);

  return (
    <div className="main-container">
      <Navbar sidebarState={sidebarState} setSidebarState={setSidebarState} setCurrentComp={setCurrentComp} />
      <div
        className={sidebarState ? "contend-display" : "contend-display close"}
      >
        {currentComp === "Unidad" ? (
          <Unidad/>
        ) : currentComp === "Usuarios" ? (
          <Usuarios />
        ) : currentComp === "Empleados" ? (
          <Empleados />
        ) : (
          currentComp === "Ayuda" ? <Ayuda/> :  (<Home />)
        )}
      </div>
    </div>
  );
}

export default Dashboard;
