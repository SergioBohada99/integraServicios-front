import axios from "../axios.js";

export default function regisResType(name,features,token) {
    return axios.post("api/resources/type", {
        "name":name,
        "features":features
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => {
          console.log("Tipo de recurso registrado",response.data);
        return response;
      })
      .catch((err) => {
        console.error("Tipo de recurso error error: ",err);
        return err.message;
      });



}