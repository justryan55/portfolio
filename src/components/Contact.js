import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';

export default function Contact(){
    const [isSent, setIsSent] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const form = useRef();

    const handleSubmit = (e) => {
      e.preventDefault();
      sendEmail()
    }

    const sendEmail = () => {
        emailjs
        .sendForm('service_mp96p5t', 'template_8gg2uao', form.current, {
          publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
        })
        .then(
          () => {
            console.log('SUCCESS!');
            setIsSent(true);
            setName('')
            setEmail('')
            setMessage('')
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );        
    }

    return (
        <div className="contact-form">
            <div className="contact-header">Contact</div>
            <p className="contact-text">Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.</p>
            <form ref={form} onSubmit={handleSubmit}>
                <label htmlFor='name'>
                    <input type="text"
                           name='name' 
                           id="name" 
                           placeholder="Name"
                           value={name}
                           onChange={(e) => setName(e.target.value)}
                           />
                           
                </label>
                <label htmlFor='email'>
                    <input type="email"
                           name='email' 
                           id="email" 
                           className="input-email" 
                           placeholder="Email"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           />
                </label>
                <label htmlFor='message'>
                    <textarea id="message" 
                              name='message'
                              className="input-message" 
                              placeholder="Message"
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                              />
                </label>
                <button type='submit' 
                        className='submit-btn'
                        value='Send'
                        >
                            Submit
                </button>
            </form>
            {isSent && <p className='sent-message'>Message has been sent</p>}
        </div>
    )
}