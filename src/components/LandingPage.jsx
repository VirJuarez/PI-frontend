import "./landing.css";
import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage(){
    return(
        <div className="landing">
            <div className="texto">
            <h1 className="welcome">Welcome</h1>
            <Link to="/home" >
                <button className="boton">Let´s cook!</button>
            </Link>
            </div>
            
        </div>
    )
        
    
}