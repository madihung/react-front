import React, {useState} from "react";
import './MainNavigation.css'

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideNav from "./SideNav";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


const MainNavigation = props => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    return (
        // cant return two root elements unless a fragment wapper is added
        <React.Fragment>
            {drawerIsOpen ? (
                <SideNav>
                    <nav className="main-navigation__side-nav">
                        <NavLinks />
                    </nav>
                </SideNav>
            ) : null}
            <MainHeader>
                <button className="main-navigation__menu-btn">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <h1 className="main-navigation__title">
                    <Link to="/">Your Places</Link>
                </h1>
                <nav className="main-navigation__header-nav">
                    <NavLinks />
                </nav>
            </MainHeader>
    </React.Fragment>
    );
};

export default MainNavigation;