import React from 'react'
import Banner from '../components/Banner'
import Card from '../components/Card'
import '../styles/home.css'
import banner_bg_image from '../assets/bg_home.png'
import Footer from '../components/Footer'
import logementsJsonFile from '../logements.json'

export default function Home() {
  return (
    <div className="page-home"> 
      <header>
        <Banner title="Chez vous, partout ailleurs" image={banner_bg_image} />
      </header>
      <main>        
        <div className='gallery'>
          {
            logementsJsonFile.map(item => (
              <Card id={item.id} title={item.title} cover={item.cover} />
            ))
          }          
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
