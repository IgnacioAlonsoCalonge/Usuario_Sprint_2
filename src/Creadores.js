import './Formulario.css'
import Formulario from './ComponentsCreadores/Formulario';
import ParrafoCreadores from './ComponentsCreadores/ParrafoCreadores';
import {Player} from "@lottiefiles/react-lottie-player";
import data from "./ComponentsCreadores/moneybooks.json";

function Creadores() {
  return (
        <div className='formulariocreadores'>

            <Formulario/>
            <div className='explicacioncreadores'>
                <h1>¿Quieres subir tus propios resúmenes y cobrar por ello?</h1>
                <p>Completa este formulario y adjunta tu resumen para
                    subirlo a la plataforma y empieza a ganar dinero con tu trabajo.
                </p>
                <div className="explicaparrafo">
                    <Player
                        className="lottiebooks"
                        autoplay={true}
                        loop={true}
                        src= {data}
                     />
                    <ParrafoCreadores/>
                </div>
            </div>            
        </div>
  );
}

export default Creadores;