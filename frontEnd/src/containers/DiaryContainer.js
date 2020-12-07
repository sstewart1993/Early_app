import React, {useState,useEffect} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import DiaryDisplay from "../components/Diary/DiaryDisplay";
import Request from "../helpers/request";
import EntryDetail from "../components/Entry/EntryDetail"


const DiaryContainer = () => {

    const[diary, setDiary] = useState([]);
    const[entry, setEntry] = useState([]);

    const requestAll = function(){
        const request = new Request();
        const diaryPromise = request.get("/diary");
        const entryPromise = request.get("/entries");

        Promise.all([diaryPromise, entryPromise])
        .then((data)=> {
            setDiary(data[0]);
            setEntry(data[1]);
        })
    }
    
    useEffect( () => {
        requestAll();
    },[])


    const findEntryById = function(id) {
        return entry.find((entrySearch) => {
            return entrySearch.id === parseInt(id);
        })
    }

    const handleEntryClick = function(info){
        let id = info.event._def.extendedProps.id;
        const url = "/entries/" + id;
        const request = new Request();
        request.patch("/api/entries/" + id, info.event._def.extendedProps)
        .then(() => {window.location='/diary/' + id})

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
                    return <EntryDetail entry={entry}/>
                 }} />

                {/* default view */}
                <Route render={ () => {
                    // return <CalendarView />
                    return <DiaryDisplay diary={diary} handleEntryClick={handleEntryClick}/>
                }} />

            </Switch>
            </>
        </Router>
    )
}

export default DiaryContainer;