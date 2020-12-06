import { WindowScrollController } from "@fullcalendar/react";
import React, {useState,useEffect} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavBar from "../components/NavBar";
import DiaryContainer from "./DiaryContainer";
import EntryContainer from "./EntryContainer";
import MeditationContainer from "./MeditationContainer";

const MainContainer = () => {

    const handleMakeEntry = function(event){
        event.preventDefault();
        window.location="/entry";
    }

    return(

        <Router>
            <>
            <NavBar className="nav-bar"/>
            <div className="main-content">
            <Switch>

                <Route path="/diary" component={DiaryContainer} />

                <Route path="/entry" component={EntryContainer} />


                <Route path="/meditation" component={MeditationContainer} />
                <Route render={ () => {
                    return(
                        <div>
                        <h2>Good morning!</h2>
                        <button onClick={handleMakeEntry}>Start your day with an entry</button>
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