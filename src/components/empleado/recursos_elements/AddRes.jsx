import React, { useState, useEffect } from "react";
import Divider from "@mui/material/Divider";
import "boxicons";
import { useAuth } from "../../AuthContext.jsx";
import regisResource from "../../../api/empleado/regisResource.js";
import { useAlert } from "../../AlertContext.jsx";
import GlobalAlert from "../../GlobalAlert.jsx";
import getTipos from "../../../api/empleado/consulta/consultaTiposRec.js";
import getResFeatures from "../../../api/empleado/consulta/consultaRecursoFeatures.js";

function AddRes({ isEnable, setIsVisible }) {
  const [alertType, setAlertType] = useState("");
  const { token } = useAuth();
  const { setOpen } = useAlert();
  const [rows, setRows] = useState([]);
  const [fechedFeatures, setFechedFeatures] = useState([]);
  const [emplData, setEmplData] = useState({
    name: "",
    typeId: "",
    selectedType: "",
    features: [],
  });

  function createData(tipo, id) {
    return { tipo, id };
  }

  useEffect(() => {
    getTipos(token)
      .then((data) => {
        console.log("data traida", data);
        if (data.success) {
          const newRows = data.data.map((res) => createData(res.name, res.id));
          setRows(newRows);
        }
      })
      .catch((err) => console.error("Error al consultar unidades", err));
    console.log("Rsultado de consultas", emplData);
  }, []);

  useEffect(() => {
    getResFeatures(emplData.selectedType, token)
      .then((response) => {
        setFechedFeatures(response.data);
        console.log(
          "Res features response y asignación a emlData",
          fechedFeatures
        );
      })
      .catch((err) => {
        console.error("Error getting features", err);
      });
  }, [emplData.selectedType]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      regisResource(emplData.name, emplData.typeId, emplData.features, token).then(response => setAlertType(response))
      setOpen(true);
    } catch (e) {
      console.error(e);
    }

    console.log("Sumbit - emp", emplData);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleSelect = (e) => {
    const option = e.target.options[e.target.selectedIndex];
    const id = e.target.value;
    const selectedVal = option.getAttribute("data-name");
    setEmplData({ ...emplData, typeId: id, selectedType: selectedVal });
  };

  const handleFeatureChange = (index, value) => {
    const updatedFeatures = emplData.features.map((feature, i) => {
      if (i === index) {
        return {
          ...feature,
          value: value,
          id: fechedFeatures[index].id // Asigna el ID correspondiente al feature
        };
      }
      return feature;
    });
    setEmplData({ ...emplData, features: updatedFeatures });
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
          <h3> Agregar recurso</h3>
          <Divider />
        </div>
        <div className="item-container">
          <label htmlFor="nombre-tipo">Nombre del recurso </label>
          <input
            id="nombre-tipo"
            type="text"
            value={emplData.name}
            required
            onChange={(e) => setEmplData({ ...emplData, name: e.target.value })}
          ></input>
        </div>
        <div className="item-container">
          <label for="pass-empleado">Tipos de recurso</label>
          <select className="default-select" onChange={(e) => handleSelect(e)}>
            {rows.map((row, index) => (
              <option key={index} value={row.id} data-name={row.tipo}>
                {row.tipo}
              </option>
            ))}
          </select>
        </div>

        {fechedFeatures &&
          fechedFeatures.map((feature, index) => (
            <div className="item-container" key={index}>
              <label htmlFor={feature.name}>{feature.name}</label>
              <input
                type="text"
                required
                onChange={(e) => handleFeatureChange(index, e.target.value)}
              />
            </div>
          ))}

        <button className="generic-button" type="submit" onClick={handleSubmit}>
          Enviar
        </button>
      </form>
    </div>
  );
}

export default AddRes;
