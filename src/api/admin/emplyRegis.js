import axios from "../axios.js";

export default function registerEmply(
  documentType,
  document,
  email,
  firstName,
  middleName,
  firstLastName,
  middleLastName,
  password,
  serviceUnitId,
  token
) {
  return axios
    .post(
      "api/register/employee",
      {
        documentType: documentType,
        document: document,
        email: email,
        firstName: firstName,
        middleName: middleName,
        firstLastName: firstLastName,
        middleLastName: middleLastName,
        password: password,
        serviceUnitId:serviceUnitId
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((response) => {
      console.log("Empleado registrada exitosamente", response);
      return response.data;
    })
    .catch((err) => {
      console.error("EmpleadoRegis error: " + err);
      return err.message;
    });
}
