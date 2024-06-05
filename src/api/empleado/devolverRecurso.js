import axios from "../axios.js";

export default function devolverRecurso(reservationId, token) {
  return axios.put("api/resources/available", null, {
    headers: {
      Authorization: `Bearer ${token}`
    },
    params: {
      reservationId: reservationId
    }
  })
  .then((response) => {
    console.log("Recurso devuelto ", response.data);
    return response;
  })
  .catch((err) => {
    console.error("Recurso devuelto error: ", err);
    return err.message;
  });
}