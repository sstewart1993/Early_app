import React, {useState, useEffect} from "react";

const MeditationDisplay = ({timer,audio}) => {

    useEffect( () => {
        audio.play();
    },[])

    return(
        <>
            <p>MeditationDisplay</p>
            <audio src={audio} loop />
        </>
        
    )
}

export default MeditationDisplay;