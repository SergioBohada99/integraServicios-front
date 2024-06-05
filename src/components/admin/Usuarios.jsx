import Reac, {useState} from 'react'
import "../Dashboard.css";
import Usuario_lista from './usuarios_elements/Usuario_lista.jsx'
import Usuario_add from './usuarios_elements/Usuario_add.jsx'
import Usuario_Fab from './usuarios_elements/Usuario_Fab.jsx'
import Divider from '@mui/joy/Divider';

function Usuarios() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="contenido_unidad">
      <Usuario_add isEnable={isVisible} setIsVisible={setIsVisible} />
      <Usuario_Fab setIsVisible={setIsVisible} />
      <div className="unidad_lista">
        <Usuario_lista />
      </div>
    </div>
  )
}

export default Usuarios