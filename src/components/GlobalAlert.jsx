import React from "react";
import Snackbar from "@mui/joy/Snackbar";
import Alert from "@mui/joy/Alert";
import PlaylistAddCheckCircleRoundedIcon from "@mui/icons-material/PlaylistAddCheckCircleRounded";
import ErrorOutlineSharpIcon from "@mui/icons-material/ErrorOutlineSharp";
import { useAlert } from "./AlertContext.jsx";
import { useState, useEffect } from "react";
import { useAuth } from "./AuthContext.jsx";

function GlobalAlert({ type }) {
  const { logout } = useAuth();
  const [alertColor, setAlertColor] = useState(null);
  const [iconType, setIconType] = useState(null);
  const [alertMessage, setAlertMessage] = useState("");
  const { open, setOpen } = useAlert();

  useEffect(() => {
    console.log("Type log", type);
    if (type) {
      if (type.count && type.success === false) {
        try {
          type.errors.map((error,index) =>{
            setAlertMessage(alertMessage+" "+error)
            setIconType(false)
          })
        } catch (e) {
          console.error(e);
        }
        setAlertColor("danger");
        console.log("entro2");
      }
      if(type.success){
        setAlertMessage("Operación realizada con exito")
        setAlertColor("success");
        setIconType(true)
      }
    }
  }, [type]);

  const handleClose = (event, reason) => {
    setAlertMessage("")
    setOpen(false);
  };

  return (
    <Snackbar
      autoHideDuration={6000}
      open={open}
      sx={{
        boxShadow: "none",
        borderColor: "transparent",
        backgroundColor: "transparent",
      }}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      onClose={handleClose}
    >
      <Alert
        variant="soft"
        color={alertColor}
        startDecorator={
          iconType ? (
            <PlaylistAddCheckCircleRoundedIcon />
          ) : (
            <ErrorOutlineSharpIcon />
          )
        }
        sx={{ color: "#707070" }}
      >
        {alertMessage}
      </Alert>
    </Snackbar>
  );
}
export default GlobalAlert;
