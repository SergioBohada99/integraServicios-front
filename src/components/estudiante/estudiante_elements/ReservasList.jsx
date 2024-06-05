import React, { useState,useEffect } from "react";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import Table from "@mui/joy/Table";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import { useAuth } from "./../../AuthContext.jsx";
import getReservas from '../../../api/users/consultas/consultarReservas.js'

function ReservasList() {
  
  const { token } = useAuth();
  const [listStatus, setListStatus] = useState(false);
  const [rows, setRows] = useState([]);
  function createData(name, gran, facultad) {
    return { name, gran, facultad };
  }

  useEffect(()=>{
    getReservas(token).then(data => {
      if(data.success) {
        const newRows = data.data.map(res => createData(res.resourceName, res.employeeName,res.reservationDate))
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
          {["Dashboard", "Reservas"].map((item) => (
            <Link key={item} color="neutral" href="#basics">
              {item}
            </Link>
          ))}
        </Breadcrumbs>
        <h1>Mis reservas</h1>
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
                Nombre del recurso
              </th>
              <th
                style={{
                  width: "40%",
                  backgroundColor: "#F6F5FF",
                  color: "#3f3f3f",
                }}
              >
                Empleado asignado
              </th>
              <th
                style={{
                  width: "40%",
                  backgroundColor: "#F6F5FF",
                  color: "#3f3f3f",
                }}
              >
                Fecha de reserva
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
  )
}

export default ReservasList