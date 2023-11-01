import React from 'react'
import arrow from '../assets/arrow.png'
import '../styles/dropdownlist.css'

export default function DropDownList({headerText, contentText}) {
  
  let arrow_rotation = 0;
  const show_hide = (e)=>{
    const header_btn = document.querySelector('.dropdownlist-header__image')
  const content = document.querySelector('.dropdownlist-content')
    //e.preventDefault()
    if(arrow_rotation == 0 ){
        arrow_rotation = 180
        header_btn.style.transform = `rotate(${arrow_rotation}deg)`
        content.style.visibility = 'hidden'

    }else{
        arrow_rotation = 0 
        header_btn.style.transform = `rotate(${arrow_rotation}deg)`
        content.style.visibility = 'visible'
    }   
    
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
