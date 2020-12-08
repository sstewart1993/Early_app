import { useEffect, useState } from "react";
import React from "react";
import "./EntryDetail.css";

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
        entryCopy["mood"] = {...stateMood}
        entryCopy["sleep"] = {...stateSleep}
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
        // these two lines may be redundant. need to check!
        stateEntryCopy["mood"] = {...stateMood}
        stateEntryCopy["sleep"] = {...stateSleep}
        onUpdate(stateEntryCopy)
    }

    const handleMoodChange = function(event){
        let propertyName = event.target.name;
        let moodCopy = {...stateMood};
        moodCopy[propertyName] = event.target.value;
        setStateMood(moodCopy);

        // setStateEntry(prevStateEntry => ({
        //     ...prevStateEntry, mood: {...prevStateEntry.mood, mood}
        // }))
    }
    
    const handleSleepChange = function(event){
        let propertyName = event.target.name;
        let sleepCopy = {...stateSleep};
        sleepCopy[propertyName] = event.target.value;
        setStateSleep(sleepCopy);

        // setStateEntry(stateEntry => ({
        //     ...stateEntry, sleep: {...stateEntry.sleep, sleep}
        // }))
    }

    const handleReasonChange = function(event){
        let fieldName = event.target.name;
        let value = event.target.value;
        let check = event.target.checked;
        let moodCopy = {...stateMood};
        if(check === true){
            moodCopy[fieldName].push(value);
        }else{
            const index = moodCopy[fieldName].indexOf(value);
            moodCopy[fieldName].splice(index,1);
        }
        setStateMood(moodCopy);
    }

    const handleMeditationChange = function(event){
        let minsMeditated = event.target.value;
        let entryCopy = {...stateEntry};
        if(minsMeditated > 0){
            entryCopy.meditation.completed = true;
        } else {
            entryCopy.meditation.completed = false;
        }
        entryCopy.meditation.length = minsMeditated;
        setStateEntry(entryCopy);
    }

    const mindReasonSelected = stateMood.mindReason;
    const bodyReasonSelected = stateMood.bodyReason;

    
    
    
    return (
        <div className = "entry-detail">
        <h1>Your Diary on {entry.date}</h1>

        <form onSubmit={handleSubmit}>
            <label for="prompt">Prompt: </label>
            <input type="text" name="prompt" defaultValue={entry.prompt} placeholder={entry.prompt} onChange={handleChange} className="prompt"></input>
            
            <div className = "sleep-info">
                <h2>Sleep Info</h2>
                    <label for="dream">Dream Diary:</label>
                    <input type="text" name="dream" defaultValue={entry.sleep.dream} placeholder={entry.sleep.dream} onChange={handleSleepChange}></input>
                    <label for="hours">Hours of Sleep: </label>
                    <input type="number" name="hours" defaultValue={entry.sleep.hours} placeholder={entry.sleep.hours} onChange={handleSleepChange}></input>
                    <label>Sleep Quality:</label>
                    <select select name="sleepQuality" defaultValue={entry.sleep.sleepQuality} onChange={handleSleepChange}>
                        <option value="Restful">Very Restful</option>
                        <option value="WokeOnce">I woke up once</option>
                        <option value="WokeTwice">I woke up twice</option>
                        <option value="RestLess">I was pretty restless</option>
                        <option value="Bad">I had a bad night's sleep</option>
                        <option value="No">I didn't sleep at all</option>
                    </select>
                    </div>
            <div className="mood-info">
                <h2>Mood Info</h2>
                    <label>You rated your mind at: {stateEntry.mood.mindScore}/10</label>
                    <input type="range" min="1" max="10" onChange={handleMoodChange} value={stateEntry.mood.mindScore} name="mindScore"/>
            
            <h5><label>You checked the following contributing reasons for rating your mind this way: </label></h5>

                <div className="reason-checkboxes">
                    {mindReasonSelected.includes("Work") ? <input type="checkbox" name="mindReason" id="mind-work" value="Work" onChange={handleReasonChange} checked/>:
                    <input type="checkbox" name="mindReason" id="mind-work" value="Work" onChange={handleReasonChange} /> }
                        
                        <label for="mind-work">work</label>

                    {mindReasonSelected.includes("Family") ? <input type="checkbox" name="mindReason" id="mind-family" value="Family" onChange={handleReasonChange} checked/> :
                    <input type="checkbox" name="mindReason" id="mind-family" value="Family" onChange={handleReasonChange} />}

                        
                        <label for="mind-family">family</label>

                    {mindReasonSelected.includes("Relationship") ? <input type="checkbox" name="mindReason" id="mind-relationship" value="Relationship" onChange={handleReasonChange} checked/> :
                    <input type="checkbox" name="mindReason" id="mind-relationship" value="Relationship" onChange={handleReasonChange} />}

                        
                        <label for="mind-relationship">relationships</label>

                    {mindReasonSelected.includes("Education") ? <input type="checkbox" name="mindReason" id="mind-education" value="Education" onChange={handleReasonChange} checked/> :
                    <input type="checkbox" name="mindReason" id="mind-education" value="Education" onChange={handleReasonChange} />}
                        
                        <label for="mind-education">education</label>

                    {mindReasonSelected.includes("Food") ? <input type="checkbox" name="mindReason" id="mind-food" value="Food" onChange={handleReasonChange} checked/> :
                    <input type="checkbox" name="mindReason" id="mind-food" value="Food" onChange={handleReasonChange} />}

                        
                        <label for="mind-food">food</label>

                    {mindReasonSelected.includes("Travelling") ? <input type="checkbox" name="mindReason" id="mind-travel" value="Travelling" onChange={handleReasonChange} checked /> :
                    <input type="checkbox" name="mindReason" id="mind-travel" value="Travelling" onChange={handleReasonChange}  />}

                        
                        <label for="mind-travel">travel</label>

                    {mindReasonSelected.includes("Friends") ? <input type="checkbox" name="mindReason" id="mind-friends" value="Friends" onChange={handleReasonChange} checked/> :
                    <input type="checkbox" name="mindReason" id="mind-friends" value="Friends" onChange={handleReasonChange} />}
        
                        <label for="mind-friends">friends</label>

                    {mindReasonSelected.includes("Exercise") ? <input type="checkbox" name="mindReason" id="mind-exercise" value="Exercise" onChange={handleReasonChange} checked /> :
                    <input type="checkbox" name="mindReason" id="mind-exercise" value="Exercise" onChange={handleReasonChange} />}

                        
                        <label for="mind-exercise">exercise</label>

                    {mindReasonSelected.includes("Body") ? <input type="checkbox" name="mindReason" id="mind-body" value="Body" onChange={handleReasonChange} checked /> :
                    <input type="checkbox" name="mindReason" id="mind-body" value="Body" onChange={handleReasonChange}  />}

                        
                        <label for="mind-body">body</label>

                    {mindReasonSelected.includes("Covid") ? <input type="checkbox" name="mindReason" id="mind-covid" value="Covid" onChange={handleReasonChange} checked/> :
                    <input type="checkbox" name="mindReason" id="mind-covid" value="Covid" onChange={handleReasonChange} />}

                        
                        <label for="mind-covid">covid</label>

                    {mindReasonSelected.includes("DontKnow") ? <input type="checkbox" name="mindReason" id="mind-dont-know" value="DontKnow" onChange={handleReasonChange} checked /> :
                    <input type="checkbox" name="mindReason" id="mind-dont-know" value="DontKnow" onChange={handleReasonChange} />}

                        <label for="mind-dont-know">I don't know</label>

                    </div>

                <label>You rated your body at: {stateEntry.mood.bodyScore}/10</label>
                <input type="range" min="1" max="10" onChange={handleMoodChange} value={stateEntry.mood.bodyScore} name="bodyScore"/>
            
            <h5><label>You checked the following contributing reasons for rating your body this way: </label></h5>

                <div className="reason-checkboxes">

                {bodyReasonSelected.includes("Work") ? <input type="checkbox" name="bodyReason" id="body-work" value="Work" onChange={handleReasonChange} checked/> :
                <input type="checkbox" name="bodyReason" id="body-work" value="Work" onChange={handleReasonChange}/>}
                    
                    <label for="body-work">work</label>

                {bodyReasonSelected.includes("Family") ? <input type="checkbox" name="bodyReason" id="body-family" value="Family" onChange={handleReasonChange} checked /> :
                <input type="checkbox" name="bodyReason" id="body-family" value="Family" onChange={handleReasonChange} />}

                    
                    <label for="body-family">family</label>

                {bodyReasonSelected.includes("Relationship") ? <input type="checkbox" name="bodyReason" id="body-relationship" value="Relationship" onChange={handleReasonChange} checked /> :
                <input type="checkbox" name="bodyReason" id="body-relationship" value="Relationship" onChange={handleReasonChange} />}

                    
                    <label for="body-relationship">relationships</label>

                {bodyReasonSelected.includes("Education") ? <input type="checkbox" name="bodyReason" id="body-education" value="Education" onChange={handleReasonChange} checked /> :
                <input type="checkbox" name="bodyReason" id="body-education" value="Education" onChange={handleReasonChange} />}

                    
                    <label for="body-education">education</label>

                {bodyReasonSelected.includes("Food") ? <input type="checkbox" name="bodyReason" id="body-food" value="Food" onChange={handleReasonChange} checked /> :
                <input type="checkbox" name="bodyReason" id="body-food" value="Food" onChange={handleReasonChange}/>}

                    
                    <label for="body-food">food</label>

                {bodyReasonSelected.includes("Travelling") ? <input type="checkbox" name="bodyReason" id="body-travel" value="Travelling" onChange={handleReasonChange} checked /> :
                <input type="checkbox" name="bodyReason" id="body-travel" value="Travelling" onChange={handleReasonChange} />}
                    
                    <label for="body-travel">travel</label>

                {bodyReasonSelected.includes("Friends") ? <input type="checkbox" name="bodyReason" id="body-friends" value="Friends" onChange={handleReasonChange} checked /> :
                <input type="checkbox" name="bodyReason" id="body-friends" value="Friends" onChange={handleReasonChange} />}

                    
                    <label for="body-friends">friends</label>

                {bodyReasonSelected.includes("Exercise") ? <input type="checkbox" name="bodyReason" id="body-exercise" value="Exercise" onChange={handleReasonChange} checked /> :
                <input type="checkbox" name="bodyReason" id="body-exercise" value="Exercise" onChange={handleReasonChange}/>}

                    
                    <label for="body-exercise" >exercise</label>

                {bodyReasonSelected.includes("Body") ? <input type="checkbox" name="bodyReason" id="body-body" value="Body" onChange={handleReasonChange} checked /> :
                <input type="checkbox" name="bodyReason" id="body-body" value="Body" onChange={handleReasonChange} />}

                    
                    <label for="body-body">body</label>

                {bodyReasonSelected.includes("Covid") ? <input type="checkbox" name="bodyReason" id="body-covid" value="Covid" onChange={handleReasonChange} checked /> :
                <input type="checkbox" name="bodyReason" id="body-covid" value="Covid" onChange={handleReasonChange}/>}

                    
                    <label for="body-covid">covid</label>

                {bodyReasonSelected.includes("DontKnow") ? <input type="checkbox" name="bodyReason" id="body-dont-know" value="DontKnow" onChange={handleReasonChange} checked/> : 
                <input type="checkbox" name="bodyReason" id="body-dont-know" value="DontKnow" onChange={handleReasonChange}/>}

                    
                    <label for="body-dont-know">I don't know</label>

                    </div>
                    </div>
                <div className ="meditation-info">
            <h2>Meditation Info </h2>

            <label>You meditated for </label>
            <input type="number" defaultValue={entry.meditation.length} onChange={handleMeditationChange}></input>
            <label>minutes! </label>
                
                </div>

            <button type="submit"> Submit </button>
        </form>
        </div>
    )
}

export default EntryDetail;