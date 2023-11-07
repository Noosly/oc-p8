import React from 'react'
import Footer from '../components/Footer'
import Menu from '../components/Menu'
import Slider from '../components/Slider'
import '../styles/fiche-logement.css'
import DropDownList from '../components/DropDownList'
export default function FicheLogement() {
  let description = 'Description du logement de la fiche logement'
  let equipments = 'Liste des équipements disponibles dans le logement'
  return (
    <div className='page-fiche-logement'>           
      <header>
        <Menu className='menu'/>
      </header>
      <main>
        <Slider />
        <div className='flex-row'>
          <div className='logement'>     
            <div>Name</div>       
            <div>Location</div>       
          </div>
          <div className='user'>  
            <div>Avatar</div>       
            <div>Full Name</div>           
          </div>        
        </div>
        <div className='flex-row'>
          <div className='flex-row'> 
                 
          </div>
          <div className='flex-row'>            
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
