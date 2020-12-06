import React from 'react';


const EntryDetail =  ({entry}) => {
    return (
        <p>I have some details about that time when you felt: {entry.prompt} </p>
    )
}

export default EntryDetail;