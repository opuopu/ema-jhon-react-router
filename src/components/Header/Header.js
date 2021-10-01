import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <NavLink to ="/shop">
                <a href="/shop">Shop</a>
                </NavLink>
                <NavLink to ="/orders">
                <a href="/orders">order review</a>
                </NavLink>
               
               
                <NavLink to = "/inventory"> 
                <a href="/inventory">Manage Inventory</a>
                </NavLink>
            </nav>
        </div>
    );
};

export default Header;