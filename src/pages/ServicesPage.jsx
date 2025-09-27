import React from 'react'
import { Helmet } from 'react-helmet'   // ✅ Add Helmet
import '../styles/services.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Type from '../components/Type'
import ScrollTop from '../components/ScrollTop'

function ServicesPage() {
  return (
    <div className='services'>
      
      {/* ✅ Helmet SEO Tags */}
      <Helmet>
        <title>Our Services | Tenr Global Solution</title>
        <meta 
          name="description" 
          content="Explore our professional services — Data Conversion Projects, Data Segregation Projects, and Bank CAPTCHA Verifier solutions for businesses and individuals." 
        />
        <link rel="canonical" href="https://tenrglobalsolution.com/services" />
        <meta 
          name="keywords" 
          content="Tenr Global Solution services, Data Conversion Projects, Data Segregation Projects, Bank CAPTCHA Verifier" 
        />
        <meta property="og:title" content="Our Services - Tenr Global Solution" />
        <meta 
          property="og:description" 
          content="Tenr Global Solution offers Data Conversion, Data Segregation, and Bank CAPTCHA Verifier services for businesses and freelancers." 
        />
        <meta property="og:url" content="https://tenrglobalsolution.com/services" />
        <meta property="og:image" content="https://tenrglobalsolution.com/TENr LOGO.png" />
      </Helmet>

      <div className='sticky-header'>
        <Header/>
      </div>
      
      <Type/>
      <Footer/>
      <ScrollTop/>
    </div>
  )
}

export default ServicesPage
