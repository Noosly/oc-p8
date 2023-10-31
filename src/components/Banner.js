import React from 'react'
import {Link, useLocation} from "react-router-dom"
import logo from '../assets/LOGO.png'
import '../styles/banner.css'

export default function Banner({title, image}) {
  const location = useLocation();
  const isLinkActive = (to) => { 
    return location.pathname === to;  
  };
  return (
    <div className='component-banner'>
      <div className="menu">
        <img className="menu__logo" src={logo} alt ="Logo Kasa"></img>
        <nav className='menu__navbar'>
          <Link to="/" className={isLinkActive('/')?'menu__link--active':'menu__link'}>Acceuil</Link>
          <Link to="/Apropos" className={isLinkActive('/Apropos')?'menu__link--active':'menu__link'}>A Propos</Link>
        </nav> 
      </div>   
      <div className="banner">
        <img className="banner__image" src={image} alt ="Background" />
        <div className="banner__text">{title}</div>
      </div>        
    </div>
  )
}
