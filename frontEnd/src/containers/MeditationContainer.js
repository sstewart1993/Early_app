import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Request from "../helpers/request";
import MeditationDisplay from "../components/Meditation/MeditationDisplay";
import sparrows from "../assets/sparrows.wav";
import nature from "../assets/nature.wav";
import river from "../assets/river.wav";
import synth from "../assets/synth.mp3";
import water from "../assets/water.mp3";


const MeditationContainer = ({todayState}) => {

    const[start,setStart] = useState(0);

    const[incomingState,setIncomingState] = useState([]);

    const audioSparrows = new Audio(sparrows);
    // let sounds = [audioSparrows];
    // const[audio,setAudio] = useState(sounds[0]);

    useEffect( () => {
        if(todayState === 0){
            const emptyEntry = {
            
                // date: null,
                sleep: {},
                mood: {},
                prompt:"",
                diary: "",
                meditation: {
                    completed: false,
                    length: 0
                }
        }
        setIncomingState(emptyEntry);


        } else {
            const newState = {...todayState};
            setIncomingState(newState);
        }

        const start = Date.now();
        setStart(start);


    },[todayState])

    const handleUpdate = function(entry) {
        const request = new Request();
        console.log(entry);
        request.patch("/entries/" + entry.id, entry)
       .then( () => {window.location = "/"});
    }


    const findElapsedAndUpdate = function(){
        const now = Date.now();
        const elapsedMillis = now - start;

        const elapsedSeconds = elapsedMillis/1000;
        console.log(elapsedSeconds);
        const elapsedMins = Math.floor(elapsedSeconds/60);
        console.log(elapsedMins);

        let stateCopy = {...incomingState};
        if (elapsedMins > 0) {
            stateCopy.meditation.completed = true;
            stateCopy.meditation.length += elapsedMins;
        } 
        setIncomingState(stateCopy);

        handleUpdate(stateCopy);
    }
    const audioNature = new Audio(nature)
    const audioRiver = new Audio(river)
    const audioSynth = new Audio(synth)
    const audioWater = new Audio(water)
    let sounds = [audioSparrows, audioNature, audioRiver, audioSynth, audioWater];
    const[audio,setAudio] = useState(sounds[4]);
    

    return(


            <MeditationDisplay audio={audio} endMeditation={findElapsedAndUpdate}/>



    )
}

export default MeditationContainer;