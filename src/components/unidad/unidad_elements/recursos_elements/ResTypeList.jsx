import React, { useState, useEffect } from "react";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import Table from "@mui/joy/Table";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import getTiposRecursos from "../../../../api/unidad_servicios/consulta/consultarTiposRec.js";
import { useAuth } from "./../../../AuthContext.jsx";

function ResTypeList() {
  const { token } = useAuth();
  const [listStatus, setListStatus] = useState(false);
  const [rows, setRows] = useState([]);
  function createData(name, id, unitName) {
    return { name, id, unitName };
  }

  useEffect(() => {
    getTiposRecursos(token)
      .then((data) => {
        if (data.success) {
          const newRows = data.data.map((resource) =>
            createData(resource.name, resource.id, resource.serviceUnitName)
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
  return (
    <div className="unidad_lista">
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
        <h1>Tipos de recurso</h1>
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
                Tipo
              </th>
              <th
                style={{
                  width: "40%",
                  backgroundColor: "#F6F5FF",
                  color: "#3f3f3f",
                }}
              >
                ID única asociada
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
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.name}>
                <td>{row.name}</td>
                <td>{row.id}</td>
                <td>{row.unitName}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Typography>
      <button className="generic-button" onClick={refresList}>
        Recargar lista
      </button>
    </div>
  );
}

export default ResTypeList;
