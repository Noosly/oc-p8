import React from 'react'
import banner_bg_image from '../assets/bg_apropos.png'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import DropDownList from '../components/DropDownList'
import '../styles/apropos.css'
export default function Apropos() {
  return (
    <div className='page-apropos'>
      <header>
        <Banner title="" image={banner_bg_image} />

      </header>
      <main>
        <DropDownList headerText="Fiabilité" contentText="Les annonces postées sur Kasa garantissent une fiabilité totale. 
        Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." />
        <DropDownList headerText="Respect" contentText="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout 
        comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
        <DropDownList headerText="Service" contentText="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
        comportement discréminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
        <DropDownList headerText="Sécurité" contentText="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour
        les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien 
        à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également
        des ateliers sur la sécurité domestique pour nos hôtes." />

      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
