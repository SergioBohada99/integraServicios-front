import React, { useState } from "react";
import  ResTypeAdd  from "../unidad_elements/recursos_elements/ResTypeAdd.jsx";
import  ResTypeFab  from "../unidad_elements/recursos_elements/ResTypeFab.jsx";
import  ResTypeList  from "../unidad_elements/recursos_elements/ResTypeList.jsx";

function RecursosUn() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="contenido_unidad">
    <ResTypeAdd isEnable={isVisible} setIsVisible={setIsVisible} />
    <ResTypeFab setIsVisible={setIsVisible} />
    <div className="unidad_lista">
      <ResTypeList />
    </div>
  </div>
  )
}

export default RecursosUn