import React from 'react';
import { NavLink } from 'react-router-dom';

import './nav.css';


function Nav (props){
    return (
      <nav className='w3-container color-nav'>
        <div className="w3-bar">
          <h1>Friends</h1>
          <NavLink to="/friends-list" className="link">
            Friends
          </NavLink>
          <NavLink to="/add-form" className="link">
            Add Friend
          </NavLink>
        </div>
      </nav>
    );
}

export default Nav;