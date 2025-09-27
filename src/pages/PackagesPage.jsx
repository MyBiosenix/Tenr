import React from 'react' 
import { Helmet } from 'react-helmet'   // ✅ Added Helmet
import Header from '../components/Header'
import Footer from '../components/Footer'
import Project from '../components/Project'
import Project2 from '../components/Project2'
import Project3 from '../components/Project3'
import ScrollTop from '../components/ScrollTop'
import '../styles/packages.css'

function PackagesPage() {
  return (
    <div className='packages'>
      
      {/* ✅ Helmet SEO Tags */}
      <Helmet>
        <title>Plans & Packages | Tenr Global Solution</title>
        <meta 
          name="description" 
          content="Choose from a variety of plans and packages at Tenr Global Solution — Data Conversion, Data Segregation, and Bank Captcha Verifier projects with affordable pricing." 
        />
        <link rel="canonical" href="https://tenrglobalsolution.com/packages" />
        <meta 
          name="keywords" 
          content="Tenr Global Solution packages, Data Conversion plans, Data Segregation plans, Bank Captcha Verifier plans, pricing" 
        />
        <meta property="og:title" content="Plans & Packages - Tenr Global Solution" />
        <meta 
          property="og:description" 
          content="Discover our pricing packages for Data Conversion, Data Segregation, and Bank Captcha Verifier projects at Tenr Global Solution." 
        />
        <meta property="og:url" content="https://tenrglobalsolution.com/packages" />
        <meta property="og:image" content="https://tenrglobalsolution.com/TENr LOGO.png" />
      </Helmet>

      <div className='sticky-header'>
        <Header/>
      </div>
      
      <Project/>    
      <Project2/>   
      <Project3/>  
      
      <Footer/>
      <ScrollTop/>
    </div>
  )
}

export default PackagesPage
