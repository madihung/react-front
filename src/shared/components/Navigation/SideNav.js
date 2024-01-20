import React from 'react';

import './SideNav.css';

const SideNav = props => {
    return <aside classNAme="side-nav">{props.children}</aside>
};

export default SideNav