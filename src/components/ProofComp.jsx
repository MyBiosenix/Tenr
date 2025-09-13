import React from 'react'
import '../styles/proofs.css'
import { FaRegCalendarAlt, FaDownload } from 'react-icons/fa'
import { MdMenu } from 'react-icons/md';

function ProofComp() {
  return (
    <div className='prof'>
        <h2>Project Brochers</h2>
      <div className='brochers'>
        <div className='in-prof'>
            <FaRegCalendarAlt className='mycal'/>
            <h3>Data Conversion Project Brouchers</h3>
            <a
                    href="/ACEWOK-DATA-CONVERSION-PROJECT.pdf"
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
                    href="/ACEWOK-DATA-SEGREGATION-PROJECT.pdf"
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
                    href="/ACEWOK-CAPTCHA-PROJECT-1.pdf"
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
                    href="/ACEWOK-BANK-DETAILS-2020.pdf"
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
                    href="/ACEWOK-BANK-DETAILS-2021.pdf"
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
                    href="/ACEWOK-BANK-DETAILS-2022.pdf"
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
                    href="/ACEWOK-BANK-DETAILS-2023.pdf"
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
                    href="/ACEWOK-BANK-DETAILS-2024.pdf"
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
                    href="/ACEWOK-BANK-DETAILS-2025.pdf"
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