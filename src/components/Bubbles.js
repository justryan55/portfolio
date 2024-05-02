import React from 'react'
import './Bubbles.css'

export default function Bubbles() {
    return (
        <div className="container">
            <div className="bubbles">
                <span style={{'--i': 11}}></span>
                <span style={{'--i': 12}}></span>
                <span style={{'--i': 24}}></span>
                <span style={{'--i': 10}}></span>
                <span style={{'--i': 14}}></span>
                <span style={{'--i': 18}}></span>
                <span style={{'--i': 16}}></span>
                <span style={{'--i': 10}}></span>
                <span style={{'--i': 21}}></span>
                <span style={{'--i': 22}}></span>
                <span style={{'--i': 25}}></span>
            </div>
        </div>
    );
}
