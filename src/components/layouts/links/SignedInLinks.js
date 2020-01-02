import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../../store/actions/authActions';

const SignedInLinks = (props) => {
    return (
      <div>
      <ul className="right">
            <li><NavLink className="black-text" to='/world'>World</NavLink></li>
            <li><NavLink className="black-text" to='/fashion'>Fashion</NavLink></li>
            <li><NavLink className="black-text" to='/tech'>Tech</NavLink></li>
            <li><NavLink to='/'className="btn btn-floating grey darken-1 white-text">{props.profile.initials}</NavLink></li>
            <li><NavLink to='/' className="black-text" onClick={props.signOut}>Log out</NavLink></li>
        </ul>
      </div>
    )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null,mapDispatchToProps)(SignedInLinks);