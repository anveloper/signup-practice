import React from 'react'
import { Link } from "react-router-dom";

import './nav.css'

const Nav = () => {
  return (
    <div>
      <nav>
        <h5>Router<br/>Button</h5>
        <Link to=""><p className='btn'>HOME</p></Link>
        <Link to="login"><p className='btn'>LOG IN</p></Link>
        <Link to="signup"><p className='btn'>SIGN UP</p></Link>
      </nav>
    </div>
  )
}

export default Nav