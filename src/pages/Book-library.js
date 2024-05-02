import React from 'react'

export default function Library(){
    return (
        <>
        <a href={process.env.PUBLIC_URL + '/library/index.html'} target="_blank">Book Library</a>
        </>
    )
}

// Not in use