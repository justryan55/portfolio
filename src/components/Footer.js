import React from 'react'
import githubIcon from '../images/github-mark.svg'

export default function Footer(){
    return (
        <div className="footer">
            <a href="https://github.com/justryan55?tab=repositories" target="_blank" rel="noreferrer" title="Github">
                <img src={githubIcon} alt="github icon"></img>
            </a>
            <p className="footer-text">Ryan Irani 2024</p>
        </div>
    )
}