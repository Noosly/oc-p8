import React from 'react'
import fullStar from '../assets/full-star.png'
import emptytStar from '../assets/empty-star.png'
import '../styles/stars.css'



export default function Stars({rating}) {
  const maxRating = 5
  let stars = []
  for(let i = 1; i <= rating; i = i +1){
    stars.push(fullStar)
  }
  for(let i = rating + 1; i < maxRating; i = i +1){
    stars.push(emptytStar)
  }
  return (
    <div className='stars-component'>
      {stars.map((star, index) => (
        <img key={index} src={star} alt='Rating star' className='stars-component__star'/>
      ))}
    </div>
  )
}
