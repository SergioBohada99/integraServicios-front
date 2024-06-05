import React, { useState,useEffect } from 'react'
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import Table from '@mui/joy/Table';
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import getEmpleados from '../../../api/admin/consulta/consultaEmpleados.js'
import { useAuth } from "./../../AuthContext";


function Emply_lista() {

  const { token } = useAuth();
  const [listStatus, setListStatus] = useState(false);
  const [rows, setRows] = useState([]);
  function createData(name, lastname, unidad) {
    return { name, lastname, unidad };
  }

  useEffect(()=>{
    getEmpleados(token).then(data => {
      if(data.success) {
        const newRows = data.data.map(user => createData(user.firstName,user.middleName, user.serviceUnit.username))
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
        {["Dashboard", "Usuarios"].map((item) => (
          <Link key={item} color="neutral" href="#basics">
            {item}
          </Link>
        ))}
      </Breadcrumbs>
      <h1>Usuarios registrados</h1>
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
              Nombre
            </th>
            <th
              style={{
                width: "40%",
                backgroundColor: "#F6F5FF",
                color: "#3f3f3f",
              }}
            >
              Apellido
            </th>
            <th
              style={{
                width: "40%",
                backgroundColor: "#F6F5FF",
                color: "#3f3f3f",
              }}
            >
              Codigo
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name}>
              <td>{row.name}</td>
              <td>{row.lastname}</td>
              <td>{row.unidad}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Typography>
    <button className="generic-button" onClick={refresList}>Recargar lista</button>
  </div>
  )
}

export default Emply_lista