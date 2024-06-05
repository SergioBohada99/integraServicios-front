import axios from "../../axios.js";

export default function getMasPrestado(token) {
    return axios.get("api/resources/most/reserved",{
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
        console.log("Consulta de recurso más prestado exitosa",response.data);
      return response.data;
    })
    .catch((err) => {
      console.error("Consulta de más prestado  error: " + err);
      return err.message;
    });
  }