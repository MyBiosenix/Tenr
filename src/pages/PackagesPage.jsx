import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Project from '../components/Project'
import Project2 from '../components/Project2'
import Project3 from '../components/Project3'
import '../styles/packages.css'

function PackagesPage() {
  return (
    <div className='packages'>
      <div className='sticky-header'>
        <Header/>
      </div>
        <Project/>
        <Project2/>
        <Project3/>
        <Footer/>
    </div>
  )
}

export default PackagesPage
