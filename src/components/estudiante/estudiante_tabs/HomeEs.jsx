import React from "react";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import "boxicons";


function HomeEs() {
  return (
    <div className="home-container">
      <div className="home-text">
        <div>
          <h1>Bienvenido a IntegraServicios</h1>
          <h3>Panel de usuario</h3>
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
          En la pestaña de Recursos puedes consultar los recursos disponibles y reservarlos si deseas.
          </p>
        </div>
        <div>
          <Divider sx={{ fontSize: "20px", fontWeight: "600" }}>
            Reservas
          </Divider>
          <p>
          En la pestaña de Reservas puedes consultar tus reservas vigentes y hacer cambios si deseas.
          </p>
          <Divider sx={{ marginTop: "20px" }} />
        </div>
      </div>
      <div className="home-element">
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
  );
}

export default HomeEs;
