import axios from "../axios.js";

export default function regisResource(name,id,features,token) {
    return axios.post("api/resources/create", {
        "name":name,
        "typeId":id,
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