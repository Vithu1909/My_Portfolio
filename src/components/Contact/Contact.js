import React, { useRef } from 'react'
import './Contact.css'
import micro from '../../Assets/microsoft.png'
import fb1 from '../../Assets/fb1.png'
import fb from '../../Assets/facebook.png'
import insta from '../../Assets/insta.png'

import twi from '../../Assets/twitter.png'
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

   
    emailjs
      .sendForm('service_ktycp31', 'emplate_mvsl5su', form.current, {
        publicKey: 'PsIntMeeLXCIBU2DyyJ38',
      })
    

      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Email sent');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return ( 
    <section id='contactpage'>
        <div id='client'>
        <h1 className='client-tittle'>My Clients</h1>
             <p className='client-para'>
             I have had the opportunity to work with a diverse group of companies.
                Some of the notable companies I have worked with includes
             </p>
             <div className='client-imgs'> 
                <img className='client-img' src={micro} alt=''/>
                <img className='client-img' src={micro} alt=''/>
                <img className='client-img' src={micro} alt=''/>
                <img className='client-img' src={micro} alt=''/>
               
  
             </div>  
             

        </div>  
        <div id='contact'>
            <h1 className='client-tittle'>Contact Me</h1>
            <p className='client-para'>Please fill out the form below to discussIany work opportunities. </p>
            <form  className='contact-form' ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Your Name' name='user_name'/>
                <input type="email" className="email" placeholder='Your Email' name='user_email'/>  
                <textarea className='message' name='message' rows="5" placeholder='Your Message'/>
                <button className='sub-but' type='submit' value="sent">Sumbit</button>
                <div className='links'>  
                    <img className='link'src={fb} alt=''/>
                    <img className='link'src={insta} alt=''/> 
                    <img className='link'src={twi} alt=''/>
                  
                </div>

            </form>
             
          
        </div>

    </section>
  )
}

export default Contact