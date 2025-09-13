import React from 'react'
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import Proofs from './pages/Proofs'
import Contact from './pages/Contact'
import PackagesPage from './pages/PackagesPage'
import ReviewsPage from './pages/ReviewsPage'
import Complain from './pages/Complain'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div>
      <Router>
        <ScrollToTop/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/services' element={<ServicesPage/>}/>
            <Route path='/proofs' element={<Proofs/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/packages' element={<PackagesPage/>}/>
            <Route path='/reviews' element={<ReviewsPage/>}/>
            <Route path='/Complain' element={<Complain/>}/>
          </Routes>
      </Router>
    </div>
  )
}

export default App
