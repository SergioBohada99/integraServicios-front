import React from "react";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import "boxicons";

function Home() {
  return (
    <div className="home-container">
      <div className="home-text">
        <div>
          <h1>Bienvenido a IntegraServicios</h1>
          <h3>Panel de administración</h3>
          <Divider sx={{width: '40%'}}/>
        </div>
      </div>
      <div className="home-element">
        <div>
          <Divider sx={{ marginTop: "-18px", fontSize: "20px", fontWeight: "600" }}>
            Unidades de Servicio
          </Divider>
          <p>
            En la pestaña de Unidades de Servico podrás agregar usuarios para
            cada unidad existente en la institución
          </p>
        </div>
        <div>
          <Divider sx={{ fontSize: "20px", fontWeight: "600" }}>
            Usuarios
          </Divider>
          <p>
            En la pestaña de Usuarios podras agregar a estudiantes y invitados
            asociados a la institución
          </p>
          <Divider sx={{ marginTop: "20px" }} />
        </div>
      </div>
      <div className="home-element">
        <div>
          <Divider sx={{ marginTop: "-18px", fontSize: "20px", fontWeight: "600" }}>
            Empleados
          </Divider>
          <p>
            En la pestaña de Empleados podras agregar los funcionarios asociados
            a cada Unidad existente en la institución
          </p>
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
  );
}

export default Home;
