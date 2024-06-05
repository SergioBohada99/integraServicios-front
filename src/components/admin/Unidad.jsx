import React, { useState } from "react";
import "../Dashboard.css";
import Unidad_lista from "./unidad_elements/Unidad_lista.jsx";
import "boxicons";
import FabMenu from "./unidad_elements/FabMenu.jsx";
import AddForm from "./unidad_elements/AddForm.jsx";

function Unidad() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="contenido_unidad">
      <AddForm isEnable={isVisible} setIsVisible={setIsVisible} />
      <FabMenu setIsVisible={setIsVisible} />
      <div className="unidad_lista">
        <Unidad_lista />
      </div>
    </div>
  );
}

export default Unidad;
