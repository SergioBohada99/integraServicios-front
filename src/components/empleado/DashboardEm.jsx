import React, { useState } from "react";
import "../Dashboard.css";
import "boxicons";
import NavbarEm from "./NavbarEm.jsx";
import RecursosEm from "./empleado_tabs/RecursosEm.jsx";
import AyudaEm from "./empleado_tabs/AyudaEm.jsx";
import RerservasEm from "./empleado_tabs/RerservasEm.jsx";
import HomeEm from "./empleado_tabs/HomeEm.jsx";

function DashboardEm() {
  const [sidebarState, setSidebarState] = useState(false);
  const [currentComp, setCurrentComp] = useState(null);
  return (
    <div className="main-container">
      <NavbarEm
      sidebarState={sidebarState}
        setSidebarState={setSidebarState}
        setCurrentComp={setCurrentComp}
      />
      <div
        className={sidebarState ? "contend-display" : "contend-display close"}
      >
        {currentComp === "Recursos" ? (
          <RecursosEm />
        ) : currentComp === "Reservas" ? (
          <RerservasEm />
        ) : currentComp === "Ayuda" ? (
          <AyudaEm />
        ) : (
          <HomeEm />
        )}
      </div>
    </div>
  );
}

export default DashboardEm;
