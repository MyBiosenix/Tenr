import React from 'react'
import { FaPaperPlane, FaLayerGroup, FaAward, FaPeace } from 'react-icons/fa';
import '../styles/about.css'

function About() {
  return (
    <div className='about'>
        <h2><u>About Us</u></h2>
        <div className='in-about'>
            <h3>6+ Years Of Your Trust</h3>
            <p><span style={{ color:'#FF7E29'}}>TENR Global Solution Private Limited</span> is a reputable and legitimate research and development organization, specializing in Real, Unique, Genuine, and Legitimate <b>ONLINE HOME JOBS</b>. With over 6  years of experience, we are a leader in providing online home job opportunities not only within India but also worldwide. We are expertise in <b>creating effective job programs through years of research</b>. Beware of scams in the internet world,  <b>“75%</b> of online job offers are deceitful, wasting people’s money and valuable time”. Only <b>25%</b> of companies are genuine based on our experience. <span style={{ color:'#FF7E29'}}>TENR Global Solution</span> aims to provide accurate and up-to-date information about legitimate online job opportunities to help individuals avoid scams.
            <br/> <br/>
            We have assisted <b>thousands of online workers</b> in finding real opportunities to earn money by carefully sorting and researching companies that genuinely pay for the jobs.<span style={{ color:'#FF7E29'}}>TENR Global Solution Private Limited</span> promises to share <b>genuine and real job opportunities</b> with people who are genuinely interested in earning money. The company offers the chance to make money online in one’s spare time <b>from anywhere globally</b>. Our <b>ultimate aim</b> is to help job seekers save <b>time</b> and <b>money</b> in their search for <b>legitimate jobs</b>, allowing them to live a wealthy lifestyle.
            </p>
        </div>
        <div className='features'>
            <div className='in-data'>
                <FaPaperPlane className='icon'/>
                <p>Top Platform with Over 1000 Satisfied Working Professionals.</p>
            </div>
            <div className='in-data'>
                <FaLayerGroup className='icon'/>
                <p>We offer a full money-back guarantee within the specified timeframe.</p>
            </div>
            <div className='in-data'>
                <FaAward className='icon'/>
                <p>We aim to expand our business and reach users all over the World.</p>
            </div>
            <div className='in-data'>
                <FaPeace className='icon'/>
                <p>Business days: Monday-Saturday (11am - 6pm)</p>
            </div>
        </div>
    </div>  
  )
}

export default About
