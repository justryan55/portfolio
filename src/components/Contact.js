import React from 'react';

export default function Contact(){
    return (
        <div className="contact-section">
            <div className="contact-header">Contact</div>
            <p className="contact-text">Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.</p>
            <form>
                <label htmlFor='name'>
                    <input type="text" id="name" placeholder="Name"></input>
                </label>
                <label htmlFor='email'>
                    <input type="text" id="email" className="input-email" placeholder="Email"></input>
                </label>
                <label htmlFor='message'>
                    <input type="text" id="message" className="input-message" placeholder="Message"></input>
                </label>
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    )
}