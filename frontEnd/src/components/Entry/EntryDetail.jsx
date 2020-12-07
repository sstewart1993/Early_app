import React from "react";


const EntryDetail =  ({entry}) => {

    if(!entry){
        return (
            <p>Loading...</p>
        )
    }

    const meditationStatus = () => {
        if (!entry.meditation.completed) {
            return (<p>You have completed {entry.mediation.length} minutes of mediation today</p>)
        } return (
            <p>Do you want to do some mediation today?</p>
        )
    }
    
    return (
        <>
        <div className = "entryDetail">
        <h1>{entry.prompt}</h1>
        <p>I have some details about that time when you felt:  </p>
        {meditationStatus}
        </div>
        </>
    )
}

export default EntryDetail;