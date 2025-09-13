import React from 'react'
import Header from '../components/Header'
import ContactComp from '../components/ContactComp'
import '../styles/contact.css'
import Footer from '../components/Footer'

function Contact() {
  return (
    <div className='contact'>
      <div className='sticky-header'>
        <Header/>
      </div>
      <ContactComp/>
      <Footer/>
    </div>
  )
}

export default Contact
