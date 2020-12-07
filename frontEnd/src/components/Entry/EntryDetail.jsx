import React from "react";


const EntryDetail =  ({entry}) => {

    if(!entry){
        return (
            <p>Loading...</p>
        )
    }

    let meditation = ""

    if(entry.meditation.completed){
        meditation = "Great job keeping up with meditating today! That's " + entry.meditation.length + " minutes of tranquility."
    } else {
       meditation = "Would you like to do some meditation today?"
    }

    let sleepQuality = ""

    if(entry.sleep.sleepQuality  == "Restful") {
        sleepQuality = "got a restful sleep."
    } else if(entry.sleep.sleepQuality  == "WokeOnce" ) {
        sleepQuality = "woke once during the night."
    } else if (entry.sleep.sleepQuality == "WokeTwice") {
        sleepQuality = "woke twice during the night."
    } else if (entry.sleep.sleepQuality == "Restless") {
        sleepQuality = "had a pretty restless night."
    } else if (entry.sleep.sleepQuality == "Bad") {
        sleepQuality = "had a particularly bad night."
    } else if (entry.sleep.sleepQuality == "No") {
        sleepQuality = "did not sleep a wink!"
    }
    
    return (
        <>
        <div className = "entryDetail">
        <h1>Your Diary on {entry.date}</h1>
        <h4>You recorded: {entry.prompt}</h4>
        <p>On this day you got {entry.sleep.hours} hours of sleep and you {sleepQuality}</p>
        <p>{meditation}</p>
        </div>
        </>
    )
}

export default EntryDetail;