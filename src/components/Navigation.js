import React from 'react';
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export default function Navigation(){
    return (
        <div className="navigation">
            <div className="logo">Ryan Irani</div>
            <ul className="menu">
                <li><ScrollLink to="header" smooth={true} duration={500}>Home</ScrollLink></li>
                <li><ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink></li>
                <li><ScrollLink to="project-section" smooth={true} duration={500}>Projects</ScrollLink></li>
                <li><ScrollLink to="contact-section" smooth={true} duration={500}>Contact</ScrollLink></li>
            </ul>
        </div>
    )
}