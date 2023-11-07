import React, {useState} from 'react'
import arrow from '../assets/arrow.png'
import '../styles/dropdownlist.css'

export default function DropDownList({headerText, contentText}) {  
  const [open, setOpen] = useState(true);
  //let arrow_rotation = 0;
  const show_hide = (e)=>{
    setOpen(!open);
    /*const header_btn = document.querySelector('.dropdownlist-header__image')
    const content = document.querySelector('.dropdownlist-content')
    if(arrow_rotation == 0 ){
        arrow_rotation = 180
        header_btn.style.transform = `rotate(${arrow_rotation}deg)`
        content.style.display = 'none'
    }else{
        arrow_rotation = 0 
        header_btn.style.transform = `rotate(${arrow_rotation}deg)`
        content.style.display = 'block'
    }  
    */

  }
  return (
    <div className='component-dropdownlist'>
        <div className='dropdownlist-header'>
            <div className='dropdownlist-header__text'>{headerText}</div>
            <div>
              <img src={arrow} alt ="Flèche Haut/Bas" onClick={show_hide} className={open ? 'dropdownlist-header__image--closed' : 'dropdownlist-header__image--opened'}/>
            </div>
        </div> 
        <div className='dropdownlist-content'>
            <div className={open ? 'dropdownlist-content--opened' : 'dropdownlist-content--closed'}>{contentText}</div>            
        </div> 
    </div>
  )
}
