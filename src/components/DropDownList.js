import React, {useState} from 'react'
import arrow from '../assets/arrow.png'
import '../styles/dropdownlist.css'

export default function DropDownList({headerText, contentText}) {
    
  const [open, setOpen] = useState(false);
  const show_hide = (e)=>{
    setOpen(!open);
  }
  return (
    <div className='component-dropdownlist'>
        <div className='dropdownlist-header'>
            <div className='dropdownlist-header__text'>{headerText}</div>
            <div>
              <img src={arrow} alt ="Flèche Haut/Bas" onClick={show_hide} 
                         className={open ? 'dropdownlist-header__image--opened' : 'dropdownlist-header__image--closed'}/>
            </div>
        </div> 
        <div className='dropdownlist-content'>
            <div className={open ? 'dropdownlist-content--opened' : 'dropdownlist-content--closed'}>{contentText}</div>            
        </div> 
    </div>
  )
}
