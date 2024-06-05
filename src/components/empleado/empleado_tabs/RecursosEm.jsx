import React, { useState } from "react";
import  AddRes  from "../recursos_elements/AddRes.jsx";
import  FabMenuRes  from "../recursos_elements/FabMenuRes.jsx";
import  ResList  from "../recursos_elements/ResList.jsx";

function RecursosEm() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="contenido_unidad">
    <AddRes isEnable={isVisible} setIsVisible={setIsVisible} />
    <FabMenuRes setIsVisible={setIsVisible} />
    <div className="unidad_lista">
      <ResList />
    </div>
  </div>
  )
}

export default RecursosEm