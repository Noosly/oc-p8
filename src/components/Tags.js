import React from 'react'
import '../styles/tags.css'

export default function Tags({tags}) {
  return (
    <div className='tags-component'>
      {tags.map(tag => (
        <div className='tags-component__tag'>{tag}</div>
      ))}
      
    </div>
  )
}
