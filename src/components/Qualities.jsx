import React from 'react'
import QualityProp from '../props/QualityProp'
import { FaLaptop, FaLanguage, FaKey, FaGlobe, FaLock } from 'react-icons/fa';
import { FiHeadphones } from 'react-icons/fi'; 
import '../styles/qualities.css'

function Qualities() {
  return (
    <div className='qualities'>
        <h2><u>Why Choose Us</u></h2>
      <div className='onerow'>
        <QualityProp icon={<FaLaptop/>} 
        title="Devices" 
        description="If you have a laptop, PC, tablet, or mobile, you can work from anywhere. We provide you with all the necessary features."/>
        
        <QualityProp icon={<FiHeadphones/>}
        title="Support"
        description="We offer support 24/7"/>

        <QualityProp icon={<FaLanguage/>}
        title="Language"
        description="We offer straightforward and uncomplicated tasks that require basic knowledge of browsing, English, and Hindi languages from the user."/>
      
      </div>
      <div className='onerow'>
        
        <QualityProp icon={<FaKey/>}
        title="Compatibility"
        description="We aim to make your experience smooth and consistent across the most popular web browsers."/>

        <QualityProp icon={<FaGlobe/>}
        title="Delivery"
        description="More than 5M+ successful project delivered"/>

        <QualityProp icon={<FaLock/>}
        title="Secure"
        description="We offer ultimate security through 2FA (Two-Factor Authentication) with our system."/>

      </div>
    </div>
  )
}

export default Qualities
