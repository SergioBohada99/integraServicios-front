import axios from "../../axios.js";

export default function getUsuarios(token) {
    return axios.get("api/admin/students",{
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
        console.log("Consulta de estudiantes exitosa",response.data);
      return response.data;
    })
    .catch((err) => {
      console.error("Consulta de estudiantes error: " + err);
      return err.message;
    });
  }