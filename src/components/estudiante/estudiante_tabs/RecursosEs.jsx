import Reac, { useState } from "react";
import RecursosList from "../estudiante_elements/RecursosList.jsx";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { useDate } from "../../DateFormaterContext.jsx";
import Divider from "@mui/material/Divider";
import registerDisponibilidad from "../../../api/unidad_servicios/disponibilidadRegis.js";
import { useAuth } from "../../AuthContext.jsx";
import { useAlert } from "../../AlertContext.jsx";
import GlobalAlert from "../../GlobalAlert.jsx";
import regisReserva from "../../../api/users/consultas/registerReserva.js";

function RecursosEs() {
  const [resID, setResID] = useState(null);
  const [qnt, setQnt] = useState(null);
  const [date, setDate] = useState(null);
  const [timeInit, setTimeInit] = useState(null);
  const [timeEnd, setTimeEnd] = useState(null);
  const [formatedTime, setFromatedTime] = useState({
    date: "",
    timeStart: "",
    timeEnd: "",
  });
  const { formatDateUnidad, formatTimeUnidad } = useDate();
  const [alertType, setAlertType] = useState(null);
  const { token } = useAuth();
  const { setOpen } = useAlert();

  const handleTimeInit = (time) => {
    setTimeInit(time);
    setFromatedTime({ ...formatedTime, timeStart: formatTimeUnidad(time) });
  };

  const handleTimeEnd = (time) => {
    setTimeEnd(time);
    setFromatedTime({ ...formatedTime, timeEnd: formatTimeUnidad(time) });
  };

  const handleDate = (date) => {
    setDate(date);
    setFromatedTime({ ...formatedTime, date: formatDateUnidad(date) });
  };

  const handleSend = async () => {
    console.log(formatedTime);
    let response = await regisReserva(
      resID,
      formatedTime.date,
      formatedTime.timeStart,
      formatedTime.timeEnd,
      qnt,
      token
    );
    setAlertType(response);
    setOpen(true);
  };
  return (
    <div className="contenido_unidad">
      <div className="unidad_lista">
        <RecursosList />
        <div className="UnDash-content">
          <GlobalAlert type={alertType} />
          <h1>Reservar un recurso</h1>
          <Divider sx={{ marginTop: -1.5, marginBottom: 4 }} />
          <div className="unDash-datePicker">
            <div className="unDash-datePicker-container">
              <div>
                <p>Día y mes</p>
                <DatePicker
                  value={date}
                  onChange={(newValue) => handleDate(newValue)}
                />
              </div>
              <div>
                <p>Hora de inicio</p>
                <TimePicker
                  value={timeInit}
                  onChange={(newValue) => handleTimeInit(newValue)}
                />
              </div>
              <div>
                <p>Hora de final</p>
                <TimePicker
                  value={timeEnd}
                  onChange={(newValue) => handleTimeEnd(newValue)}
                />
              </div>
            </div>
          </div>
          <div className="item-container">
            <label htmlFor="nombre-tipo">ID del recurso </label>
            <input
              id="nombre-tipo"
              type="number"
              value={resID}
              className="generic-input"
              required
              onChange={(e) => setResID(e.target.value)}
            ></input>
          </div>
          <div className="item-container">
            <label htmlFor="nombre-tipo">Cantidad</label>
            <input
              id="nombre-tipo"
              type="number"
              value={qnt}
              className="generic-input"
              required
              onChange={(e) => setQnt(e.target.value)}
            ></input>
          </div>
          <button className="default-button" onClick={handleSend}>
            Reservar
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecursosEs;
