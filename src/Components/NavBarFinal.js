import React from "react";
import '../App.css';
import Logo from '../Components/Logo';
import Navbar from '../Components/Navbar';
import BotonLogin from "./BotonLogin";

export default function NavBarFinal (props) {


	return (

        <div className = "navigation">
            <Logo/>
            <Navbar/>
            <BotonLogin/>
        </div>

    );
	
}