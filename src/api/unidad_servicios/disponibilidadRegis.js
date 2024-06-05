import axios from "../axios.js";

export default function registerDisponibilidad(token,date,startTime,endTime) {
    return axios.post("api/unit/schedule/availability", {
      "availability": [
        {
          "date": date,
          "timeSlots": [
            {
              "startTime": startTime,
              "endTime": endTime
            }
          ]
        }
      ]
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => {
          console.log("Disponibilidad request exitosa",response);
        return response.data;
      })
      .catch((err) => {
        console.error("Disponibilidad error: " + err);
        return err.message;
      });



}