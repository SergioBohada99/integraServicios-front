import React, { useState,useEffect } from "react";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import Table from "@mui/joy/Table";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import { useAuth } from "./../../AuthContext";
import getUnidades from '../../../api/admin/consulta/consultaUnidades.js'

function unidad_lista() {

  const { token } = useAuth();
  const [listStatus, setListStatus] = useState(false);
  const [rows, setRows] = useState([]);
  function createData(name, gran, facultad) {
    return { name, gran, facultad };
  }

  useEffect(()=>{
    getUnidades(token).then(data => {
      if(data.success) {
        const newRows = data.data.map(unit => createData(unit.username, unit.granularityInMinutes,'Ingenieria'))
        setRows(newRows)
    }}).catch(err => {
      console.error('error al poblar lista',err)
    });
  },[listStatus])

  const refresList = () =>{
    setListStatus(!listStatus)
  }

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
          {["Dashboard", "Unidades de servicio"].map((item) => (
            <Link key={item} color="neutral" href="#basics">
              {item}
            </Link>
          ))}
        </Breadcrumbs>
        <h1>Unidades de servicio</h1>
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
                Nombre de unidad
              </th>
              <th
                style={{
                  width: "40%",
                  backgroundColor: "#F6F5FF",
                  color: "#3f3f3f",
                }}
              >
                Granuralidad
              </th>
              <th
                style={{
                  width: "40%",
                  backgroundColor: "#F6F5FF",
                  color: "#3f3f3f",
                }}
              >
                Facultad
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.name}>
                <td>{row.name}</td>
                <td>{row.gran}</td>
                <td>{row.facultad}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Typography>
      <button className="generic-button" onClick={refresList}>Recargar lista</button>
    </div>
  );
}

export default unidad_lista;
