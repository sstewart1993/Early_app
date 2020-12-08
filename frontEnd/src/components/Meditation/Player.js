import React, {useState, useEffect, useRef} from 'react'
import MeditationControls from "./MeditationControls"
import Details from "./Details"

function Player({currentSongIndex, setCurrentSongIndex, songs, song, nextSong}) {

    const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);

    

    useEffect( () => {
        if (isPlaying){
            audioEl.current.play();
        }else{
            audioEl.current.pause();
        }
    });

    const skipSong = (forwards = true) => {
        if (forwards){
            setCurrentSongIndex(() =>{
                let temp = currentSongIndex;
                temp++;

                if(temp > songs.length - 1){
                    temp = 0
                }
                return temp
            })
        }else {
            setCurrentSongIndex(() =>{
                let temp = currentSongIndex;
                temp--;

                if(temp < 0){
                    temp = songs.length -1
                }
                return temp
            })
            
        }
    }

    return (
        
        <>
        <div className = "player">

            <audio src = {songs[currentSongIndex].src} ref={audioEl}></audio>

            <MeditationControls 
            isPlaying={isPlaying} 
            setIsPlaying= {setIsPlaying} 
            skipSong={skipSong}/>

            <Details song = {songs[currentSongIndex]} />

            

            <h4>Playing: {song.title}</h4>
            <h5>Next Up: {nextSong.title}</h5>
            
        </div>

        </>
    )
}

export default Player
