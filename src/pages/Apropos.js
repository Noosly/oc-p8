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
        <DropDownList headerText="Header" contentText="Content" />
        <h2>DropDown</h2>
        <h2>DropDown</h2>
        <h2 >DropDown</h2>
        <h2>DropDown</h2>
        <h2>DropDown</h2>
        <h2>DropDown</h2>

      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
