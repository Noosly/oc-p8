import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/card.css'


export default function Card({id, title, cover}) {
  const  card_link = '/FicheLogement/' + {id}
  return (    
      <Link className='card' to={card_link}>       
          <img className='card__cover' src={cover} alt='Aperçu du logement'/>
          <div className='card__title'>{title}</div>      
      </Link>
  )
}
