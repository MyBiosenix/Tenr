import React, { useState, useRef } from 'react';
import '../styles/contactcomp.css';
import { FaWhatsapp, FaEnvelope, FaMapMarker } from 'react-icons/fa';
import ThankContact from '../Modals/ThankContact';
import {sendForm} from '@emailjs/browser';

function ContactComp() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [subject, setSubject] = useState('');
  const [subjectError, setSubjectError] = useState('');
  const [message, setMessage] = useState('');
  const [messageError, setMessageError] = useState('');

  const form = useRef();

  const handlesend = (e) => {
    e.preventDefault();

    
    setNameError('');
    setEmailError('');
    setSubjectError('');
    setMessageError('');

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    
    if (!emailRegex.test(email) || email === '') {
      setEmailError('Invalid Email Format!');
      return;
    } else if (name === '') {
      setNameError('Name is Required');
      return;
    } else if (subject === '') {
      setSubjectError('Subject is Required');
      return;
    } else if (message === '') {
      setMessageError('MessageBox is Empty');
      return;
    }

    
    sendForm(
      'service_3ph5q4r',       
      'template_tau4xza',      
      form.current,
      'o_U3lf5LYY7oQUho7'        
    ).then(
      (result) => {
        console.log(result.text);
        setShowModal(true);
        
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
        setTimeout(() => {
          setShowModal(false);
        }, 5000);
      },
      (error) => {
        console.error(error.text);
      }
    );
  };

  return (
    <div className='mycontact'>
      <h2 className='ch2'>Contact Us!</h2>
      <div className='in-contact'>
        <form ref={form} onSubmit={handlesend} className='form'>
          <h3>Send a Message</h3>

          <input
            type='text'
            name='name'
            placeholder='Enter Your Name*'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          {nameError && <p className='error'>{nameError}</p>}

          <input
            type='text'
            name='email'
            placeholder='Enter Email Id*'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {emailError && <p className='error'>{emailError}</p>}

          <input
            type='text'
            name='subject'
            placeholder='Enter Subject*'
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
          {subjectError && <p className='error'>{subjectError}</p>}

          <textarea
            name='message'
            placeholder='Enter Your Message to us*'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          {messageError && <p className='error'>{messageError}</p>}

          <button type='submit'>Send</button>
        </form>

        <div className='mydetails'>
          <div className='tags'>
            <FaWhatsapp className='myetag'/>
            <div className='intag'>
              <h2>Chat Support!</h2>
              <h3>
                <a href="https://wa.me/919326381972" target="_blank" rel="noopener noreferrer">
                  +91 93263 81972
                </a>
              </h3>
            </div>
          </div>
          <div className='tags'>
            <FaEnvelope className='myetag'/>
            <div className='intag'>
              <h2>Email Id!</h2>
              <h3>
                <a href="mailto:info@tenrglobalsolution.com">
                  info@tenrglobalsolution.com
                </a>
              </h3>
            </div>
          </div>
          <div className='tags'>
            <FaMapMarker className='myetag'/>
            <div className='intag'>
              <h2>Address!</h2>
              <h3><a
                href="https://www.google.com/maps/search/?api=1&query=27th+Main,+Sector+6,+HSR+Layout,+Bangalore,+Karnataka,+India-560102"
                target="_blank"
                rel="noopener noreferrer">
                  1st Floor, 4th B Main, OMBR Layout, Banaswadi, , BANGALORE, Karnataka, India - 560043.
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>

      {showModal && <ThankContact />}
    </div>
  );
}

export default ContactComp;
