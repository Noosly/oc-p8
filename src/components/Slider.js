import React from 'react'
import arrow_left  from '../assets/arrow_left.png'
import arrow_right from  '../assets/arrow_right.png'
import '../styles/slider.css'
import test1 from '../assets/bg_home.png'
import { useState } from 'react'

export default function Slider({pictures}) {
  let [index, setIndex] = useState(0)
  const nextSlide = (e) =>{ 
    if(index == pictures.length - 1){
      setIndex(0)
    }else{
      setIndex(index + 1)
    }    
  }
  const previousSlide = (e) =>{
    if(index == 0){
      setIndex(pictures.length - 1)
    }else{
      setIndex(index - 1)
    } 
  }
  return (
    <div className='slider'>    
        <img className="slider__cover" src={pictures[index]} alt="Photos du logement" />		
        <img className="slider__arrow-left" src={arrow_left} alt="flèche gauche" onClick={previousSlide} />
        <img className="slider__arrow-right" src={arrow_right} alt="flèche droite" onClick={nextSlide} />
    </div>
  )
}
  