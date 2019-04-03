import React from 'react';
import { NavLink } from 'react-router-dom';


function Nav (props){
    return (
        <nav>
            <h1>Friends</h1>
            <div>
                <NavLink to='/friends-list'>Friends</NavLink>
                <NavLink to='/form'>Add Friend</NavLink>
            </div>
        </nav>
    )
}

export default Nav;