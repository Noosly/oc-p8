import React from 'react'
import arrow_left  from '../assets/arrow_left.png'
import arrow_right from  '../assets/arrow_right.png'
import '../styles/slider.css'
import test1 from '../assets/bg_home.png'
export default function Slider() {
  const url = '../assets/arrow_left.png';
  const title = 'title';
  return (
    <div className='slider'>      
        <img class="slider__cover" src={test1} alt="Photos du logement" />		
        <img class="slider__arrow-left" src={arrow_left} alt="flèche gauche" />
        <img class="slider__arrow-right" src={arrow_right} alt="flèche droite" />
    </div>
  )
}
  