import React, { useState } from "react";
import "../Dashboard.css";
import "boxicons";
import AyudaEs from "./estudiante_tabs/AyudaEs.jsx";
import HomeEs from "./estudiante_tabs/HomeEs.jsx";
import RecursosEs from "./estudiante_tabs/RecursosEs.jsx";
import ReservasEs from "./estudiante_tabs/ReservasEs.jsx";

import NavbarEs from "./NavbarEs.jsx";

function DashboardEs() {
  const [sidebarState, setSidebarState] = useState(false);
  const [currentComp, setCurrentComp] = useState(null);

  return (
    <div className="main-container">
      <NavbarEs
        sidebarState={sidebarState}
        setSidebarState={setSidebarState}
        setCurrentComp={setCurrentComp}
      />
      <div
        className={sidebarState ? "contend-display" : "contend-display close"}
      >
        {currentComp === "Recursos" ? (
          <RecursosEs />
        ) : currentComp === "Reservas" ? (
          <ReservasEs />
        ) : currentComp === "Ayuda" ? (
          <AyudaEs />
        ) : (
          <HomeEs />
        )}
      </div>
    </div>
  );
}

export default DashboardEs;
