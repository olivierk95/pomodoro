import React from 'react';
import Pomodoro from "../img/tomato.svg";
import "../css/header.css";

const Header = () => (
    <header>
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <a className="navbar-item" href="/">
                <img width="120" src={Pomodoro} alt=""/>
            </a>
            <a href="/">
                <h1>Pomodoro</h1>
            </a>
        </nav>
    </header>
);

export default Header;