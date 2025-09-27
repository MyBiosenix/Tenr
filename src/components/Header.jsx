import React, { useState } from 'react'
import Logo from '../assets/TENr LOGO.png'
import { useNavigate, useLocation } from 'react-router-dom'
import '../styles/header.css'

function Header() {

  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false)

  const navigate = useNavigate();
  return (
    <div className='myheader'>
      <div className='logo'>
        <img src={Logo} alt='Mylogo' />
      </div>

      {/* Hamburger button (only visible on mobile) */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={menuOpen ? "bar bar1 active" : "bar bar1"}></div>
        <div className={menuOpen ? "bar bar2 active" : "bar bar2"}></div>
        <div className={menuOpen ? "bar bar3 active" : "bar bar3"}></div>
      </div>
      <div className={`in-header ${menuOpen ? "open" : ""}`}>
        <p onClick={() => navigate('/')} className={location.pathname === '/' ? 'active':''}>Home</p>
        <p onClick={() => navigate('/about')} className={location.pathname === '/about' ? 'active':''}>About</p>
        <p onClick={() => navigate('/services')} className={location.pathname === '/services' ? 'active':''}>Services</p>
        <p onClick={() => navigate('/packages')} className={location.pathname === '/packages' ? 'active':''}>Packages</p>
        <p onClick={() => navigate('/reviews')} className={location.pathname === '/reviews' ? 'active':''}>Reviews</p>
        <p onClick={() => navigate('/proofs')} className={location.pathname === '/proofs' ? 'active':''}>Proofs & Brouchers</p>
        <p onClick={() => navigate('/contact')} className={location.pathname === '/contact' ? 'active':''}>Contact</p>
      </div>
    </div>
  )
}

export default Header
