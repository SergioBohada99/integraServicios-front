import axios from "../../axios.js";

export default function regisReserva(
    resourceId,
    date,
    startTime,
    endTime,
    quantity,
  token
) {
  return axios
    .post(
      "api/resources/reserve",
      {
        resourceId: resourceId,
        date: date,
        startTime: startTime,
        endTime: endTime,
        quantity: quantity,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((response) => {
      console.log("Reserva registrada exitosamente", response);
      return response.data;
    })
    .catch((err) => {
      console.error("Reserva error: " + err);
      return err.message;
    });
}
