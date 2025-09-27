import React from 'react'
import { Helmet } from 'react-helmet'   // ✅ Add Helmet
import Header from '../components/Header'
import ReviewComp from '../components/ReviewComp'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'
import '../styles/reviewpage.css'

function ReviewPage() {
  return (
    <div className='myrpage'>
    
      <Helmet>
        <title>Customer Reviews & Testimonials | Tenr Global Solution</title>
        <meta 
          name="description" 
          content="Read genuine customer reviews and testimonials about Tenr Global Solution. Discover why clients trust our IT and business services." 
        />
        <link rel="canonical" href="https://tenrglobalsolution.com/reviews" />
        <meta 
          name="keywords" 
          content="Tenr Global Solution reviews, customer testimonials, ratings, client feedback" 
        />
        <meta property="og:title" content="Customer Reviews - Tenr Global Solution" />
        <meta 
          property="og:description" 
          content="See real feedback and ratings from clients of Tenr Global Solution. Explore why we’re trusted for IT and business services." 
        />
        <meta property="og:url" content="https://tenrglobalsolution.com/reviews" />
        <meta property="og:image" content="https://tenrglobalsolution.com/logo.png" />
      </Helmet>

      <div className='sticky-header'>
        <Header/>  
      </div>

      <ReviewComp/>
      <FAQ/>
      <Footer/> 
      <ScrollTop/>
    </div>
  )
}

export default ReviewPage
