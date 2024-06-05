import axios from "../../axios.js";

export default function getReservas(token) {
    return axios.get("api/student/reservations",{
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