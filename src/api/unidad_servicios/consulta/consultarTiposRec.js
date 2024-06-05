import axios from "../../axios.js";

export default function getTiposRecursos(token) {
    return axios.get("api/resources/types",{
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
        console.log("Consulta de tipo de recursos exitosa",response.data);
      return response.data;
    })
    .catch((err) => {
      console.error("Consulta de tipo de recursos error: " + err);
      return err.message;
    });
  }