import React, {useState, useEffect} from "react";
import Details from "../components/Meditation/Details";
import MeditationDisplay from "../components/Meditation/MeditationDisplay";
import Player from "../components/Meditation/Player"
import Sparrows from "../assets/sparrows.wav"


const MeditationContainer = () => {

    const [songs] = useState([

        {title: "sparrows",
        src: {Sparrows}
        },
        {title: "nature",
        src: "../assets/nature.wav"
        },
        {title: "river",
        src: "../assets/river.wav"
        },
        {title: "newage",
        src: "../assets/newage.mp3"
        },
        {title: "synth",
        src: "../assets/synth.mp3"
        },
        {title: "water",
        src:  "../assets/water.mp3"
        }
    ]);

    const [currentSongIndex, setCurrentSongIndex] = useState(1);
    const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

    useEffect(() =>{
        setNextSongIndex(() => {
            if(currentSongIndex + 1 > songs.length -1){
                return 0;
            }else {
                return currentSongIndex +1;
            }
        })
    }, [currentSongIndex])
    

    return(
        // set up screen (choose length, audio, video)
        // meditation screen

            <>
            <MeditationDisplay />

            <Player 
                currentSongIndex={currentSongIndex}
                setCurrentSongIndex={setCurrentSongIndex}
                nextSongIndex={nextSongIndex}
                songs={songs}
                song={songs[currentSongIndex]}
                nextSong={songs[nextSongIndex]}
            />

            </>


    )
}

export default MeditationContainer;