import React from 'react';
import './styles.css';

function Navbar() {
    const toggleMenu = () => {
        const navRight = document.querySelector(".nav-right");
        navRight.classList.toggle("show");
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="navbar-logo">
                    <a href="/">
                        {/* Wauriman Borges Brazilian Jiu-Jitsu */}
                        <img className="logo-navbar" src="src/assets/Logo-WB.jpeg" alt="Logo" />
                    </a>
                </div>
                <div className="navbar-links">
                    <div className="hamburguer-icon" onClick={toggleMenu}>&#9776;</div>
                    <ul className="navbar-nav nav-right">
                        <li className="nav-item">
                            <a href="/" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="/academy" className="nav-link">Academy</a>
                        </li>
                        <li className="nav-item">
                            <a href="/schedule" className="nav-link">Schedule</a>
                        </li>
                        <li className="nav-item">
                            <a href="/membership" className="nav-link">Membership</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
