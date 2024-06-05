import React from "react";
import Divider from "@mui/material/Divider";
import "boxicons";
import { useState } from "react";
import { useAuth } from "./../../AuthContext";
import registerUnidad from "../../../api/admin/adminRegis.js";
import { useAlert } from "./../../AlertContext.jsx";
import GlobalAlert from "./../../GlobalAlert.jsx";

function AddForm({ isEnable, setIsVisible }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [granurality, setGranurality] = useState("");
  const [alertType, setAlertType] = useState("");
  const { token } = useAuth();
  const { setOpen } = useAlert();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUnidad(
        userName,
        password,
        granurality,
        token
      );
      if (response.data) {
        setAlertType(response);
        console.log("Response unidad add: " + response);
      } else {
        console.log("Response unidad add: " + response);
        setAlertType(response);
      }

      setOpen(true);
    } catch (e) {
      console.error(e);
    }
    setUserName("");
    setPassword("");
    setGranurality("");
  };

  const handleClose = () => {
    setIsVisible(false);
  };
  return (
    <div
      className={
        isEnable ? "form-generic visible" : "form-generic close hidden"
      }
    >
      <GlobalAlert type={alertType} />
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="header-container">
          <span className="close-icon">
            <i className="bx bx-x" onClick={handleClose}></i>
          </span>
          <h3> Agregar Unidad</h3>
          <Divider />
        </div>
        <div className="item-container">
          <label htmlFor="nombre-unidad">Nombre de Unidad</label>
          <input
            id="nombre-unidad"
            type="text"
            value={userName}
            required
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div>
        <div className="item-container">
          <label htmlFor="nombre-unidad">Contraseña</label>
          <input
            id="nombre-unidad"
            type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div className="item-container">
          <label htmlFor="granuralidad-unidad">Granuralidad</label>
          <input
            id="granuralidad-unidad"
            type="text"
            value={granurality}
            required
            onChange={(e) => setGranurality(e.target.value)}
          ></input>
        </div>
        <button className="generic-button">Enviar</button>
      </form>
    </div>
  );
}

export default AddForm;
