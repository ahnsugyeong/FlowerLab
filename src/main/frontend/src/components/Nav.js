import { Link } from 'react-router-dom';
import React from 'react';
import menuIcon from '../assets/menu-icon.png'
import loginIcon from '../assets/login-icon.png'

import '../styles/Nav.css';


function Nav() {
    return (
        <div className="navbar">
            <img
                src={menuIcon}
                alt="메뉴"
                className="menu-icon"
            />

            <div className="navbarMenu">
                <Link className="navbarMenuItem" to={'/boutique'}>BOUTIQUE</Link>
                <Link className="navbarMenuItem" to={'/about'}>ABOUT</Link>
                <Link className="navbarMenuItem" to={'/market'}>MARKET</Link>
            </div>

            <img
                src={loginIcon}
                alt="로그인"
                className="login-icon"
            />

        </div>
    );
}

export default Nav;