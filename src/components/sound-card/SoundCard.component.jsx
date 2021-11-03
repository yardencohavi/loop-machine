import React from "react";
import { useState } from "react";
import './SoundCard.styles.scss'

const SoundCard = (props) => {
    const {audio, img} = props;
    const [song] = useState(audio);
    const [playing, setPlaying] = useState(false);
    const handlePlay = () =>{
        if(playing){
            song.pause();
        }else{
            song.play();
        }
        setPlaying(!playing);
    }


    return (
        <div className={`${playing ? "bg-blue" :  "bg-washed-green"} sound-card br5 grow shadow-5 w-16 ma2 br-100 pointer`} onClick={handlePlay}>
            <img alt='' className="db mb2" style={{width:"100px"}} src={img}/>
        </div>
    )
}
export default SoundCard;
