import React from 'react';
import profileImg from '../images/profile.jpeg';
import Carousel from './Carousel';

export default function About(){
    return (
        <div className="about" id="about">
            <p className="section-header">About</p>
            <img src={profileImg} alt="me" className="profile-image"></img>
            <span className="section-text">Hey there! I'm Ryan, a self-taught full stack web developer driven by a passion for creating and building things. With a relentless motivation and love for learning, I'm committed to sharpening my skills and crafting exceptional digital experiences.</span>
            <Carousel />
        </div>
    )
}