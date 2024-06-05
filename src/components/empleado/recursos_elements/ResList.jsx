import React, { useState, useEffect } from "react";
import getMasPrestado from "../../../api/empleado/consulta/recursoMasPrestado.js";
import { useAuth } from "./../../AuthContext.jsx";
import Divider from "@mui/material/Divider";

function ResList() {
  const [resource, setResource] = useState();
  const { token } = useAuth();

  useEffect(() => {
    getMasPrestado(token)
      .then((data) => {
        console.log("ME LO TRAJE DE ALLÁ TAMBIÉN", data);
        if (data.success) {
          setResource(data.data);
          console.log("ME LO TRAJE DE ALLÁ", data);
        }
      })
      .catch((err) => {
        console.error("error al poblar lista", err);
      });
  });

  return (
    <div className="most-reserved">
      <h1>Recurso más prestado</h1>
      <div><p>{resource}</p></div>
    </div>
  );
}

export default ResList;
