import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


const SignedOutLinks = () => {
    return (
       <div>
       <ul className="left">
            <Link to='/' className="brand-logo black-text">BlogPress</Link>
        </ul>
            <ul className="right">
                <li><NavLink to='/signin' className="black-text">Login</NavLink></li>
            <li><NavLink to='/signup' className="black-text">Sign Up</NavLink></li>
        </ul>
       </div>
    )
}

export default SignedOutLinks;