import React, { useState, useEffect } from "react";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import Table from "@mui/joy/Table";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import getRecursosDisp from "../../../api/users/consultas/consultarRecursosDisp.js";
import { useAuth } from "./../../AuthContext.jsx";


function RecursosList() {
  const { token } = useAuth();
  const [listStatus, setListStatus] = useState(false);
  const [rows, setRows] = useState([]);
  function createData(name, unidad, estado, id) {
    return { name, unidad, estado, id };
  }

  useEffect(() => {
    getRecursosDisp(token)
      .then((data) => {
        if (data.success) {
          const newRows = data.data.map((resource) =>
            createData(resource.name, resource.serviceUnitName, resource.status, resource.id)
          );
          setRows(newRows);
        }
      })
      .catch((err) => {
        console.error("error al poblar lista", err);
      });
  }, [listStatus]);

  const refresList = () => {
    setListStatus(!listStatus);
  };
  return     <div className="unidad_lista">
  <Typography
    fontFamily="Poppins"
    sx={{
      color: "#3f3f3f",
    }}
  >
    <Breadcrumbs
      aria-label="breadcrumbs"
      size="md"
      separator="›"
      sx={{
        fontFamily: "Poppins",
        my: "2vh",
      }}
    >
      {["Dashboard", "Recursos"].map((item) => (
        <Link key={item} color="neutral" href="#basics">
          {item}
        </Link>
      ))}
    </Breadcrumbs>
    <h1>Recursos disponibles</h1>
    <Table
      hoverRow
      size="lg"
      variant="plain"
      sx={{
        border: 0.5,
        boxShadow: 3,
        borderRadius: 10,
        borderColor: "#707070",
        fontFamily: "Poppins",
        my: "2vh",
        font: "#515151",
        color: "#707070",
      }}
    >
      <thead>
        <tr>
          <th
            style={{
              width: "40%",
              backgroundColor: "#F6F5FF",
              color: "#3f3f3f",
            }}
          >
            Recurso
          </th>
          <th
            style={{
              width: "40%",
              backgroundColor: "#F6F5FF",
              color: "#3f3f3f",
            }}
          >
           Unidad de Servicio
          </th>
          <th
            style={{
              width: "40%",
              backgroundColor: "#F6F5FF",
              color: "#3f3f3f",
            }}
          >
           Estado
          </th>
          <th
            style={{
              width: "40%",
              backgroundColor: "#F6F5FF",
              color: "#3f3f3f",
            }}
          >
           ID
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.name}>
            <td>{row.name}</td>
            <td>{row.unidad}</td>
            <td>{row.estado}</td>
            <td>{row.id}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  </Typography>
  <button className="generic-button" onClick={refresList}>
    Recargar lista
  </button>
</div>;
}

export default RecursosList;
