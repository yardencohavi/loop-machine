import React from "react";
import { useState } from "react";
import './SoundCard.styles.scss';
import { useLoopContext } from "../../loopState/LoopProvider";

const SoundCard = ({ soundIndex, img }) => {
    const loopStateContext = useLoopContext();

    const [click, setClick] = useState(false);
    const handleClick = () => {
        loopStateContext.handleSoundCardByIndex(soundIndex)
        setClick(!click);
    }
    return (
        <div className={`${click ? "bg-blue" :  "bg-washed-green"} sound-card br5 grow shadow-5 w-16 ma2 br-100 pointer`}
            onClick={handleClick}>    
            <img alt='' className="db mb2" style={{width:"100px"}} src={img}/>
        </div>
    )
}

export default SoundCard;
