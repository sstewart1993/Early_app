import { useEffect, useState } from "react";
import React from "react";
import "../Entry/EntryDetail.css";

const EntryDetail =  ({entry, sleep, mood, onUpdate}) => {

  

    const[stateEntry, setStateEntry] = useState(
        {
            // date: null,
            sleep: {
            },
            mood: {},
            prompt:"",
            diary: {id:1},
            meditation: {
                completed: false,
                length: 0
            }
        }
    )

    const[stateSleep, setStateSleep] = useState(
       {
        hours:0,
        sleepQuality:"",
        dream:"" 
       } 
    )

    const[stateMood,setStateMood] = useState(
        {
            mindScore:0,
            bodyScore:0,
            mindReason:[],
            bodyReason:[]
        }
    )

    useEffect( ()=> {
        // console.log(mood)
        if(entry){
        let entryCopy = {...entry}
        setStateEntry(entryCopy);
        let moodCopy = {...entry.mood}
        setStateMood(moodCopy);
        let dreamCopy = {...entry.sleep};
        setStateSleep(dreamCopy);}
    } , [entry, mood, sleep])

    useEffect( () => {
        let entryCopy = {...entry}
        entryCopy["mood"] = {...mood}
        entryCopy["sleep"] = {...sleep}
        setStateEntry(entryCopy);
    },[stateSleep,stateMood])


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

    const handleSubmit = function(event){
        debugger;
        event.preventDefault();
        let stateEntryCopy = {...stateEntry}
        stateEntryCopy["mood"] = {...stateMood}
        stateEntryCopy["sleep"] = {...stateSleep}

        onUpdate(stateEntryCopy)
    }

    const handleMoodChange = function(event){
        let propertyName = event.target.name;
        let moodCopy = {...stateMood};
        moodCopy[propertyName] = event.target.value;
        setStateMood(moodCopy);
       
    }
    
    const handleSleepChange = function(event){
        let propertyName = event.target.name;
        let sleepCopy = {...entry.sleep};
        console.log(typeof event.target.value )
        sleepCopy[propertyName] = event.target.name === "hours" ? parseInt(event.target.value) : event.target.value;
        setStateSleep(sleepCopy);

    }

    const handleReasonChange = function(event){
        let fieldName = event.target.name;
        let value = event.target.value;
        let reasonCopy = {...entry.mood}
        if(!reasonCopy[fieldName].includes(value)){
        reasonCopy[fieldName].push(value);
        setStateMood(reasonCopy)
        } else { 
        let index = reasonCopy[fieldName].indexOf(value);
        reasonCopy[fieldName].splice(index, 1)
        setStateMood(reasonCopy)}
        
        
        
        
    }

    const mindReasonSelected = stateMood.mindReason;
    const bodyReasonSelected = stateMood.bodyReason;
    
    return (
        <>
        <h1>Your Diary on {entry.date}</h1>

        <form onSubmit={handleSubmit} className = "entryDetail">
            <label for="prompt">Prompt: </label>
            <input type="text" name="prompt" defaultValue={entry.prompt} placeholder={entry.prompt} onChange={handleChange} className="Prompt"></input>
            
            <div className = "sleep-info">
                <h2>Sleep Info</h2>
                    <label for="dream">Dream Diary:</label>
                    <input type="text" name="dream" defaultValue={entry.sleep.dream} placeholder={entry.sleep.dream} value={stateSleep.dream} onChange={handleSleepChange}></input>
                    <label for="sleephours">Hours of Sleep: </label>
                    <input type="number" name="hours" defaultValue={entry.sleep.hours} placeholder={entry.sleep.hours} onChange={handleSleepChange}></input>
                    <label>Sleep Quality:</label>
                    <select select name="sleepQuality" defaultValue={entry.sleep.sleepQuality} onChange={handleSleepChange}>
                        <option value="Restful">Very Restful</option>
                        <option value="WokeOnce">I woke up once</option>
                        <option value="WokeTwice">I woke up twice</option>
                        <option value="Restless">I was pretty restless</option>
                        <option value="Bad">I had a bad night's sleep</option>
                        <option value="No">I didn't sleep at all</option>
                    </select>
                    </div>
            <div className="mood-info">
                <h2>Mood Info</h2>
                    <label>You rated your mind at:</label>
                    <input type="range" min="1" max="10" onChange={handleMoodChange} defaultValue={entry.mood.mindScore} name="mindScore"/>
            
            <h5><label className>You checked the following contributing reasons for rating your mind this way: </label></h5>

                <div className="reason-checkboxes">
                        <input type="checkbox" name="mindReason" id="mind-work" value="Work" onChange={handleReasonChange} checked={stateMood.mindReason.includes("Work")} />
                        <label for="mind-work">Work</label>

                        <input type="checkbox" name="mindReason" id="mind-family" value="Family" onChange={handleReasonChange} checked={stateMood.mindReason.includes("Family")}/>
                        <label for="mind-family">Family</label>

                        <input type="checkbox" name="mindReason" id="mind-relationship" value="Relationship" onChange={handleReasonChange} checked={stateMood.mindReason.includes("Relationship")}/>
                        <label for="mind-relationship">Relationships</label>

                        <input type="checkbox" name="mindReason" id="mind-education" value="Education" onChange={handleReasonChange} checked={stateMood.mindReason.includes("Education")}/>
                        <label for="mind-education">Education</label>

                        <input type="checkbox" name="mindReason" id="mind-food" value="Food" onChange={handleReasonChange} checked={stateMood.mindReason.includes("Food")}/>
                        <label for="mind-food">Food</label>

                        <input type="checkbox" name="mindReason" id="mind-travel" value="Travelling" onChange={handleReasonChange} checked={stateMood.mindReason.includes("Travelling")} />
                        <label for="mind-travel">Travel</label>

                        <input type="checkbox" name="mindReason" id="mind-friends" value="Friends" onChange={handleReasonChange} checked={stateMood.mindReason.includes("Friends")}/>
                        <label for="mind-friends">Friends</label>

                        <input type="checkbox" name="mindReason" id="mind-exercise" value="Exercise" onChange={handleReasonChange} checked={stateMood.mindReason.includes("Exercise")} />
                        <label for="mind-exercise">Exercise</label>

                        <input type="checkbox" name="mindReason" id="mind-body" value="Body" onChange={handleReasonChange} checked={stateMood.mindReason.includes("Body")} />
                        <label for="mind-body">Body</label>

                        <input type="checkbox" name="mindReason" id="mind-covid" value="Covid" onChange={handleReasonChange} checked={stateMood.mindReason.includes("Covid")}/>
                        <label for="mind-covid">Covid</label>

                        <input type="checkbox" name="mindReason" id="mind-dont-know" value="DontKnow" onChange={handleReasonChange} checked={stateMood.mindReason.includes("DontKnow")}/>
                        <label for="mind-dont-know">I Don't Know</label>

                    </div>

                <label>You rated your body at:</label>
                <input type="range" min="1" max="10" onChange={handleMoodChange} name="bodyScore" defaultValue={entry.mood.bodyScore}/>
            
                <h5><label className>You checked the following contributing reasons for rating your body this way: </label></h5>

                <div className="reason-checkboxes">
                    <input type="checkbox" name="bodyReason" id="body-work" value="Work" onChange={handleReasonChange} checked={stateMood.bodyReason.includes("Work")}/>
                    <label for="body-work">Work</label>

                    <input type="checkbox" name="bodyReason" id="body-family" value="Family" onChange={handleReasonChange} checked={stateMood.bodyReason.includes("Family")}/>
                    <label for="body-family">Family</label>

                    <input type="checkbox" name="bodyReason" id="body-relationship" value="Relationship" onChange={handleReasonChange} checked={stateMood.bodyReason.includes("Relationship")}/>
                    <label for="body-relationship">Relationships</label>

                    <input type="checkbox" name="bodyReason" id="body-education" value="Education" onChange={handleReasonChange} checked={stateMood.bodyReason.includes("Education")}/>
                    <label for="body-education">Education</label>

                    <input type="checkbox" name="bodyReason" id="body-food" value="Food" onChange={handleReasonChange} checked={stateMood.bodyReason.includes("Food")} />
                    <label for="body-food">Food</label>

                    <input type="checkbox" name="bodyReason" id="body-travel" value="Travelling" onChange={handleReasonChange} checked={stateMood.bodyReason.includes("Travelling")}/>
                    <label for="body-travel">Travel</label>

                    <input type="checkbox" name="bodyReason" id="body-friends" value="Friends" onChange={handleReasonChange} checked={stateMood.bodyReason.includes("Friends")}/>
                    <label for="body-friends">Friends</label>

                    <input type="checkbox" name="bodyReason" id="body-exercise" value="Exercise" onChange={handleReasonChange} checked={stateMood.bodyReason.includes("Exercise")} />
                    <label for="body-exercise" >Exercise</label>

                    <input type="checkbox" name="bodyReason" id="body-body" value="Body" onChange={handleReasonChange} checked={stateMood.bodyReason.includes("Body")}/>
                    <label for="body-body">Body</label>

                    <input type="checkbox" name="bodyReason" id="body-covid" value="Covid" onChange={handleReasonChange} checked={stateMood.bodyReason.includes("Covid")}/>
                    <label for="body-covid">Covid</label>

                    <input type="checkbox" name="bodyReason" id="body-dont-know" value="DontKnow" onChange={handleReasonChange} checked={stateMood.bodyReason.includes("DontKnow")}/>
                    <label for="body-dont-know">I Don't Know</label>

                    </div>
                    </div>
                <div className ="meditation-info">
            <h2>Meditation Info </h2>

            <label>You meditated for </label>
            <input type="number" defaultValue={entry.meditation.length} onchange={handleChange}></input>
            <label>minutes! </label>
                
                </div>

            <button type="submit"> Submit </button>
        </form>
        </>
    )
}

export default EntryDetail;