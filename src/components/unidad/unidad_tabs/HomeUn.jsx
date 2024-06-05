import React from "react";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import "boxicons";

function HomeUn() {
  return (
    <div className="home-container">
      <div className="home-text">
        <div>
          <h1>Bienvenido a IntegraServicios</h1>
          <h3>Panel Unidad de Servicio</h3>
          <Divider sx={{ width: "60%" }} />
        </div>
      </div>
      <div className="home-element">
        <div>
          <Divider
            sx={{ marginTop: "-18px", fontSize: "20px", fontWeight: "600" }}
          >
            Disponibilidad
          </Divider>
          <p>
            En la pestaña de Disponibilidad podras definir las horas disponibles
            de tu unidad de servicio
          </p>
          <Divider sx={{ marginTop: "20px" }} />
        </div>
        <div>
          <Divider sx={{ fontSize: "20px", fontWeight: "600" }}>
            Recursos
          </Divider>
          <p>
            En la pestaña de Recursos podrás agregar nuevos recursos y consultar
            los tipos de recursos asociados a tu unidad.
          </p>
          <Divider sx={{ marginTop: "20px" }} />
        </div>
      </div>
      <div className="home-element">
        <div>
          <Divider
            sx={{ marginTop: "-18px", fontSize: "20px", fontWeight: "600" }}
          >
            Empleados
          </Divider>
          <p>
            En la pestaña de Empleados podrás visualizar los empleados asociados
            a tu unidad.
          </p>
          <Divider sx={{ marginTop: "20px" }} />
        </div>
        <div>
          <Divider sx={{ fontSize: "20px", fontWeight: "600" }}>Ayuda</Divider>
          <p>
            En la pestaña de ayuda podrás explorar los contactos de soporte en
            caso de algún fallo en la aplicación.
          </p>
          <Divider sx={{ marginTop: "20px" }} />
        </div>
      </div>
    </div>
  );
}

export default HomeUn;
