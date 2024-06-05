import React from "react";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import "boxicons";


function HomeEm() {
  return (
    <div className="home-container">
    <div className="home-text">
      <div>
        <h1>Bienvenido a IntegraServicios</h1>
        <h3>Panel de empleado</h3>
        <Divider sx={{ width: "40%" }} />
      </div>
    </div>
    <div className="home-element">
      <div>
        <Divider
          sx={{ marginTop: "-18px", fontSize: "20px", fontWeight: "600" }}
        >
          Recursos
        </Divider>
        <p>
        En la pestaña de Recursos, puedes registrar los recursos disponibles en la unidad a la que perteneces y además consultar los recursos disponibles más reservados.
        </p>
      </div>
      <div>
        <Divider sx={{ fontSize: "20px", fontWeight: "600" }}>
          Prestamos
        </Divider>
        <p>
        En la pestaña de prestamos puedes consultar las reservas vigentes por parte de los usuarios y prestar el recurso sí es necesario.
        </p>
        <Divider sx={{ marginTop: "20px" }} />
      </div>
    </div>
    <div className="home-element">
    <div>
        <Divider sx={{ fontSize: "20px", fontWeight: "600" }}>Solicitudes</Divider>
        <p>
        En la pestaña de Solicitudes, podrás mirar y aceptar las solicitudes de devolución vigentes
        </p>
        <Divider sx={{ marginTop: "20px" }} />
      </div>
      <div>
        <Divider sx={{ fontSize: "20px", fontWeight: "600" }}>Ayuda</Divider>
        <p>
          En la pestaña de ayuda podras explorar los contactos de soporte en
          caso de algun fallo en la aplicación
        </p>
        <Divider sx={{ marginTop: "20px" }} />
      </div>
    </div>
  </div>
  )
}

export default HomeEm