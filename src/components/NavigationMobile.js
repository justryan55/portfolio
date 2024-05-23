import React from 'react';
import { useClickAway } from "react-use";
import { useRef } from "react";
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import home from '../images/home.svg';
import about from '../images/user.svg';
import projects from '../images/hard-drive.svg';
import contact from '../images/mail.svg';
import { Link as ScrollLink } from "react-scroll";


export const NavigationMobile = () => {
    const [isOpen, setIsOpen] = useState(false)
    const ref = useRef(null)

    useClickAway(ref, () => setIsOpen(false))

    return (
        <div ref={ref} className='mobile-navigation-button'>
            <Hamburger toggled={isOpen} size={20} toggle={setIsOpen} color='white' />
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                     <ul className="mobile-menu">
                        <li><ScrollLink to='header' smooth={true} duration={500}><img src={home} alt='home'/>Home</ScrollLink></li>
                        <li><ScrollLink to='about' smooth={true} duration={500}><img src={about} alt='about'/>About</ScrollLink></li>
                        <li><ScrollLink to='projects' smooth={true} duration={500}><img src={projects} alt='projects'/>Projects</ScrollLink></li>
                        <li><ScrollLink to='contact' smooth={true} duration={500}><img src={contact} alt='contact'/>Contact</ScrollLink></li>
                    </ul>

                        <motion.li
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                                delay: 0.1,
                            }}
                        >
                        </motion.li>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

