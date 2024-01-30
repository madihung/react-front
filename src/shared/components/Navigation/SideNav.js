import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import './SideNav.css';


const SideNav = props => {
    // const asideContent = <aside className="side-drawer">{props.children}</aside>;

    const content = (
        <CSSTransition 
            in={props.show} 
            timeout={200} 
            classNames="slide-in-left" 
            mountOnEnter 
            unmountOnExit
            // children={asideContent}
        >
            <aside className="side-drawer">{props.children}</aside>
        </CSSTransition>

    );

    return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
};

export default SideNav;