import axios from "../../axios.js";

export default function getTipos(token) {
    return axios.get("api/resources/types",{
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
        console.log("Consulta de tipos exitosa",response.data);
      return response.data;
    })
    .catch((err) => {
      console.error("Consulta de tipos error: " + err);
      return err.message;
    });
  }