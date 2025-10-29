import React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../components/Header'
import Detail from '../components/Detail'
import About from '../components/About'
import Type from '../components/Type'
import Qualities from '../components/Qualities'
import Process from '../components/Process'
import Project from '../components/Project'
import Project2 from '../components/Project2'
import Project3 from '../components/Project3'
import Reviews from '../components/Reviews'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'
import '../styles/home.css'

function Home() {
  return (
    <div className='myhome'>
      <Helmet>
        <title>Tenr Global Solution | IT & Business Consulting</title>
        <meta  
          name="description"
          content="Tenr Global Solution is a reputed freelancing platform offering diverse job opportunities, including reliable data entry positions."
        />
        <meta 
          name="keywords"
          content="Tenr Global Solution, Freelancing Platform, Remote Freelancing Work, Data Entry"
        />
        <meta property='og:title' content='Tenr Global Solution'/>
        <meta property='og:description' content='We Provide Remote Freelancing Opportunities Globally'/>
        <meta property='og:url' content='https://tenrglobalsolution.com'/>
        <meta property='og:image' content='https://tenrglobalsolution.com/TENr LOGO.png'/>
      </Helmet>
      <Header/>
      <Detail/>
      <About/>
      <Type/>
      <Qualities/>
      <Process/>
      <Project/>
      <Project2/>
      <Project3/>
      <Reviews/>
      <Footer/>
      <ScrollTop/>
    </div>
  )
}

export default Home
