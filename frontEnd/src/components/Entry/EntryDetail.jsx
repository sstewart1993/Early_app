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
        event.preventDefault();
        let stateEntryCopy = {...stateEntry}
        stateEntryCopy["mood"] = {...mood}
        stateEntryCopy["sleep"] = {...sleep}
        onUpdate(stateEntryCopy)
    }

    const handleMoodChange = function(event){
        let propertyName = event.target.name;
        let moodCopy = {...mood};
        moodCopy[propertyName] = event.target.value;
        setStateMood(moodCopy);

        setStateEntry(prevStateEntry => ({
            ...prevStateEntry, mood: {...prevStateEntry.mood, mood}
        }))
    }
    
    const handleSleepChange = function(event){
        let propertyName = event.target.name;
        let sleepCopy = {...sleep};
        sleepCopy[propertyName] = event.target.value;
        setStateSleep(sleepCopy);

        setStateEntry(stateEntry => ({
            ...stateEntry, sleep: {...stateEntry.sleep, sleep}
        }))
    }

    const handleReasonChange = function(event){
        let fieldName = event.target.name;
        let value = event.target.value;
        
        
        
        // setMood(moodCopy);
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
                    <input type="text" name="dream" defaultValue={entry.sleep.dream} placeholder={entry.sleep.dream} onChange={handleSleepChange}></input>
                    <label for="sleephours">Hours of Sleep: </label>
                    <input type="number" name="sleep-hours" defaultValue={entry.sleep.hours} placeholder={entry.sleep.hours} onChange={handleSleepChange}></input>
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
                    <input type="range" min="1" max="10" onChange={handleMoodChange} value={entry.mood.mindScore} name="mindScore"/>
            
            <h5><label className>You checked the following contributing reasons for rating your mind this way: </label></h5>

                <div className="reason-checkboxes">
                        <input type="checkbox" name="mindReason" id="mind-work" value="Work" onChange={handleReasonChange} />
                        <label for="mind-work">work</label>

                        <input type="checkbox" name="mindReason" id="mind-family" value="Family" onChange={handleReasonChange} />
                        <label for="mind-family">family</label>

                        <input type="checkbox" name="mindReason" id="mind-relationship" value="Relationship" onChange={handleReasonChange} />
                        <label for="mind-relationship">relationships</label>

                        <input type="checkbox" name="mindReason" id="mind-education" value="Education" onChange={handleReasonChange} />
                        <label for="mind-education">education</label>

                        <input type="checkbox" name="mindReason" id="mind-food" value="Food" onChange={handleReasonChange} />
                        <label for="mind-food">food</label>

                        <input type="checkbox" name="mindReason" id="mind-travel" value="Travelling" onChange={handleReasonChange}  />
                        <label for="mind-travel">travel</label>

                        <input type="checkbox" name="mindReason" id="mind-friends" value="Friends" onChange={handleReasonChange} />
                        <label for="mind-friends">friends</label>

                        <input type="checkbox" name="mindReason" id="mind-exercise" value="Exercise" onChange={handleReasonChange} />
                        <label for="mind-exercise">exercise</label>

                        <input type="checkbox" name="mindReason" id="mind-body" value="Body" onChange={handleReasonChange}  />
                        <label for="mind-body">body</label>

                        <input type="checkbox" name="mindReason" id="mind-covid" value="Covid" onChange={handleReasonChange} />
                        <label for="mind-covid">covid</label>

                        <input type="checkbox" name="mindReason" id="mind-dont-know" value="DontKnow" onChange={handleReasonChange} />
                        <label for="mind-dont-know">I don't know</label>

                    </div>

                <label>You rated your body at:</label>
                {/* <input type="range" min="1" max="10" onChange={handleMoodChange} value={entry.mood.bodyScore} name="bodyScore" defaultValue={mood.bodyscore}/> */}
            
            <h5><label className>You checked the following contributing reasons for rating your body this way: </label></h5>

                <div className="reason-checkboxes">
                    <input type="checkbox" name="bodyReason" id="body-work" value="Work" onChange={handleReasonChange} />
                    <label for="body-work">work</label>

                    <input type="checkbox" name="bodyReason" id="body-family" value="Family" onChange={handleReasonChange} />
                    <label for="body-family">family</label>

                    <input type="checkbox" name="bodyReason" id="body-relationship" value="Relationship" onChange={handleReasonChange} />
                    <label for="body-relationship">relationships</label>

                    <input type="checkbox" name="bodyReason" id="body-education" value="Education" onChange={handleReasonChange} />
                    <label for="body-education">education</label>

                    <input type="checkbox" name="bodyReason" id="body-food" value="Food" onChange={handleReasonChange}/>
                    <label for="body-food">food</label>

                    <input type="checkbox" name="bodyReason" id="body-travel" value="Travelling" onChange={handleReasonChange} />
                    <label for="body-travel">travel</label>

                    <input type="checkbox" name="bodyReason" id="body-friends" value="Friends" onChange={handleReasonChange} />
                    <label for="body-friends">friends</label>

                    <input type="checkbox" name="bodyReason" id="body-exercise" value="Exercise" onChange={handleReasonChange}/>
                    <label for="body-exercise" >exercise</label>

                    <input type="checkbox" name="bodyReason" id="body-body" value="Body" onChange={handleReasonChange} />
                    <label for="body-body">body</label>

                    <input type="checkbox" name="bodyReason" id="body-covid" value="Covid" onChange={handleReasonChange}/>
                    <label for="body-covid">covid</label>

                    <input type="checkbox" name="bodyReason" id="body-dont-know" value="DontKnow" onChange={handleReasonChange}/>
                    <label for="body-dont-know">I don't know</label>

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