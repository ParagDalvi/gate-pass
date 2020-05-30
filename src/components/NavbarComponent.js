import React from 'react';
import logo from '../assets/images/logo.png';

function Navbar() {
    return (
        <nav className="navbar navbar-darl bg-dark">
            <a className="navbar-brand mx-auto" href="/">
                <img src={logo} className="d-inline-block align-top" height="25%" width="25%" ></img>
            </a>
        </nav>
    );
}

export default Navbar;