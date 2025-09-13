import React, { useState } from 'react'
import Logo from '../assets/TENr LOGO.png'
import { useNavigate } from 'react-router-dom'
import '../styles/header.css'

function Header() {
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

      {/* Menu items */}
      <div className={`in-header ${menuOpen ? "open" : ""}`}>
        <p onClick={() => navigate('/')}>Home</p>
        <p onClick={() => navigate('/about')}>About</p>
        <p onClick={() => navigate('/services')}>Services</p>
        <p onClick={() => navigate('/packages')}>Packages</p>
        <p onClick={() => navigate('/reviews')}>Reviews</p>
        <p onClick={() => navigate('/proofs')}>Proofs & Brouchers</p>
        <p onClick={() => navigate('/contact')}>Contact</p>
      </div>
    </div>
  )
}

export default Header
