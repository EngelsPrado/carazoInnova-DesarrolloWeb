import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/sesion'><button  type="button" class="btn btn-secondary">Iniciar Sesion</button></NavLink></li>
      </ul>
    </div>
  )
}

export default SignedOutLinks