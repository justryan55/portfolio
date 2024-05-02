import React from 'react'
import CSS from '../images/css3-original.svg'
import HTML from '../images/html5-original.svg'
import JS from '../images/javascript-original.svg'
import ReactImg from '../images/react-original.svg'
import Node from '../images/nodejs-original-wordmark.svg'

export default function Skills(){
    return (
        <div className="skills-container">
            <div className="skills-slide">
                <img src={CSS} alt="CSS"></img>
                <img src={HTML} alt="HTML"></img>
                <img src={JS} alt="Javascript"></img>
                <img src={ReactImg} alt="React"></img>
                <img src={Node} alt="Node.js"></img>
                <img src={CSS} alt="CSS"></img>
                <img src={HTML} alt="HTML"></img>
                <img src={JS} alt="Javascript"></img>
                <img src={ReactImg} alt="React"></img>
                <img src={Node} alt="Node.js"></img>
            </div>
        </div>
    )
}