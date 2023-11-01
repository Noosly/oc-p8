import React from 'react'
import {Link, useLocation} from "react-router-dom"
import logo from '../assets/LOGO.png'
import '../styles/banner.css'
import Menu from './Menu'

export default function Banner({title, image}) {
  const location = useLocation();
  const isLinkActive = (to) => { 
    return location.pathname === to;  
  };
  return (
    <div className='component-banner'>
      <Menu />  
      <div className="banner">
        <img className="banner__image" src={image} alt ="Background" />
        <div className="banner__text">{title}</div>
      </div>        
    </div>
  )
}
