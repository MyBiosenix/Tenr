import React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AboutComp from '../components/AboutComp'
import ScrollTop from '../components/ScrollTop'
import '../styles/aboutpage.css'

function About() {
  return (
    <div className='abpage'>
      <Helmet>
        <title>About | TENR Global Solution</title>
        <meta
          name='description'
          content='Learn more about TENR Global Solution - our mission, vision and services we provide to empower freelancing worldwide.'
        />
        <link rel="canonical" href="https://tenrglobalsolution.com/about" />
        <meta
          name='keywords'
          content='About Tenr Global Solution, company information, Trusted Remote Work'
        />
        <meta property='og:title' content='About Tenr Global Solution'/>
        <meta
          property='og:description'
          content='Discover who we are and what drives Tenr Global Solutions to be a Trusted Platform for Providing Freelancing opportunities globally.'
        />
        <meta property='og:url' content='https://tenrglobalsolution.com/about' />
        <meta property='og:image' content='https://tenrglobalsolution.com/TENr LOGO.png'/>
      </Helmet>
      <div className='sticky-header'>
        <Header/>
      </div>
        <AboutComp/>
        <Footer/>
        <ScrollTop/>
    </div>
  )
}

export default About
