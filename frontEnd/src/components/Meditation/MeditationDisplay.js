import React, {useState, useEffect} from "react";
import "./Animation.css"
import sky from "../../assets/sky.jpg"





const MeditationDisplay = ({audio,endMeditation}) => {

    useEffect( () => {
        audio.play();
    },[])


    const handleEndMeditation = function(event){
        event.preventDefault();
        endMeditation();
    }

    

    return(
        <>

        <button onClick={handleEndMeditation} id="back-button">back</button>
            <audio src={audio} loop />
            <img className = "ball" src={sky} alt="ball" />
            <p className ="breath" id="in">Breath In</p>
            <p className ="breath" id="out">Breath Out</p>

                <div class="counter-container">
                    <div class="min-container">
                        <div class="digit-container">
                            <div class="digit-upper min2upper"></div>
                            <div class="digit-lower min2lower"></div>
                        </div>
                        <div class="digit-container">
                            <div class="digit-upper min1upper"></div>
                            <div class="digit-lower min1lower"></div>
                        </div>
                    </div>

                    <div class="min-text-container">
                        <span class="unit"> Min </span>
                    </div>

                    <div class="sec-container">
                        <div class="digit-container">
                            <div class="digit-upper sec2upper"></div>
                            <div class="digit-lower sec2lower"></div>
                        </div>
                        <div class="digit-container">
                            <div class="digit-upper sec1upper"></div>
                            <div class="digit-lower sec1lower"></div>
                        </div>
                    </div>

                <div class="sec-text-container">
                <span class="unit"> Sec </span>
                </div>
            </div>


            

        </>
        
    )
}



export default MeditationDisplay;