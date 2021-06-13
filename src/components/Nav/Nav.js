import React from 'react';
import './Nav.css';

const Nav = ({ showComponent }) => {

    return (
        showComponent ?
        (<ul>
            <li><a className="active" onClick={ () => showComponent(true) } href="#">Workspace</a></li>
            <li><a onClick={ () => showComponent(false) } href="#">Trash Bin</a></li>    
        </ul>)
        : null
    )
}

export default Nav;
