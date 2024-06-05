import React from "react";
import "./Login.css";
import { MailOutline, LockClosedOutline } from "react-ionicons";
import { useAuth } from "./AuthContext";
import { useState } from "react";
import GlobalAlert from "./GlobalAlert.jsx";
import { useAlert } from "./AlertContext.jsx";
function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { login, token } = useAuth();
  const [responseType, setResponseType] = useState("");
  const { setOpen } = useAlert();

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await login(userName, password);
    setResponseType(response);
    setOpen(true);
  };
  return (
    <section className="regis-box">
      <GlobalAlert type={responseType} />
      <div className="form-box">
        <div className="form-value">
          <form onSubmit={handleLogin}>
            <h2>Integra Servicios</h2>
            <div className="inputbox_login">
              <input
                type="text"
                id="userName"
                required
                onChange={(e) => setUserName(e.target.value)}
              />
              <label htmlFor="userName">Usuario</label>
              <div className="icon-pos">
                <MailOutline color={"#ffffff"} height="1.2rem" width="1.2rem" />
              </div>
            </div>
            <div className="inputbox_login">
              <input
                type="password"
                id="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="password">Contraseña</label>
              <div className="icon-pos">
                <LockClosedOutline
                  color={"#ffffff"}
                  height="1.2rem"
                  width="1.2rem"
                />
              </div>
            </div>
            <div className="forget">
              <label htmlFor="checkBox">
                <input type="checkbox" id="checkBox" />
                Recordar mi inicio de sesión{" "}
              </label>
            </div>
            <button>Entrar</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
