import React from 'react'

import Footer from '../components/Footer'
import Menu from '../components/Menu'
import '../styles/not-found.css'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='notfound-component'>
      <header>
        <Menu />
      </header>
      <main>
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/">Retourner sur la page d’accueil</Link>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
