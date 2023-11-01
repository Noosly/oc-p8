import React from 'react'
import arrow from '../assets/arrow.png'
import '../styles/dropdownlist.css'

export default function DropDownList({headerText, contentText}) {
  const show_hide = (e)=>{
    const header_btn = document.querySelector('.dropdownlist-header__image')
    alert(`function: show_hide event: ${e}`)
    header_btn.style.transform = 'rotate(180deg)'
  }
  return (
    <div className='component-dropdownlist'>
        <div className='dropdownlist-header'>
            <div className='dropdownlist-header__text'>{headerText}</div>
            <img className="dropdownlist-header__image" src={arrow} alt ="Flèche Haut/Bas" onClick={show_hide}/>
            
        </div> 
        <div className='dropdownlist-content'>
            <p className='content-text'>{contentText}</p>




            
        </div> 
    </div>
  )
}
