import axios from "../axios.js";

export default function getPrestamo(token) {
    return axios.get("api/resources/employee",{
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
        console.log("Consulta de reserva de recursos exitosa",response.data);
      return response.data;
    })
    .catch((err) => {
      console.error("Consulta de reserva de recursos error: " + err);
      return err.message;
    });
  }