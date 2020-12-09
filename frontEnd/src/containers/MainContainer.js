import { WindowScrollController } from "@fullcalendar/react";
import React, {useState,useEffect} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavBar from "../components/NavBar";
import DiaryContainer from "./DiaryContainer";
import EntryContainer from "./EntryContainer";
import MeditationContainer from "./MeditationContainer";
import Request from "../helpers/request";

const MainContainer = () => {

    const[todayState, setTodayState] = useState(0);

    const[showHide, setShowHide] = useState(
        {
            showMakeEntry:true,
            showDailyStats:false
        }
    )

    const requestToday = function(){
        const request = new Request();
        const today = new Date();
        const todayFormat = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`;
        const todayPromise = request.get(`/entries/date/${todayFormat}`);

        Promise.all([todayPromise])
        .then((data) => {
            if(data[0][0]){
            setTodayState(data[0][0]);}
        })
        .catch()
    }



    const handleMakeEntry = function(event){
        event.preventDefault();
        window.location="/entry";
    }

    useEffect( () => {
        requestToday();
    },[])

    useEffect(function viewSwitch(){

        if(todayState !== 0) {
            let showHideCopy = {...showHide}
            showHideCopy['showMakeEntry'] = false;
            showHideCopy['showDailyStats'] = true;
            setShowHide(showHideCopy);
        } else {
            let showHideCopy = {...showHide}
            showHideCopy['showMakeEntry'] = true;
            showHideCopy['showDailyStats'] = false;
            setShowHide(showHideCopy);
        }
    },[todayState])

    const handleStartMeditation = function(event){
        event.preventDefault();
        window.location="/meditation";
    }

    return(

        <Router>
            <>
            <NavBar className="nav-bar"/>
            <div className="main-content">
            <Switch>

                <Route path="/diary" component={DiaryContainer} />

                <Route path="/entry" render={ () => {
                    return <EntryContainer todayState={todayState}/>
                }} />


                <Route path="/meditation" render={ () => {
                    return <MeditationContainer todayState = {todayState} />
                }} />
                
                <Route render={ () => {
                    return(
                        <div>
                        <h2>Good morning!</h2>
                        {showHide.showMakeEntry ? 
                        <button onClick={handleMakeEntry}>Start your day with an entry</button>
                        : null }

                        {showHide.showDailyStats ? 
                            <div>
                            <button onClick={handleStartMeditation}>Would you like to meditate?</button>
                            </div>
                            : null }
                        </div>
                    )
                }} />

            </Switch>
            </div>
            </>
        </Router>

    )
}

export default MainContainer;