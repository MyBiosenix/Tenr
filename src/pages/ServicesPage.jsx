import React from 'react'
import '../styles/services.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Type from '../components/Type'

function ServicesPage() {
  return (
    <div className='services'>
      <div className='sticky-header'>
        <Header/>
      </div>
      <Type/>
      <Footer/>
    </div>
  )
}

export default ServicesPage
