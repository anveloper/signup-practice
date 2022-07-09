import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <Link to="" className='footer__logo'>ANVELOPER</Link>
      <div className="footer__copyright">
        <small>&copy; ANVELOPER Sign Up Web</small>
      </div>
    </footer>
  )
}

export default Footer