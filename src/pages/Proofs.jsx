import React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProofComp from '../components/ProofComp'
import ScrollTop from '../components/ScrollTop'
import '../styles/proofs.css'

function Proofs() {
  return (
    <div className='proofs'>
      <Helmet>
        <title>Payment Proofs and Brochers | Tenr Global Solution</title>
        <meta
          name='description'
          content='Payment Proofs of our Customers who believed us'
        />
        <link rel="canonical" href="https://tenrglobalsolution.com/proofs" />
      </Helmet>
      <div className = 'sticky-header'>
        <Header/>
      </div>
      <ProofComp/>
      <Footer/>
      <ScrollTop/>
    </div>
  )
}

export default Proofs
