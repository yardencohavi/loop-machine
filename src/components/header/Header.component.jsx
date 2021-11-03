import React from "react";
import './Header.styles.scss';
import pause from '../../assets/images/pause.png';
import play from '../../assets/images/play.png'
import { useState } from "react/cjs/react.development";

const Header = ({sounds}) => {
    const [songs] = useState(sounds);
    const handlePlay = (playing) =>{
        if(playing){
            songs.forEach(song => {
                if(!song.audio.paused){
                    song.audio.pause();
                }
            })
        }else{
            songs.forEach(song => {
                if(song.audio.paused){
                    song.audio.play();
                }
            })
        }
    }
    return(
        <div className="header">
            <div className="title">Loop machine</div>
            <div>
                <img alt ='' className="button button-pause grow" src={pause} onClick={handlePlay(true)}/>
                <img alt ='' className="button button-play grow" src={play} onClick={handlePlay(false)}/>
            </div>
        </div>
    )
}
export default Header;