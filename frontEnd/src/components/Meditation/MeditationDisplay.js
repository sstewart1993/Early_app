import React, {useState, useEffect} from "react";
import "./Animation.css"
import forest from "../../assets/Forest.jpg"
import ball from "../../assets/Ball.jpg"
import ball1 from "../../assets/Ball1.jpg"





const MeditationDisplay = ({timer,audio}) => {

    // useEffect( () => {
    //     audio.play();
    // },[])




    

    return(
        <>
            <p1>MeditationDisplay</p1>
            <audio src={audio} loop />
            <img className = "ball" src={ball} alt="ball" />
            <p className ="breath" id="in">Breath In</p>
            <p className ="breath" id="out">BreathOut</p>

            

        </>
        
    )
}



export default MeditationDisplay;