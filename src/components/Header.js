import React from 'react';
import arrowImg from '../images/arrow-down.svg'

export default function Header(){
    function handleScroll(){
        window.scroll(() => {
            
        })

    }
    return (
        <header className="header">
            <span>Ryan Irani</span>
            <span>Full Stack Web Developer</span>
            <p className="intro-text">From mending bodies to crafting pixels, I'm a frontend developer with a unique journey. As a former physiotherapist turned coding enthusiast, I bring a blend of precision, creativity, and empathy to every project.</p>
            <img src={arrowImg} 
                 alt='arrow'
                 className='arrow' 
                 onScroll={handleScroll}
            />
        </header>
    )
}