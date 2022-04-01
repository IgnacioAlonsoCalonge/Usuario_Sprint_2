import "../Formulario.css";
import Iban from "./Iban";


export default function Formulario (props) {


	return (

        <div className= "formulario">
            
            <p>Foto de la portada</p>
            <input></input>
            <p>Resumen a evaluar</p>
            <div className="resumenformulario">
            <input></input>
            <button>Explorar fichero</button>
            </div>
            <p>Titulo del resumen</p>
            <input></input>
            <p>Descripción del resumen</p>
            <input></input>
            <button className="Enviar">Enviar</button>

        </div>      
       );	
}