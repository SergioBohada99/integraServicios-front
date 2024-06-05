import React, { useState } from "react";
import Divider from "@mui/material/Divider";
import "boxicons";
import { useAuth } from "../../../AuthContext.jsx";
import regisResType from "../../../../api/unidad_servicios/regisResType.js";
import { useAlert } from "../../../AlertContext.jsx";
import GlobalAlert from "../../../GlobalAlert.jsx";

function ResTypeAdd({ isEnable, setIsVisible }) {
  const [name, setName] = useState("");
  const [features, setFeatures] = useState([{ name: "", type: "" }]);
  const [alertType, setAlertType] = useState("");
  const { token } = useAuth();
  const { setOpen } = useAlert();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await regisResType(name, features, token);
      if (response.data) {
        setAlertType(response.data);
        console.log("Response resource type: " + response);
      } else {
        console.log("Response  resource type: " + response);
        setAlertType(response);
      }
      setOpen(true);
    } catch (e) {
      console.error(e);
    }
    setName("");
    setFeatures([{ name: "", type: "" }]);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleAddFeature = () => {
    setFeatures([...features, { name: "", type: "" }]);
  };

  const handleFeatureChange = (index, field, value) => {
    const newFeatures = [...features];
    newFeatures[index][field] = value;
    setFeatures(newFeatures);
  };

  return (
    <div
      className={
        isEnable ? "form-generic visible" : "form-generic close hidden"
      }
    >
      <GlobalAlert type={alertType} />
      <form onSubmit={handleSubmit}>
        <div className="header-container">
          <span className="close-icon">
            <i className="bx bx-x" onClick={handleClose}></i>
          </span>
          <h3> Agregar tipo de recurso</h3>
          <Divider />
        </div>
        <div className="item-container">
          <label htmlFor="nombre-tipo">Nombre del tipo de recurso </label>
          <input
            id="nombre-tipo"
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        {features.map((feature, index) => (
          <div className="item-container" key={index}>
            <label htmlFor={`feature-name-${index}`}>
              Nombre de característica
            </label>
            <input
              id={`feature-name-${index}`}
              type="text"
              value={feature.name}
              required
              onChange={(e) =>
                handleFeatureChange(index, "name", e.target.value)
              }
            ></input>
            <select
              className="default-select"
              value={feature.type}
              required
              onChange={(e) =>
                handleFeatureChange(index, "type", e.target.value)
              }
            >
              <option value="" disabled>
                Tipo de característica
              </option>
              <option value="STRING">Texto</option>
              <option value="NUMBER">Numero</option>
              <option value="BOOLEAN">Sí o no</option>
            </select>
          </div>
        ))}
        <div className="item-container">
          <i
            className="add-more-icon bx bxs-plus-circle"
            onClick={handleAddFeature}
          ></i>
        </div>
        <button className="generic-button" type="submit" onClick={handleSubmit}>
          Enviar
        </button>
      </form>
    </div>
  );
}

export default ResTypeAdd;
