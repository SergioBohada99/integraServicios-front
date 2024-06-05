import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { useDate } from "../../DateFormaterContext.jsx";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import Link from "@mui/joy/Link";
import Divider from "@mui/material/Divider";
import registerDisponibilidad from '../../../api/unidad_servicios/disponibilidadRegis.js'
import { useAuth } from "../../AuthContext.jsx";
import {useAlert} from '../../AlertContext.jsx'
import GlobalAlert from "../../GlobalAlert.jsx";

function DisponibilidadPicker() {
  const [date, setDate] = useState(null);
  const [timeInit, setTimeInit] = useState(null);
  const [timeEnd, setTimeEnd] = useState(null);
  const [formatedTime, setFromatedTime] = useState({date:'',timeStart:'',timeEnd:''});
  const { formatDateUnidad, formatTimeUnidad } = useDate();
  const [alertType, setAlertType] = useState(null);
  const { token } = useAuth();
  const {setOpen} = useAlert();



  const handleTimeInit = (time) => {
    setTimeInit(time);
    setFromatedTime({...formatedTime, timeStart: formatTimeUnidad(time)

    })
  };

  const handleTimeEnd = (time) => {
    setTimeEnd(time);
    setFromatedTime({...formatedTime, timeEnd: formatTimeUnidad(time)})
  };

  const handleDate = (date) => {
    setDate(date);
    setFromatedTime({...formatedTime, date: formatDateUnidad(date)})
  };


  const handleSend = async  () => {
    console.log(formatedTime);
    let response = await registerDisponibilidad(token,formatedTime.date,formatedTime.timeStart,formatedTime.timeEnd)
    setAlertType(response);
    setOpen(true);
  }

  return (
    <div className="UnDash-content">
    <GlobalAlert type={alertType} />
      <Breadcrumbs
        aria-label="breadcrumbs"
        size="md"
        separator="›"
        sx={{
          fontFamily: "Poppins",
          my: "2vh",
        }}
      >
        {["Dashboard", "Disponibilidad"].map((item) => (
          <Link key={item} color="neutral" href="#basics">
            {item}
          </Link>
        ))}
      </Breadcrumbs>
      {/* */}
      <h1>Configuración de disponibilidad</h1>
      <Divider sx={{marginTop:-1.5,marginBottom:4}}/>
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
      <button className="default-button" onClick={handleSend}>Enviar</button>
    </div>
  );
}

export default DisponibilidadPicker;
