import React, {useState} from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideNav from "./SideNav";
import Backdrop from "../UIElements/Backdrop";
import './MainNavigation.css'


const MainNavigation = props => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false)

    const openDrawer = () => {
        setDrawerIsOpen(true);
    };

    const closeDrawer = () => {
        setDrawerIsOpen(false);
    };

    return (
        // cant return two root elements unless a fragment wapper is added
        <React.Fragment>
            {drawerIsOpen && <Backdrop onClick={closeDrawer} />}
            {drawerIsOpen && (
                <SideNav>
                    <nav className="main-navigation__side-nav">
                        <NavLinks />
                    </nav>
                </SideNav>
            )}
            <MainHeader>
                <button className="main-navigation__menu-btn" onClick={openDrawer}>
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