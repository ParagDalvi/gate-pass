import React from 'react';
import logo from '../assets/images/logo.png';
import firebase from '../../src/firebase/firebase';

function Navbar({ frompage }) {
    function handleLogout() {
        firebase.auth().signOut();
    }
    return (
        <nav class="navbar navbar-dark bg-dark">
            <img src={logo} width="30%" height="30%" class="d-inline-block align-top" alt="log" />
            {
                frompage === 'main'
                    ? <button onClick={handleLogout} type="button" className="ml-auto btn btn-outline-light">
                        Logout
                    </button>
                    : null
            }
        </nav>
    );
}

export default Navbar;