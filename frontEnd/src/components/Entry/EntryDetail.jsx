import { useEffect, useState } from "react";
import React from "react";


const EntryDetail =  ({entry}) => {

    const [stateEntry, setStateEntry] = useState({
        
            id: null,
            date: "",
            sleep: {
            id: null,
            hours: null,
            sleepQuality: "",
            dream: ""
            },
            mood: {
            id: null,
            mindScore: null,
            bodyScore: null,
            mindReason: [ ],
            bodyReason: []
            },
            prompt: "",
            meditation: {
            id: null,
            length: null,
            completed: false
            }
            
    })

    useEffect(() => {
        if(entry){
            let currentEntry = {...entry}
            setStateEntry(currentEntry)
        }
    }, [entry])

    if(!entry){
        return (
            <p>Loading...</p>
        )
    }

    const handleChange = function(event){
        let propertyName = event.target.name;
        let copiedEntry = {...stateEntry}
        copiedEntry[propertyName] = event.target.value;
        setStateEntry(copiedEntry)}

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
            <input type="text" name="prompt" value={entry.prompt} placeholder={entry.prompt} onChange={handleChange}></input>
           
            <h2>Sleep Info</h2>
            <label for="dream">Dream Diary:</label>
            <input type="text" name="dream-diary" value={entry.sleep.dream} placeholder={entry.sleep.dream} onChange={handleChange}></input>
            <label for="sleephours">Hours of Sleep: </label>
            <input type="number" name="sleep-hours" value={entry.sleep.hours} placeholder={entry.sleep.hours} onChange={handleChange}></input>
            <label>Sleep Quality:</label>
            <select select name="sleepQuality" defaultValue={entry.sleep.sleepQuality} onChange={handleChange}>
                <option value="Restful">Very Restful</option>
                <option value="WokeOnce">I woke up once</option>
                <option value="WokeTwice">I woke up twice</option>
                <option value="Restless">I was pretty restless</option>
                <option value="Bad">I had a bad night's sleep</option>
                <option value="No">I didn't sleep at all</option>
            </select>

            <h2>Mood Info</h2>
            <label></label>
            <input></input>

            <button type="submit"> Submit </button>
        <p>On this day you got {entry.sleep.hours} hours of sleep and you {sleepQuality}. </p>
        <p>{meditation}</p>
        </form>
        </>
    )
}

export default EntryDetail;