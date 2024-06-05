import axios from "../../axios.js";

export default function getEmpleados(token) {
    return axios.get("api/admin/employees",{
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
        console.log("Consulta de empleados exitosa",response.data);
      return response.data;
    })
    .catch((err) => {
      console.error("Consulta de empleados error: " + err);
      return err.message;
    });
  }