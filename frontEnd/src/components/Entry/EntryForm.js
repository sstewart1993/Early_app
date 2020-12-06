import React, {useState, useEffect} from "react";
import "./EntryForm.css";

// COMMENT COMMENT COMMENT

const EntryForm = ({onCreate}) => {



    const[entry, setEntry] = useState(
        {
            // date: null,
            sleep: {},
            mood: {},
            prompt:"",
            diary: {id:1},
            meditation: {
                completed: false,
                length: 0
            }
        }
    )

    const[sleep,setSleep] = useState(
       {
        hours:0,
        sleepQuality:"",
        dream:"" 
       } 
    )

    const[mood,setMood] = useState(
        {
            mindScore:0,
            bodyScore:0,
            mindReason:[],
            bodyReason:[]
        }
    )

    useEffect( () => {
        let entryCopy = {...entry}
        entryCopy["mood"] = {...mood}
        entryCopy["sleep"] = {...sleep}
        setEntry(entryCopy);
    },[sleep,mood])

    const[buttonDisplay, setButtonDisplay] = useState("")

    const handleSleepChange = function(event){
        let propertyName = event.target.name;
        let sleepCopy = {...sleep};
        sleepCopy[propertyName] = event.target.value;
        setSleep(sleepCopy);
    }


    const handleMoodChange = function(event){
        let propertyName = event.target.name;
        let moodCopy = {...mood};
        moodCopy[propertyName] = event.target.value;
        setMood(moodCopy);
    }

    const handleChange = function(event){
        let propertyName = event.target.name;
        let entryCopy = {...entry};
        entryCopy[propertyName] = event.target.value;
        setEntry(entryCopy);
    }

    const handleReasonChange = function(event){
        let fieldName = event.target.name;
        let value = event.target.value;
        let moodCopy = {...mood};
        moodCopy[fieldName].push(value);
        setMood(moodCopy);
    }

    const[question, setQuestion] = useState(
        ["block","none","none","none","none"]
    )

    const nextQuestion = function(event) {
        event.preventDefault();

        if(sleep.sleepQuality){
        let questionCopy = [...question];

        if (question.indexOf("block") === 3 ){
            setButtonDisplay("none");
        }

       const questionIndex = question.indexOf("block");
       questionCopy[questionIndex] = "none";
       questionCopy[(questionIndex+1)] = "block";
       setQuestion(questionCopy);}
    }

    const handleSubmit = function(event) {
        event.preventDefault();
        onCreate(entry);
    }



    return(
        <div className="entry-form">
        <form onSubmit={handleSubmit} >
            <div style={{display:question[0]}} className="question-set">
                <label>How many hours did you sleep for?</label>
                <input name="hours" type="number" value={sleep.hours} onChange={handleSleepChange} required></input>
                <br/>
                <label>How was your sleep quality?</label>
                <select name="sleepQuality" onChange={handleSleepChange} defaultValue="Restful">
                    <option value="Restful">Restful</option>
                    <option value="WokeOnce">I woke up once</option>
                    <option value="WokeTwice">I woke up twice</option>
                    <option value="RestLess">I was pretty restless</option>
                    <option value="Bad">I slept really badly</option>
                    <option value="No">I got no sleep at all</option>
                </select>
            </div>

            <div style={{display:question[1]}} className="question-set">
                <label>Did you have any dreams?</label>
                <br/>
                <textarea type="text" name="dream" onChange={handleSleepChange} value={sleep.dream} id="dream-box" rows="9" cols="35"></textarea>
            </div>

            <div style={{display:question[2]}} className="question-set">
                <label>How does your body feel today?</label>
                <p>{mood.bodyScore}/10</p>
                <input type="range" min="1" max="10" onChange={handleMoodChange} value={mood.bodyScore} name="bodyScore"/>
                <br/>
                <label>What's the reason?</label>
                
                <div className="reason-checkboxes">
                    <input type="checkbox" name="bodyReason" id="body-work" value="Work" onChange={handleReasonChange}/>
                    <label for="body-work">work</label>

                    <input type="checkbox" name="bodyReason" id="body-family" value="Family" onChange={handleReasonChange}/>
                    <label for="body-family">family</label>

                    <input type="checkbox" name="bodyReason" id="body-relationship" value="Relationship" onChange={handleReasonChange}/>
                    <label for="body-relationship">relationships</label>

                    <input type="checkbox" name="bodyReason" id="body-education" value="Education" onChange={handleReasonChange}/>
                    <label for="body-education">education</label>

                    <input type="checkbox" name="bodyReason" id="body-food" value="Food" onChange={handleReasonChange}/>
                    <label for="body-food">food</label>

                    <input type="checkbox" name="bodyReason" id="body-travel" value="Travelling" onChange={handleReasonChange}/>
                    <label for="body-travel">travel</label>

                    <input type="checkbox" name="bodyReason" id="body-friends" value="Friends" onChange={handleReasonChange}/>
                    <label for="body-friends">friends</label>

                    <input type="checkbox" name="bodyReason" id="body-exercise" value="Exercise" onChange={handleReasonChange}/>
                    <label for="body-exercise">exercise</label>

                    <input type="checkbox" name="bodyReason" id="body-body" value="Body" onChange={handleReasonChange}/>
                    <label for="body-body">body</label>

                    <input type="checkbox" name="bodyReason" id="body-covid" value="Covid" onChange={handleReasonChange}/>
                    <label for="body-covid">covid</label>

                    <input type="checkbox" name="bodyReason" id="body-dont-know" value="DontKnow" onChange={handleReasonChange}/>
                    <label for="body-dont-know">I don't know</label>

                </div>

            </div>

            <div style={{display:question[3]}} className="question-set">
            <label>How does your mind feel today?</label>
                <p>{mood.mindScore}/10</p>
                <input type="range" min="1" max="10" onChange={handleMoodChange} value={mood.mindScore} name="mindScore"/>
                <br/>
                <label>What's the reason?</label>
                
                <div className="reason-checkboxes">
                    <input type="checkbox" name="mindReason" id="mind-work" value="Work" onChange={handleReasonChange}/>
                    <label for="mind-work">work</label>

                    <input type="checkbox" name="mindReason" id="mind-family" value="Family" onChange={handleReasonChange}/>
                    <label for="mind-family">family</label>

                    <input type="checkbox" name="mindReason" id="mind-relationship" value="Relationship" onChange={handleReasonChange}/>
                    <label for="mind-relationship">relationships</label>

                    <input type="checkbox" name="mindReason" id="mind-education" value="Education" onChange={handleReasonChange}/>
                    <label for="mind-education">education</label>

                    <input type="checkbox" name="mindReason" id="mind-food" value="Food" onChange={handleReasonChange}/>
                    <label for="mind-food">food</label>

                    <input type="checkbox" name="mindReason" id="mind-travel" value="Travelling" onChange={handleReasonChange}/>
                    <label for="mind-travel">travel</label>

                    <input type="checkbox" name="mindReason" id="mind-friends" value="Friends" onChange={handleReasonChange}/>
                    <label for="mind-friends">friends</label>

                    <input type="checkbox" name="mindReason" id="mind-exercise" value="Exercise" onChange={handleReasonChange}/>
                    <label for="mind-exercise">exercise</label>

                    <input type="checkbox" name="mindReason" id="mind-body" value="Body" onChange={handleReasonChange}/>
                    <label for="mind-body">body</label>

                    <input type="checkbox" name="mindReason" id="mind-covid" value="Covid" onChange={handleReasonChange}/>
                    <label for="mind-covid">covid</label>

                    <input type="checkbox" name="mindReason" id="mind-dont-know" value="DontKnow" onChange={handleReasonChange}/>
                    <label for="mind-dont-know">I don't know</label>

                </div>

            </div>

            <div style={{display:question[4]}} className="question-set">
                <label>How do you visualise the rest of the day going?</label>
                <br/>
                <textarea type="text" required onChange={handleChange} name="prompt" value={entry.prompt} id="prompt-box" rows="9" cols="35"/>
                <br/>
                <input type="submit"/>
            </div> 


        </form>
        <button onClick={nextQuestion} style={{display:buttonDisplay}}>next</button>
        </div>
    )

}

export default EntryForm;