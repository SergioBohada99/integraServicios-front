import React, {useState} from "react";
import "../Dashboard.css";
import "boxicons";
import Disponibilidad from './unidad_tabs/Disponibilidad.jsx'
import EmpleadosUn from './unidad_tabs/EmpleadosUn.jsx'
import RecursosUn from './unidad_tabs/RecursosUn.jsx'
import AyudaUn from './unidad_tabs/AyudaUn.jsx'
import HomeUn from './unidad_tabs/HomeUn.jsx'
import NavbarUn from "./NavbarUn.jsx";

function DashboardUn() {
  const [sidebarState, setSidebarState] = useState(false);
  const [currentComp, setCurrentComp] = useState(null);

  return (
    <div className="main-container">
      <NavbarUn sidebarState={sidebarState} setSidebarState={setSidebarState} setCurrentComp={setCurrentComp}  />
      <div
        className={sidebarState ? "contend-display" : "contend-display close"}
      >
        {currentComp === "Disponibilidad" ? (
          <Disponibilidad/>
        ) : currentComp === "Recursos" ? (
          <RecursosUn />
        ) : currentComp === "Empleados" ? (
          <EmpleadosUn />
        ) : (
          currentComp === "Ayuda" ? <AyudaUn/> :  (<HomeUn />)
        )}
      </div>
    </div>
  );
}

export default DashboardUn;
