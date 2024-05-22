import React from 'react';
import BouncingArrow from './BouncingArrow'

export default function Header(){

    return (
        <header className="header">
            <span>Ryan Irani</span>
            <span className='second-header'>Full Stack Web Developer</span>
            <p className="intro-text">From mending bodies to crafting pixels, I'm a frontend developer with a unique journey. As a former physiotherapist turned coding enthusiast, I bring a blend of precision, creativity, and empathy to every project.</p>
            <BouncingArrow />
        </header>
    )
}