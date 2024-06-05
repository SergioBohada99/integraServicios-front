import React from "react";
import "boxicons";

function FabMenu({setIsVisible}) {
  const handleAdd = () => {
    setIsVisible(true)
  }
  return (
    <div className="floating-container">
      <div className="floating-button">+</div>
      <div className="element-container">
        <span className="float-element" onClick={handleAdd}>
        <i class='bx bxs-layer-plus' ></i>
        </span>
        <span className="float-element">
        <i class='bx bxs-layer-minus'></i>
        </span>
      </div>
    </div>
  );
}

export default FabMenu;
