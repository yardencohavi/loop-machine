import React from "react";
import './CardList.styles.scss';
import SoundCard from "../sound-card/SoundCard.component";

const CardList = ({sounds}) => {
    return (
      <div className="container-list">
      <div className="flex flex-wrap justify-center">
      {
        sounds.map((sound,i) => {
          return (
            <SoundCard key={i} id={sounds[i].id} audio={sounds[i].audio} img={sounds[i].img}/>
          )
        })
      }
      </div> 
      </div>
      )
}
export default CardList;