import { Link } from 'react-router-dom';
import React from 'react';
import Search from './Search';

import '../styles/Nav.css';


function Nav() {
    return (
        <div>
            <div className="navbar">
                <Link className="navbarMenu" to={'/'}>MAIN</Link>
                <Link className="navbarMenu" to={'/about'}>ABOUT</Link>
                <Link className="navbarMenu" to={'/contact'}>CONTACT</Link>
            </div>
        </div>
    );
}

export default Nav;