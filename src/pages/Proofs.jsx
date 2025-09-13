import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProofComp from '../components/ProofComp'
import '../styles/proofs.css'

function Proofs() {
  return (
    <div className='proofs'>
      <div className = 'sticky-header'>
        <Header/>
      </div>
      <ProofComp/>
      <Footer/>
    </div>
  )
}

export default Proofs
