import React from "react";
import './Header.styles.scss';
import pause from '../../assets/images/pause.png';
import play from '../../assets/images/play.png'
import { useLoopContext } from "../../loopState/LoopProvider";

const Header = () => {
    const loopStateContext = useLoopContext();
    
    const handleClick = (play) => {
        if((play && loopStateContext.isPlaying) || (!play && !loopStateContext.isPlaying)){
            loopStateContext.playPauseLoop(!loopStateContext.isPlaying);
        }
    }
    return(
        <div className="header">
            <div className="title">Loop machine</div>
            <div>
                <img onClick={() => handleClick(true)} alt ='' className="button button-pause grow" src={pause} />
                <img onClick={() => handleClick(false)} alt ='' className="button button-play grow" src={play} />
            </div>
        </div>
    )
}
export default Header;