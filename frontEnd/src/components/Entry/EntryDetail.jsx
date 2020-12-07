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


    if(entry.sleep.sleepQuality  === "Restful") {
        sleepQuality = "got a restful sleep."
    } else if(entry.sleep.sleepQuality  === "WokeOnce" ) {
        sleepQuality = "woke once during the night." 
    } else if (entry.sleep.sleepQuality === "WokeTwice") {
        sleepQuality = "woke twice during the night."
    } else if (entry.sleep.sleepQuality === "Restless") {
        sleepQuality = "had a pretty restless night."
    } else if (entry.sleep.sleepQuality === "Bad") {
        sleepQuality = "had a particularly bad night."
    } else if (entry.sleep.sleepQuality === "No") {
        sleepQuality = "did not sleep a wink!"
    }
    
    return (
        <>
        <h1>Your Diary on {entry.date}</h1>

        <form onSubmit="" className = "entryDetail">
            <label for="prompt">Prompt: </label>
            <input type="text" name="prompt" placeholder={entry.prompt}></input>
           
           <h2>Sleep Info</h2>
           <label for="dream">Dream Diary:</label>
           <input type="text" name="dream-diary" placeholder={entry.sleep.dream}></input>
           <label for="sleephours">Hours of Sleep: </label>
           <input type="number" name="sleep-hours" placeholder={entry.sleep.hours}></input>

        
        <p>On this day you got {entry.sleep.hours} hours of sleep and you {sleepQuality}. </p>
        <p>{meditation}</p>
        </form>
        </>
    )
}

export default EntryDetail;