import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavBar from "../components/NavBar";
import DiaryContainer from "./DiaryContainer";
import EntryContainer from "./EntryContainer";
import MeditationContainer from "./MeditationContainer";

const MainContainer = () => {

    return(

        <Router>
            <>
            <NavBar />
            <Switch>

                <Route path="/diary" component={DiaryContainer} />
                <Route path="/entry" component={EntryContainer} />
                <Route path="/meditation" component={MeditationContainer} />

            </Switch>
            </>
        </Router>

    )
}

export default MainContainer;