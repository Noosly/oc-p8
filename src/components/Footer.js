import React from 'react'
import logo from '../assets/LOGO_white.png'
import '../styles/footer.css'

export default function Footer() {
  return (
    <div className='footer'>
      <img className="footer__image" src={logo} alt ="Logo Kasa Footer"></img>
      <div className='footer__text'>&copy;2020 Kasa. All rights reserved</div>
    </div>
  )
}
