import React from 'react'
import Header from '../components/Header'
import ReviewComp from '../components/ReviewComp'
import Footer from '../components/Footer'
import '../styles/reviewpage.css'

function ReviewPage() {
  return (
    <div className='myrpage'>
      <div className='sticky-header'>
        <Header/>  
      </div>
      <ReviewComp/>
      <Footer/> 
    </div>
  )
}


export default ReviewPage
