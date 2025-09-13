import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ComplainComp from '../components/ComplainComp'
import '../styles/complain.css'

function Complain() {
  return (
    <div className='complain'>
      <div className='sticky-header'>
        <Header/>
      </div>
      <ComplainComp/>
      <Footer/>
    </div>
  )
}

export default Complain
