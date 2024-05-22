import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';

export default function Contact(){

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm('service_mp96p5t', 'template_8gg2uao', form.current, {
          publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );        
    }

    return (
        <div className="contact-section">
            <div className="contact-header">Contact</div>
            <p className="contact-text">Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.</p>
            <form ref={form} onSubmit={sendEmail}>
                <label htmlFor='name'>
                    <input type="text"
                           name='name' 
                           id="name" 
                           placeholder="Name" />
                </label>
                <label htmlFor='email'>
                    <input type="email"
                           name='email' 
                           id="email" 
                           className="input-email" 
                           placeholder="Email" />
                </label>
                <label htmlFor='message'>
                    <textarea id="message" 
                              name='message'
                              className="input-message" 
                              placeholder="Message" />
                </label>
                <button type='submit' 
                        className='submit-btn'
                        value='Send'>
                            Submit
                </button>
            </form>
        </div>
    )
}