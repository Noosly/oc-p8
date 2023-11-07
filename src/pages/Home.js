import React from 'react'
import Banner from '../components/Banner'
import Card from '../components/Card'
import '../styles/home.css'
import banner_bg_image from '../assets/bg_home.png'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="page-home"> 
      <header>
        <Banner title="Chez vous, partout ailleurs" image={banner_bg_image} />
      </header>
      <main>        
        <div className='gallery'>
          <Card id="c67ab8a7" title="Appartement cosy" cover="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg" />
          <Card id="c67ab8a7" title="Appartement cosy" cover="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg" />
          <Card id="c67ab8a7" title="Appartement cosy" cover="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg" />
          <Card id="c67ab8a7" title="Appartement cosy" cover="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg" />
          <Card id="c67ab8a7" title="Appartement cosy" cover="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg" />
          <Card id="c67ab8a7" title="Appartement cosy" cover="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg" />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
      

      
    </div>
  )
}
