import React from "react";
import EntryForm from "../components/Entry/EntryForm";
import Request from "../helpers/request";

const EntryContainer = ({todayState}) => {

    if(todayState.length > 0){
        return <h2>you have already made an entry for today</h2>
    }

    const handlePost = function(entry) {
        const request = new Request();
        console.log(entry);
        request.post("/entries",entry)
        .then( () => {window.location = "/meditation"});
    }

 
    return(  
        <EntryForm onCreate={handlePost}/>

    )
}

export default EntryContainer;