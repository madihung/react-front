import React from 'react';
import {NavLink} from 'react-router-dom';

import './NavLinks.css'

const NavLinks = props => {
    return <u1 className="nav-links">
        <li>
            <NavLink to="/">ALL USERS</NavLink>
        </li>
        <li>
            <NavLink to="/">MY PLACES</NavLink>
        </li>
        <li>
            <NavLink to="/">ADD PLACES</NavLink>
        </li>
        <li>
            <NavLink to="/">AUTHENTICATE</NavLink>
        </li>
    </u1>
};