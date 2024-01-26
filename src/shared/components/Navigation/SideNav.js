import React from 'react';
import ReactDOM from 'react-dom';

import './SideNav.css';

const SideNav = props => {
    const content = <aside className="side-nav">{props.children}</aside>;

    return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
};

export default SideNav;