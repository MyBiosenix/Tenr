import React from 'react'
import '../styles/proofs.css'
import { FaRegCalendarAlt, FaDownload } from 'react-icons/fa'
import { MdMenu, MdDiamond } from 'react-icons/md';

function ProofComp() {
  return (
    <div className='prof'>
        <h2>Project Brochers</h2>
        <div className='brochers'>
            <div className='in-prof'>
                <MdDiamond className='mycal'/>
                <h3>Data Conversion Diamond Plan</h3>
                <a
                        href="/DIAMOND DATA CONVERSION PROJECT.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='down'
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                    <FaDownload className='mydo'/>
                    <p>Download</p>
                </a>
                
            </div>
            <div className='in-prof'>
                <MdDiamond className='mycal'/>
                <h3>Data Segregation Diamond Plan</h3>
                <a
                        href="/DIAMOND DATA SEGRAGATION PROJECT.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='down'
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                    <FaDownload className='mydo'/>
                    <p>Download</p>
                </a>
            </div>
            <div className='in-prof'>
                <MdDiamond className='mycal'/>
                <h3>Captcha Verifier Diamond Plan</h3>
                <a
                        href="/CAPTCHA DIAMOND CODING PROJECT.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='down'
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                    <FaDownload className='mydo'/>
                    <p>Download</p>
                </a>
            </div>
      </div>
      <div className='brochers'>
        <div className='in-prof'>
            <FaRegCalendarAlt className='mycal'/>
            <h3>Data Conversion Project Brouchers</h3>
            <a
                    href="/DATA CONVERSION PROJECT.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='down'
                    style={{ textDecoration: 'none', color: 'inherit' }}
                >
                <FaDownload className='mydo'/>
                <p>Download</p>
            </a>
            
        </div>
        <div className='in-prof'>
            <FaRegCalendarAlt className='mycal'/>
            <h3>Data Segregation Project Brouchers</h3>
            <a
                    href="/DATA SEGRAGATION PROJECT.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='down'
                    style={{ textDecoration: 'none', color: 'inherit' }}
                >
                <FaDownload className='mydo'/>
                <p>Download</p>
            </a>
        </div>
        <div className='in-prof'>
            <FaRegCalendarAlt className='mycal'/>
            <h3>Captcha Verifier Project Brouchers</h3>
            <a
                    href="/CAPTCHA CODING PROJECT.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='down'
                    style={{ textDecoration: 'none', color: 'inherit' }}
                >
                <FaDownload className='mydo'/>
                <p>Download</p>
            </a>
        </div>
      </div>
      <h2>Payment Proofs</h2>
      <div className='brochers'>
        <div className='in-prof'>
            <FaRegCalendarAlt className='mycal'/>
            <h3>Payment Proofs of 2020</h3>
            <a
                    href="/TRANSACTION DETAILS  JAN TO DEC 2020.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='down'
                    style={{ textDecoration: 'none', color: 'inherit' }}
                >
                <MdMenu className='mydo'/>
                <p>View</p>
            </a>
            
        </div>
        <div className='in-prof'>
            <FaRegCalendarAlt className='mycal'/>
            <h3>Payment Proofs of 2021</h3>
            <a
                    href="/TRANSACTION DETAILS  JAN TO DEC 2021.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='down'
                    style={{ textDecoration: 'none', color: 'inherit' }}
                >
                <MdMenu className='mydo'/>
                <p>View</p>
            </a>
        </div>
        <div className='in-prof'>
            <FaRegCalendarAlt className='mycal'/>
            <h3>Payment Proofs of 2022</h3>
            <a
                    href="/TRANSACTION DETAILS  JAN TO DEC2022.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='down'
                    style={{ textDecoration: 'none', color: 'inherit' }}
                >
                <MdMenu className='mydo'/>
                <p>View</p>
            </a>
        </div>
      </div>
      <div className='brochers'>
        <div className='in-prof'>
            <FaRegCalendarAlt className='mycal'/>
            <h3>Payment Proofs of 2023</h3>
            <a
                    href="/TRANSACTION DETAILS  JAN TO DEC 2023.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='down'
                    style={{ textDecoration: 'none', color: 'inherit' }}
                >
                <MdMenu className='mydo'/>
                <p>View</p>
            </a>
            
        </div>
        <div className='in-prof'>
            <FaRegCalendarAlt className='mycal'/>
            <h3>Payment Proofs of 2024</h3>
            <a
                    href="/TRANSACTION DETAILS  JAN TO DEC 2024 (1).pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='down'
                    style={{ textDecoration: 'none', color: 'inherit' }}
                >
                <MdMenu className='mydo'/>
                <p>View</p>
            </a>
        </div>
        <div className='in-prof'>
            <FaRegCalendarAlt className='mycal'/>
            <h3>Payment Proofs of 2025</h3>
            <a
                    href="/TRANSACTION DETAILS  JAN TO SEPT  2025.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='down'
                    style={{ textDecoration: 'none', color: 'inherit' }}
                >
                <MdMenu className='mydo'/>
                <p>View</p>
            </a>
        </div>
      </div>
    </div>
  )
}

export default ProofComp