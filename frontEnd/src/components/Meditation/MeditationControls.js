import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay, faPause, faForward, faBackward} from "@fortawesome/free-solid-svg-icons";



function MeditationControls({isPlaying, setIsPlaying, skipSong}) {
    return (
        <div className = "controls">
            <button className = "skip" onClick= {() => skipSong(false)}>
            <FontAwesomeIcon icon={faBackward}/>
            </button>

            <button className = "play" onClick={() => setIsPlaying(!isPlaying)}>
                <FontAwesomeIcon icon={isPlaying ? faPause : faPlay}/>
            </button>

            <button className = "skip" onClick= {() => skipSong()}>
            <FontAwesomeIcon icon={faForward}/>
            </button>
        </div>
    )
}

export default MeditationControls
