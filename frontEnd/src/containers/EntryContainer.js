import React from "react";
import EntryForm from "../components/Entry/EntryForm";
import Request from "../helpers/request";

const EntryContainer = () => {



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