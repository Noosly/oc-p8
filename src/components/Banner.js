import React from 'react'
import {Link} from "react-router-dom"
import logo from '../assets/LOGO.png'

export default function Banner() {
  return (
    <div className="banner">
      <img className="banner__logo" src={logo} alt ="Logo Kasa"></img>
      <Link to="/" className='banner__link'>Acceuil</Link>
      <Link to="/Apropos" className='banner__link'>A Propos</Link>
    </div>
  )
}
