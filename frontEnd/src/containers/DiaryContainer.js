import React, {useState,useEffect} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Request from "../helpers/request";

const DiaryContainer = () => {

    const[diary, setDiary] = useState([]);

    const requestAll = function(){
        const request = new Request();
        const diaryPromise = request.get("/diary");

        Promise.all([diaryPromise])
        .then((data)=> {
            setDiary(data[0]);
        })
    }
    
    useEffect( () => {
        requestAll();
    },[])


    const findEntryById = function(id) {
        return diary.find((entry) => {
            return entry.id === parseInt(id);
        })
    }

    return(
        // <p>I am the Diary container. I AM THE MASTER!</p>
        // // search bar
        // // calendar view
        //     // list of days
        //         // day component
                
        <Router>
            <>
            <Switch>

                <Route exact path="/diary/:id" render={ (props) => {
                    const id = props.match.params.id;
                    const entry = findEntryById(id);
                    // return <EntryDetail entry={entry} />
                    return <p>EntryDetail goes here</p>
                }} />

                {/* default view */}
                <Route render={ () => {
                    // return <CalendarView />
                    return <p>CalendarView goes here</p>
                }} />

            </Switch>
            </>
        </Router>
    )
}

export default DiaryContainer;