import React from "react";


const EntryDetail =  ({entry}) => {

    if(!entry){
        return (
            <p>Loading...</p>
        )
    } console.log(entry)
    
    return (
        <p>I have some details about that time when you felt:  </p>
    )
}

export default EntryDetail;