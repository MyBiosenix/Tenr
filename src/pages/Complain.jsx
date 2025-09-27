import React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ComplainComp from '../components/ComplainComp'
import ScrollTop from '../components/ScrollTop'
import '../styles/complain.css'

function Complain() {
  return (
    <div className='complain'>
      <Helmet>
        <title>Report a Complain | Tenr Global Solution</title>
        <meta
          name='description'
          content='Report a Complain and Make us aware if someone has done fraud with you using our Name'
        />
        <link rel="canonical" href="https://tenrglobalsolution.com/complain" />
        
      </Helmet>
      <div className='sticky-header'>
        <Header/>
      </div>
      <ComplainComp/>
      <Footer/>
      <ScrollTop/>
    </div>
  )
}

export default Complain
