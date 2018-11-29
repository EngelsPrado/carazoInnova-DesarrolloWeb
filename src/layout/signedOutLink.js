import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/sesion'>Inicia Sesion</NavLink></li>
      </ul>
    </div>
  )
}

export default SignedOutLinks