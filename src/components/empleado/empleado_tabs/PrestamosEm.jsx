import React, { useState } from "react";
import PrestList from "../prestamos_elements/PrestList.jsx";
import Divider from "@mui/material/Divider";
import { useAlert } from "../../AlertContext.jsx";
import { useAuth } from "../../AuthContext.jsx";
import GlobalAlert from "../../GlobalAlert.jsx";
import prestarRecurso from "../../../api/empleado/prestarRecurso.js";
import devolverRecurso from "../../../api/empleado/devolverRecurso.js";

function PrestamosEm() {
  const { setOpen } = useAlert();
  const [alertType, setAlertType] = useState("");
  const { token } = useAuth();
  const [id, setID] = useState();
  const [idDe, setIDDe] = useState();
  const handleSumbit = (e) => {
    e.preventDefault();
      prestarRecurso(id, token)
        .then((response) => {
          console.log("HOLA",response)
          setAlertType(response.data)
          setOpen(true);
        })
        .catch((err) => {
          console.error(err);
        });

  };
  const handleSumbitDis = (e) => {
    e.preventDefault();
      devolverRecurso(idDe, token)
        .then((response) => {
          setAlertType(response.data)
          setOpen(true);
        })
        .catch((err) => {
          console.error(err);
        });

  };
  return (
    <div className="contenido_unidad">
      <GlobalAlert type={alertType} />
      <div className="empleado_lista">
        <PrestList />
        <Divider sx={{ marginBottom: "25px" }} />
        <form onSubmit={handleSumbit}>
          <div className="item-container">
            <label htmlFor="nombre-tipo">ID del recurso</label>
            <input
              id="nombre-tipo"
              type="number"
              className="generic-input"
              required
              onChange={(e) => setID(e.target.value)}
            ></input>
          </div>
          <button
            className="generic-button"
            type="submit"
            onClick={handleSumbit}
          >
            Prestar
          </button>
        </form>
        <form onSubmit={handleSumbit}>
          <div className="item-container">
            <label htmlFor="nombre-tipo">ID del recurso</label>
            <input
              id="nombre-tipo"
              type="number"
              className="generic-input"
              required
              onChange={(e) => setIDDe(e.target.value)}
            ></input>
          </div>
          <button
            className="generic-button"
            type="submit"
            onClick={handleSumbitDis}
          >
            Disponible
          </button>
        </form>
      </div>
    </div>
  );
}

export default PrestamosEm;
