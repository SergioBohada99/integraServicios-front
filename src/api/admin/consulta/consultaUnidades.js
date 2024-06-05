import axios from "../../axios.js";

export default function getUnidades(token) {
    return axios.get("api/admin/units",{
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
        console.log("Consulta de unidades exitosa",response.data);
      return response.data;
    })
    .catch((err) => {
      console.error("Consulta de unidades error: " + err);
      return err.message;
    });
  }