import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Request from "../helpers/request";
import MeditationSetup from "../components/Meditation/MeditationSetup";
import MeditationDisplay from "../components/Meditation/MeditationDisplay";
import sparrows from "../assets/sparrows.wav";
import nature from "../assets/nature.wav";
import river from "../assets/river.wav";
import synth from "../assets/synth.mp3";
import water from "../assets/water.mp3";


const MeditationContainer = () => {

    const[timer,setTimer] = useState(0);

    const audioSparrows = new Audio(sparrows)
    const audioNature = new Audio(nature)
    const audioRiver = new Audio(river)
    const audioSynth = new Audio(synth)
    const audioWater = new Audio(water)
    let sounds = [audioSparrows, audioNature, audioRiver, audioSynth, audioWater];
    const[audio,setAudio] = useState(sounds[4]);
    

    return(
        // set up screen (choose length, audio, video)
        // meditation screen

        <Router>
            <>
            <Switch>

            <Route path="/meditation/start" render={ () => {
                return <MeditationDisplay  audio={audio}/>
            }}/>

            <Route render={ () => {
                return <MeditationSetup />
            }}/>

            </Switch>
            </>
        </Router>


    )
}

export default MeditationContainer;