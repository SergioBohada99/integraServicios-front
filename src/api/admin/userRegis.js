import axios from "../axios.js";

export default function registerUsuario(
  cc,
  document,
  email,
  firstName,
  firstLastName,
  middleName,
  middleLastName,
  password,
  code,
  faculty,
  degreeProgram,
  token
) {
  return axios
    .post(
      "api/register/student",
      {
        documentType: cc,
        document: document,
        email: email,
        firstName: firstName,
        middleName: middleName,
        firstLastName: firstLastName,
        middleLastName: middleLastName,
        password: password,
        codeStudent: code,
        faculty: faculty,
        degreeProgram: degreeProgram,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((response) => {
      console.log("Usuario registrada exitosamente", response.data);
      return response.data;
    })
    .catch((err) => {
      console.error("UsuarioReis error: " + err);
      return err.message;
    });
}
