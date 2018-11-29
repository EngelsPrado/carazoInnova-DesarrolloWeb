import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from './../store/actions/authActions'

const SignedInLinks = (props) => {
  console.log(props.profile)
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/register'>Registrar Negocio</NavLink></li>
        <li> <span>{props.profile.displayName}</span> </li>
        <li><NavLink to='/' className="btn btn-floating pink lighten-2">
         <img  width='45'  src={props.profile.photoURL}></img>
        
        </NavLink></li>
        <li><a onClick={props.signOut}>Log Out</a></li>
      </ul>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)