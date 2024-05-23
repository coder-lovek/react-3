import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>Navbar
        <br />
        <Link to='/'>home</Link>
        <Link to='/profile'>profile</Link>
        <Link to='/contact'>contact</Link>
    </div>
  )
  
}

export default Navbar