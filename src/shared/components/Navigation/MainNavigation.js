import React from "react";
import './MainNavigation.css'

import MainHeader from "./MainHeader";
import { NavLinks } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


const MainNavigation = props => {
    return <MainHeader>
        <button className="main-navigation__btn">
            <span></span>
            <span></span>
            <span></span>
        </button>
        <button className="main-navigation__title">
            <span></span>
            <span></span>
            <span></span>
        </button>
        <h1 className="main-navigation__title">
            <Link to="/">Your Places</Link>
        </h1>
        <nav>
            <NavLinks />
        </nav>
    </MainHeader>
};

export default MainNavigation;