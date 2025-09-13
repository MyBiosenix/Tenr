import React from 'react'
import Header from '../components/Header'
import Detail from '../components/Detail'
import About from '../components/About'
import Type from '../components/Type'
import Qualities from '../components/Qualities'
import Process from '../components/Process'
import Project from '../components/Project'
import Project2 from '../components/Project2'
import Project3 from '../components/Project3'
import Strategy from '../components/Strategy'
import Reviews from '../components/Reviews'
import Footer from '../components/Footer'
import '../styles/home.css'

function Home() {
  return (
    <div className='myhome'>
      <Header/>
      <Detail/>
      <About/>
      <Type/>
      <Qualities/>
      <Process/>
      <Project/>
      <Project2/>
      <Project3/>
      <Strategy/>
      <Reviews/>
      <Footer/>
    </div>
  )
}

export default Home
