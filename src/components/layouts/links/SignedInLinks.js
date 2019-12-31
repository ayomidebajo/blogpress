import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
    return (
      <div>
      <ul className="right">
            <li><NavLink className="black-text" to='/world'>World</NavLink></li>
            <li><NavLink className="black-text" to='/fashion'>Fashion</NavLink></li>
            <li><NavLink className="black-text" to='/tech'>Tech</NavLink></li>
        </ul>
      </div>
    )
}

export default SignedInLinks;