import React from "react";
import Divider from '@mui/joy/Divider';

function AyudaUn() {
  return (
    <div className="ayuda">
      <div className="ayuda-info">
        <div className="ayuda-header">
          <h3>Universidad Distrital Francisco José de Caldas</h3>
          <h4>Fundamentos de Ingenieria de Software</h4>
          <h4>Docente: Santiago Salazar Fajardo</h4>
          <Divider sx={{ marginTop: 1 }} />
        </div>
        <div className="ayuda-estudiante">
          <p>Briyid Catalina Cruz Ostos</p>
          <p>Correo Institucional: bccruzo@udistrital.edu.co</p>
        </div>
        <div className="ayuda-estudiante">
          <p>María Fernanda Pérez Hernández </p>
          <p>Correo Institucional: mafperezh@udistrital.edu.co </p>
        </div>
        <div className="ayuda-estudiante">
          <p>Brayan Elian Peña Jaimes </p>
          <p>Correo Institucional: brepenaj@udistrital.edu.co</p>
        </div>
        <div className="ayuda-estudiante">
          <p>Sergio David Bohada Vargas </p>
          <p>Correo Institucional: sdbohadav@udistrital.edu.co </p>
        </div>
      </div>
    </div>
  );
}

export default AyudaUn;
