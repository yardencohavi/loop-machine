import { createContext, useContext, useState } from "react";
import { sounds } from "../sounds.js";
import useInterval from "../hooks/useInterval";

const LoopContext = createContext(null);
export const useLoopContext = () => useContext(LoopContext);

export const LoopProvider = ({ children }) => {

    const [isPlaying, setIsPlaying] = useState(false);
    const [arrayOfPressedSounds, setArrayOfPressedSounds] = useState([false, false, false, false, false, false, false, false, false]);
    const [delay, setDelay] = useState(null);

    //return array of pressed sounds buttons
    const  getIndexesOfPressedSounds = () => {
        return arrayOfPressedSounds.flatMap((sound, index) => sound ? index : []);
    };
    
    const playPauseAllButtonSounds  = (status) => {
        if (status) {
            getIndexesOfPressedSounds().forEach((soundIndex)=> {
                sounds[soundIndex].audio.currentTime = 0;
                sounds[soundIndex].audio.play();
            });
        } else { sounds.forEach(sound => sound.audio.pause());};
    };
   
    //handle sound card by index
    const handleSoundCardByIndex  = (soundIndex)=> {
        arrayOfPressedSounds[soundIndex] = !arrayOfPressedSounds[soundIndex];
        setArrayOfPressedSounds(new Array(...arrayOfPressedSounds));
        
        //handle the cases with the status of the loop
        if (!arrayOfPressedSounds[soundIndex]) {
            sounds[soundIndex].audio.pause();
        };
        if (arrayOfPressedSounds[soundIndex] && !isPlaying) {
            playPauseLoop(true);
        };
        if (!arrayOfPressedSounds[soundIndex] && !getIndexesOfPressedSounds().length){
            playPauseLoop(false);
        };
    };
    //set time of delay 
    const timeOfNextLoop= 5000;

    const playPauseLoop  = (status)=> {
        setIsPlaying(status);
        playPauseAllButtonSounds(status);
        if (status) {
            setDelay(timeOfNextLoop);
        } else {
            setDelay(null);
        };
    };
    //set callback function for the useInterval
     const timeOutCallback = ()=> {
        if (isPlaying) {
            playPauseAllButtonSounds(true);
            setDelay(timeOfNextLoop);
        } else {
            setDelay(null);
        };
    };
    useInterval(timeOutCallback, delay);

    return (
        <LoopContext.Provider value={{ isPlaying, setIsPlaying, arrayOfPressedSounds, setArrayOfPressedSounds, handleSoundCardByIndex, playPauseLoop }}>
            {children}
        </LoopContext.Provider>
    )
};

