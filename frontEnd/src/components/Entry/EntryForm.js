import React, {useState, useEffect} from "react";

const EntryForm = () => {

    const[entry, setEntry] = useState(
        {
            date: Date.now(),
            sleep: {
                hours:0,
                sleepQuality:"",
                dream:""
            },
            mood: {
                mindScore:0,
                bodyScore:0,
                mindReason:[],
                bodyReason:[]
            },
            prompt:"",
            diary: {id:1},
            meditation: {
                completed: false,
                length: 0
            }
        }
    )

    const[question, setQuestion] = useState(
        ["block","none"]
    )

    const nextQuestion = function(event) {
        event.preventDefault();
       const questionIndex = question.indexOf("block");
       let questionCopy = {...question};
       questionCopy[questionIndex] = "none";
       questionCopy[(questionIndex+1)] = "block";
       setQuestion(questionCopy);
    }



    return(
        <>
        <form>
            <div style={{display:question[0]}}>
                <label>How many hours did you sleep for?</label>
                <input type="number"></input>
                <label>How was your sleep quality?</label>
                <select>
                    <option value="Restful">Restful</option>
                    <option value="WokeOnce">I woke up once</option>
                    <option value="WokeTwice">I woke up twice</option>
                    <option value="RestLess">I was pretty restless</option>
                    <option value="Bad">I slept really badly</option>
                    <option value="NoSleep">I got no sleep at all</option>
                </select>
            </div>

            <div style={{display:question[1]}}>
                <label>Did you have any dreams?</label>
                <input type="text"></input>
                <input type="submit"/>
            </div>


        </form>
        <button onClick={nextQuestion}>next</button>
        </>
    )

}

export default EntryForm;