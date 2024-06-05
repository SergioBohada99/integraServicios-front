import axios from "../axios.js";

export default function registerUnidad(userName, password, granularity, token) {
    return axios.post("api/register/unit", {
      granularityInMinutes:granularity,
      username: userName,
      password: password
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
        console.log("Unidad registrada exitosamente",response);
      return response.data;
    })
    .catch((err) => {
      console.error("registerUnidad error: " + err);
      return err.message;
    });
  }