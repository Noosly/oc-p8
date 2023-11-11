import React from 'react'
import Footer from '../components/Footer'
import Menu from '../components/Menu'
import Slider from '../components/Slider'
import '../styles/fiche-logement.css'
import DropDownList from '../components/DropDownList'
import { useParams } from 'react-router-dom'
import logementsJsonFile from '../logements.json'
import Stars from '../components/Stars'
import Tags from '../components/Tags'

export default function FicheLogement() {
  const params = useParams()
  const idLogement = params.id;
  const logementData = logementsJsonFile.filter((data) => data.id == idLogement)[0]
  
  let description = logementData.description //'Description du logement de la fiche logement'
  let equipments = logementData.equipments //'Liste des équipements disponibles dans le logement'
  let pictures = logementData.pictures
  let title = logementData.title
  let location = logementData.location
  let fullName = logementData.host.name
  let avatarPicture = logementData.host.picture
  let rating = logementData.rating
  
  return (
    <div className='page-fiche-logement'>           
      <header>
        <Menu className='menu'/>
      </header>
      <main>
        <Slider pictures={pictures} />
        <div className='flex-row'>
          <div className='logement'>     
            <div className='logement__title'>{title}</div>       
            <div className='logement__location'>{location}</div>       
          </div>
          <div className='user'>  
            <div className='user__full-name'>{fullName}</div>       
            <img className='user__avatar' src={avatarPicture} alt='avatar picture' />         
          </div>        
        </div>
        <div className='flex-row'>
          <div className='flex-row'> 
            <Tags />
                 
          </div>
          <div className='flex-row'>  
            <Stars rating={rating} />          
          </div>        
        </div>
        <div className='details'>
          <DropDownList headerText='Description' contentText={description}/>
          <DropDownList headerText='Equipements' contentText={equipments} className='details__dropdownlist'/>
        </div>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}
