import React from "react";
import Divider from "@mui/material/Divider";
import "boxicons";
import { useState, useEffect } from "react";
import { useAuth } from "./../../AuthContext";
import registerEmply from "../../../api/admin/emplyRegis.js";
import { useAlert } from "./../../AlertContext.jsx";
import GlobalAlert from "./../../GlobalAlert.jsx";
import getUnidades from "../../../api/admin/consulta/consultaUnidades.js";

function Emply_add({ isEnable, setIsVisible }) {
  const [userData, setUserData] = useState({
    documentType: "",
    document: "",
    email: "",
    firstName: "",
    middleName: "",
    firstLastName: "",
    middleLastName: "",
    password: "",
    id: "",
  });
  function createData(unidad, id) {
    return { unidad, id };
  }
  const [rows, setRows] = useState([]);

  const [alertType, setAlertType] = useState(null);
  const { token } = useAuth();
  const { setOpen } = useAlert();

  useEffect(() => {
    getUnidades(token)
      .then((data) => {
        if (data.success) {
          const newRows = data.data.map((unit) =>
            createData(unit.username, unit.id)
          );
          setRows(newRows);
        }
      })
      .catch((err) => console.error("Error al consultar unidades", err));
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("datos del request: ",userData)
      const response = await registerEmply(
        userData.documentType,
        userData.document,
        userData.email,
        userData.firstName,
        userData.middleName,
        userData.firstLastName,
        userData.middleLastName,
        userData.password,
        parseInt(userData.id),
        token
      ).then(response => setAlertType(response))
      setOpen(true);
    } catch (e) {
      console.error(e);
    }
    setUserData((prevState) => {
      const resetState = {};
      for (const key in prevState) {
        resetState[key] = "";
      }
      return resetState;
    });
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div
      className={
        isEnable ? "form-generic visible" : "form-generic close hidden"
      }
    >
      {<GlobalAlert type={alertType} />}
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="header-container">
          <span className="close-icon">
            <i className="bx bx-x" onClick={handleClose}></i>
          </span>
          <h3> Agregar Empleado</h3>
          <Divider />
        </div>
        <div className="item-container">
          <label for="docType-empleado">Tipo de documento de empleado</label>
          <input
            id="docType-empleado"
            type="text"
            value={userData.documentType}
            required
            onChange={(e) =>
              setUserData({ ...userData, documentType: e.target.value })
            }
          ></input>
        </div>
        <div className="item-container">
          <label for="doc-empleado">Documento de empleado</label>
          <input
            id="doc-empleado"
            type="number"
            value={userData.document}
            required
            onChange={(e) =>
              setUserData({ ...userData, document: e.target.value })
            }
          ></input>
        </div>
        <div className="item-container">
          <label for="email-empleado">Email de empleado</label>
          <input
            id="email-empleado"
            type="email"
            value={userData.email}
            required
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          ></input>
        </div>
        <div className="item-container">
          <label for="1ernombre-empleado">Primer nombre</label>
          <input
            id="1ernombre-empleado"
            type="text"
            value={userData.firstName}
            required
            onChange={(e) =>
              setUserData({ ...userData, firstName: e.target.value })
            }
          ></input>
        </div>
        <div className="item-container">
          <label for="2doNombre-empleado">Segundo nombre</label>
          <input
            id="2doNombre-empleado"
            type="text"
            value={userData.middleName}
            required
            onChange={(e) =>
              setUserData({ ...userData, middleName: e.target.value })
            }
          ></input>
        </div>
        <div className="item-container">
          <label for="1erApellido-empleado">Primer apellido</label>
          <input
            id="1erApellido-empleado"
            type="text"
            value={userData.firstLastName}
            required
            onChange={(e) =>
              setUserData({ ...userData, firstLastName: e.target.value })
            }
          ></input>
        </div>
        <div className="item-container">
          <label for="2doApellido-empleado">Segundo apellido</label>
          <input
            id="2doApellido-empleado"
            type="text"
            value={userData.middleLastName}
            required
            onChange={(e) =>
              setUserData({ ...userData, middleLastName: e.target.value })
            }
          ></input>
        </div>
        <div className="item-container">
          <label for="pass-empleado">Contraseña</label>
          <input
            id="pass-empleado"
            type="password"
            value={userData.password}
            required
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          ></input>
        </div>
        <div className="item-container">
          <label for="pass-empleado">Unidad de servicio asociada</label>
          <select className="default-select" onChange={(e) =>
              setUserData({ ...userData, id: e.target.value })
            }>
            {rows.map((row, index) => (
              <option key={index} value={row.id}>
                {row.unidad}
              </option>
            ))}
          </select>
        </div>
        <button className="generic-button">Enviar</button>
      </form>
    </div>
  );
}

export default Emply_add;
