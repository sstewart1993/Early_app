import React, {useState,useEffect} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import DiaryDisplay from "../components/Diary/DiaryDisplay";
import Request from "../helpers/request";
import EntryDetail from "../components/Entry/EntryDetail"


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

    const handleEntryClick = function(info){
        console.log(info)
        let id = info.event._def.extendedProps.id;
        console.log("first ID is" + id)
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
                    console.log(props.match.params);
                    const entry = findEntryById(id);
                    console.log("route entry is" + entry)
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