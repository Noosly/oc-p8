import React from 'react'
import '../styles/banner.css'
import Menu from './Menu'

export default function Banner({title, image}) {
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
