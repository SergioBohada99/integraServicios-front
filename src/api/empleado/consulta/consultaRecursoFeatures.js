import axios from "../../axios.js";

export default function getResFeatures(resName,token) {
    return axios.get("api/resources/types/features?name="+`${resName}`,{
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
        console.log("Consulta features de rucurso exitosa",response.data);
      return response.data;
    })
    .catch((err) => {
      console.error("Consulta features de rucurso error: " + err);
      return err.message;
    });
  }