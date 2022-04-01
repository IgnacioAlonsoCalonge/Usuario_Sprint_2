import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

export default function BotonLogin (props) {


	return (

        <Link to='/miPerfil'><button className="boton_login">Mi Perfil</button></Link>

       );
	
}