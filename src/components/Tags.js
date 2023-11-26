import React from 'react'
import '../styles/tags.css'

export default function Tags({tags}) {
  return (
    <div className='tags-component'>
      {tags.map((tag, index) => (
        <div className='tags-component__tag' key={index}>{tag}</div>
      ))}
      
    </div>
  )
}
