import React from "react";
import Divider from "@mui/material/Divider";
import "boxicons";
import { useState } from "react";
import { useAuth } from "./../../AuthContext";
import registerUsuario from "../../../api/admin/userRegis.js";
import { useAlert } from "./../../AlertContext.jsx";
import GlobalAlert from "./../../GlobalAlert.jsx";

function Usuario_add({ isEnable, setIsVisible }) {
  const [userData, setUserData] = useState({documentType:"cc",document:"",email:"",firstName:"",middleName:"",firstLastName:"",middleLastName:"",password:"",codeStudent:"",faculty:"",degreeProgram:""});
  const [alertType,setAlertType] = useState(null)
  const { token } = useAuth();
  const { setOpen } = useAlert();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUsuario(
        userData.documentType,
        userData.document,
        userData.email,
        userData.firstName,
        userData.middleName,
        userData.firstLastName,
        userData.middleLastName,
        userData.password,
        userData.codeStudent,
        userData.faculty,
        userData.degreeProgram,
        token
      );
      if (response.data) {
        setAlertType(response);
        console.log("Response usuario add: " + response);
      } else {
        console.log("Response usuario add: " + response);
        setAlertType(response);
      }

      setOpen(true);
    } catch (e) {
      console.error(e);
    }
    setUserData(prevState => {
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
      <GlobalAlert type={alertType} />
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="header-container">
          <span className="close-icon">
            <i className="bx bx-x" onClick={handleClose}></i>
          </span>
          <h3> Agregar Estudiante</h3>
          <Divider />
        </div>
        <div className="item-container">
          <label for="docType-usuario">Tipo de documento</label>
          <input
            id="docType-usuario"
            type="text"
            value={userData.documentType}
            required
            onChange={(e) => setUserData({...userData, documentType: e.target.value})}
          ></input>
        </div>
        <div className="item-container">
          <label for="doc-usuario">Documento de estudiante</label>
          <input
            id="doc-usuario"
            type="number"
            value={userData.document}
            required
            onChange={(e) => setUserData({...userData, document: e.target.value})}
          ></input>
        </div>
        <div className="item-container">
          <label for="email-usuario">Correo estudiantil</label>
          <input
            id="email-usuario"
            type="email"
            value={userData.email}
            required
            onChange={(e) => setUserData({...userData, email: e.target.value})}
          ></input>
        </div>
        <div className="item-container">
          <label for="1ernombre-usuario">Primer nombre</label>
          <input
            id="1ernombre-usuario"
            type="text"
            value={userData.firstName}
            required
            onChange={(e) => setUserData({...userData, firstName: e.target.value})}
          ></input>
        </div>
        <div className="item-container">
          <label for="2doNombre-usuario">Segundo nombre</label>
          <input
            id="2doNombre-usuario"
            type="text"
            value={userData.middleName}
            required
            onChange={(e) => setUserData({...userData, middleName: e.target.value})}
          ></input>
        </div>
        <div className="item-container">
          <label for="1erApellido-usuario">Primer apellido</label>
          <input
            id="1erApellido-usuario"
            type="text"
            value={userData.firstLastName}
            required
            onChange={(e) => setUserData({...userData, firstLastName: e.target.value})}
          ></input>
        </div>
        <div className="item-container">
          <label for="2doApellido-usuario">Segundo apellido</label>
          <input
            id="2doApellido-usuario"
            type="text"
            value={userData.middleLastName}
            required
            onChange={(e) => setUserData({...userData, middleLastName: e.target.value})}
          ></input>
        </div>
        <div className="item-container">
          <label for="pass-usuario">Contraseña</label>
          <input
            id="pass-usuario"
            type="password"
            value={userData.password}
            required
            onChange={(e) => setUserData({...userData, password: e.target.value})}
          ></input>
        </div>
        <div className="item-container">
          <label for="code-usuario">Codigo de estudiante</label>
          <input
            id="code-usuario"
            type="number"
            value={userData.codeStudent}
            required
            onChange={(e) => setUserData({...userData, codeStudent: e.target.value})}
          ></input>
        </div>
        <div className="item-container">
          <label for="fac-usuario">Facultad</label>
          <input
            id="fac-usuario"
            type="text"
            value={userData.faculty}
            required
            onChange={(e) => setUserData({...userData, faculty: e.target.value})}
          ></input>
        </div>
        <div className="item-container">
          <label for="carr-usuario">Carrera</label>
          <input
            id="carr-usuario"
            type="text"
            value={userData.degreeProgram}
            required
            onChange={(e) => setUserData({...userData, degreeProgram: e.target.value})}
          ></input>
        </div>
        <button className="generic-button">Enviar</button>
      </form>
    </div>
  );
}

export default Usuario_add;
