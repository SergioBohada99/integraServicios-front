import axios from "../axios.js";

export default function prestarRecurso(reservationId, token) {
  return axios.put("api/resources/borrowed", null, {
    headers: {
      Authorization: `Bearer ${token}`
    },
    params: {
      reservationId: reservationId
    }
  })
  .then((response) => {
    console.log("Recurso prestado ", response.data);
    return response;
  })
  .catch((err) => {
    console.error("Recurso prestado error: ", err);
    return err.message;
  });
}
