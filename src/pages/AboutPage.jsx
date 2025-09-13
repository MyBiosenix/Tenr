import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AboutComp from '../components/AboutComp'
import '../styles/aboutpage.css'

function About() {
  return (
    <div className='abpage'>
      <div className='sticky-header'>
        <Header/>
      </div>
        <AboutComp/>
        <Footer/>
    </div>
  )
}

export default About
