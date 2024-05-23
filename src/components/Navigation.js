import React from 'react';
import { Link as ScrollLink } from "react-scroll";

export default function Navigation(){
    return (
        <div className="navigation">
            <div className="logo">Ryan Irani</div>
            <ul className="menu">
                <li>
                    <ScrollLink
                        to="header"
                        smooth={true}
                        duration={500}
                        spy={true}
                        hashSpy={true}
                    >
                        Home
                    </ScrollLink>
                </li>
                <li>
                    <ScrollLink
                        to="about"
                        smooth={true}
                        duration={500}
                        spy={true}
                        hashSpy={true}
                    >
                        About
                    </ScrollLink>
                </li>
                <li>
                    <ScrollLink
                        to="projects"
                        smooth={true}
                        duration={500}
                        spy={true}
                        hashSpy={true}
                    >
                        Projects
                    </ScrollLink>
                </li>
                <li>
                    <ScrollLink
                        to="contact"
                        smooth={true}
                        duration={500}
                        spy={true}
                        hashSpy={true}
                        offset={-200}
                    >
                        Contact
                    </ScrollLink>
                </li>
            </ul>
        </div>
    )
}