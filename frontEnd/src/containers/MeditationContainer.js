import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Request from "../helpers/request";
import MeditationSetup from "../components/Meditation/MeditationSetup";
import MeditationDisplay from "../components/Meditation/MeditationDisplay";
import sparrows from "../assets/sparrows.wav";
import nature from "../assets/nature.wav";


const MeditationContainer = () => {

    const[timer,setTimer] = useState(0);

    const audioSparrows = new Audio(nature)
    let sounds = [audioSparrows];
    const[audio,setAudio] = useState(sounds[0]);
    

    return(
        // set up screen (choose length, audio, video)
        // meditation screen

        <Router>
            <>
            <Switch>

            <Route path="/meditation/start" render={ () => {
                return <MeditationDisplay length={timer} audio={audio}/>
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