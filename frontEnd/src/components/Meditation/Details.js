import React from 'react'

function Details(props) {
    return (
        <>
        <div className="c-details">
        <h3>This is the Detail: {props.song.title}</h3>
            
        </div>
        
        </>
    )
}

export default Details
