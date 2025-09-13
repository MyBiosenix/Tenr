import React,{useState, useRef} from 'react'
import '../styles/complain.css'
import ComplainModal from '../Modals/ComplainModal';
import {sendForm} from '@emailjs/browser'

function ComplainComp() {
    const [showModal, setShowModal] = useState(false);
    const [fname, setFname] = useState('');
    const [fnameError, setFnameError] = useState('');
    const [lname, setLname ] = useState('');
    const [lnameError, setLnameError] = useState('');
    const [phone, setPhone] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [rid, setRid] = useState('');
    const [ridError, setRidError] = useState('');
    const [complain, setComplain] = useState('');
    const [complainError, setComplainError] = useState('');

    const form = useRef();

    const handleComplain = (e) => {
        e.preventDefault();

        setFnameError('');
        setLnameError('');
        setPhoneError('');
        setEmailError('');
        setRidError('');
        setComplainError('');

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if(fname === '' || lname === '' || phone === '' || email === '' || rid === '' || complain === ''){
            alert('Please Fill all the Fields');
        }

        else if(!emailRegex.test(email)){
            setEmailError('Invalid Email Format');
            return;
        }
        else if(!/^\d{10}$/.test(phone)){
            setPhoneError('Phone Number Must be of exantly 10 Digits')
            return;
        }
        sendForm(
            'service_g9hhbtg',
            'template_1jo49di',
            form.current,
            'o_U3lf5LYY7oQUho7'
        ).then(
            (result) => {console.log(result.text);
                setShowModal(true);

                setFname('');
                setLname('');
                setPhone('');
                setEmail('');
                setRid('');
                setComplain('');

                setTimeout(() => {
                    setShowModal(false);
                },5000)
            },
            (error) => {
                console.log(error.text);
            }
        );
    };

  return (
    <div className='complaincomp'>
        <div className='conts'>
            <p>We are not Solving complaints from other websites because we are not checking those websites. We are solving only complaints submitted on our website.<br/>
                This Complaint form is for recruited Typists (freelancers).<br/>
                Fill complaint form given below. We will solve complaint within 3 working days.
            </p>
            <p className='note'>NOTE: If you are new applicant and you have any issue then you can send emails to contact@tenrglobalsolution.com</p>
        </div>
        <div className='comp-form'>
            <form className='in-compform' ref={form} onSubmit={handleComplain}>
                <div className='name'>
                    <input 
                        type='text' 
                        placeholder='Enter First Name*' 
                        name='fname' 
                        value={fname}
                        onChange={(e) => setFname(e.target.value)}
                        required/>

                    <input 
                        type='text' 
                        placeholder='Enter Last Name*' 
                        name='lname' 
                        value={lname}
                        onChange={(e) => setLname(e.target.value)}
                        required/>
                </div>

                <div className='name'>
                    <input 
                        type='text' 
                        placeholder='Enter Phone Number*' 
                        name='phone'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)} 
                        required/>
                    {phoneError && <p className='error'>{phoneError}</p>}

                    <input 
                        type='text' 
                        placeholder='Enter Email Id*' 
                        name='email' 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required/>
                    {emailError && <p className='error'>{emailError}</p>}
                </div>

                <div className='name1'>
                    <input 
                        type='text' 
                        placeholder='Enter Registration Id*' 
                        name='registration_id'
                        value={rid}
                        onChange={(e) => setRid(e.target.value)} 
                        required/>

                    <textarea 
                        placeholder='Write your complain here*' 
                        name='complain' 
                        value={complain}
                        onChange={(e) => setComplain(e.target.value)}
                        required/>
                </div>
                <button type='submit'>Submit Complain</button>
            </form>
        </div>
        {showModal && <ComplainModal />}
    </div>
  )
}

export default ComplainComp
