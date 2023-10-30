import React from 'react'
import {Link, useLocation} from "react-router-dom"
import logo from '../assets/LOGO.png'
import '../styles/banner.css'

export default function Banner() {
  const location = useLocation();
  const isLinkActive = (to) => { 
    return location.pathname === to;  
  };
  return (
    <div className="banner">
      <img className="banner__logo" src={logo} alt ="Logo Kasa"></img>
      <nav className='banner__navbar'>
        <Link to="/" className={isLinkActive('/')?'banner__link--active':'banner__link'}>Acceuil</Link>
        <Link to="/Apropos" className={isLinkActive('/Apropos')?'banner__link--active':'banner__link'}>A Propos</Link>
      </nav>
      
    </div>
  )
}
