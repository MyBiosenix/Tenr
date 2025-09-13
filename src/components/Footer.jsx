import React, { useState } from 'react'
import '../styles/footer.css'
import { FaWhatsapp, FaEnvelope, FaMapMarker, FaAngleRight} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function Footer() {
  const navigate = useNavigate();
  return (
    <div className='footer'>
      <div className='in-footer'>
        <div className='myalert'>
          <h2>Stay Alert! Protect Yourself from Online Frauds</h2>
          <div className='in-myalert'>
            <div className='getalerts'>
              <FaAngleRight className='symbol'/>
              <p>PAYMENT SHOULD ALWAYS BE DONE ON OUR OFFICIAL BANKING NAME “TENR Global Solution” OUR LINKED PAYMENT PARTNERS - MSWIPE & BIJILIPAY</p>
            </div>
            <div className='getalerts'>
              <FaAngleRight className='symbol'/>
              <p>(On scanning MSWIPE & BIJILIPAY Scanner/UPI ID - Company name “TENR Global Solution” will be displayed & then proceed for further payments)</p>
            </div>
            <div className='getalerts'>
              <FaAngleRight className='symbol'/>
              <p>OUR EXECUTIVES WILL ONLY SHARE SCANNER/UPI ID - DISPLAYING (when scanned) “TENR Global Solution”</p>
            </div>
            <div className='getalerts'>
              <FaAngleRight className='symbol'/>
              <p>IF ANY PERSONAL NAMES GETS DISPLAYED PRETENDING TO BE OFFICIALS THEN DON’T PROCEED FURTHER AS HE/SHE ARE NOT US & NOR LINKED WITH OUR FIRM.</p>
            </div>
            <div className='getalerts'>
              <FaAngleRight className='symbol'/>
              <p>IF ANY PAYMENT RELATED QUERY CONTACT OUR CHAT SUPPORT FOR JOINING GUIDANCE.</p>
            </div>

          </div>
        </div>

        <div className='support'>
          <h2>Support</h2>

          <div className='in-support'>
            <FaWhatsapp className='mytags' />
            <a href="https://wa.me/919326381972" target="_blank" rel="noopener noreferrer">
              +91 9326381972
            </a>
          </div>

          <div className='in-support'>
            <FaEnvelope className='mytags' />
            <a href="mailto:info@tenrglobalsolution.com">
              info@tenrglobalsolution.com
            </a>
          </div>

          <div className='in-support'>
            <FaMapMarker className='mytags' />
            <a 
              href="https://www.google.com/maps/search/?api=1&query=27th+Main,+Sector+6,+HSR+Layout,+Bangalore,+Karnataka,+India-560102" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              1st Floor, 4th B Main, OMBR Layout, Banaswadi, , BANGALORE, Karnataka, India - 560043.
            </a>
          </div>
        </div>


        <div className='legalities'>
          <h2 className='onme' onClick={() => navigate('/complain')}>Submit Complain(if any)</h2>
          <p>Complaints Will be solved within 3 Working Days.</p>
          <a 
            href="/Acewok-Technologies-CIN.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className='onme' 
            style={{ textDecoration: 'none', color: 'black' }}>
              Company Legal Document CIN
          </a>
          <p>Copyright © 2025 TENR Global Solution Private Limited All Rights Reserved</p>
        </div>
      </div>
      
    </div>
  )
}

export default Footer
