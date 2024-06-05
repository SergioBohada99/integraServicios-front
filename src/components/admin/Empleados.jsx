import React, { useState } from "react";
import "../Dashboard.css";
import Emply_lista from "./employee_elements/Emply_lista.jsx";
import "boxicons";
import Emply_fab from "./employee_elements/Emply_fab.jsx";
import Emply_add from "./employee_elements/Emply_add.jsx";

function Empleados() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="contenido_unidad">
      <Emply_add isEnable={isVisible} setIsVisible={setIsVisible} />
      <Emply_fab setIsVisible={setIsVisible} />
      <div className="unidad_lista">
        <Emply_lista />
      </div>
    </div>
  )
}

export default Empleados