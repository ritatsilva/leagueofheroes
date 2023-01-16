import React from "react";
import logo from "../imagens/avengers.jpg"
import { Link, NavLink } from 'react-router-dom';

const Header = () =>{
    return(
    <header>
        <div>
            <img src={logo} alt="avengers"></img>
            <h1 className="nome-da-classe">League of heroes</h1>

            <h3>League of Heroes, desenvolvido por Rita Silva</h3>

            <nav>
                <button><Link to="/">Home</Link>  </button>
         
                <button><NavLink to="/dashboard">Dashboard</NavLink></button>
            </nav>
        </div>
    </header>
    )
}
export default Header;