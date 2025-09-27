import React from 'react'
import { Helmet } from 'react-helmet'   // ✅ Added Helmet
import Header from '../components/Header'
import ContactComp from '../components/ContactComp'
import '../styles/contact.css'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'

function Contact() {
  return (
    <div className='contact'>
      
      <Helmet>
        <title>Contact Us | Tenr Global Solution</title>
        <meta 
          name="description" 
          content="Get in touch with Tenr Global Solution for inquiries about our IT and business services. Contact us today to learn how we can help you to grow financially." 
        />
        <link rel="canonical" href="https://tenrglobalsolution.com/contact" />
        <meta 
          name="keywords" 
          content="Contact Tenr Global Solution, support, inquiries, IT consulting contact, business solutions contact" 
        />
        <meta property="og:title" content="Contact Tenr Global Solution" />
        <meta 
          property="og:description" 
          content="Reach out to Tenr Global Solution — we're here to answer your questions about our services and packages." 
        />
        <meta property="og:url" content="https://tenrglobalsolution.com/contact" />
        <meta property="og:image" content="https://tenrglobalsolution.com/TENr LOGO.png" />
      </Helmet>

      <div className='sticky-header'>
        <Header/>
      </div>
      
      <ContactComp/>
      <Footer/>
      <ScrollTop/>
    </div>
  )
}

export default Contact
