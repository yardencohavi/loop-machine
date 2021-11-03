import React from 'react';
// import { useState , useEffect} from 'react';
import 'tachyons';
import Particles from 'react-particles-js';
import { sounds } from './sounds';
import './App.css';
import CardList from './components/cardList/CardList.component';
import Header from './components/header/Header.component';
// import useSound from 'use-sound';
// import funk from '../src/sounds/funk.mp3'

const particlesOptions =  {
  particles: {
   number: {
     value: 100,
     density:{
       enable: true,
       value_area:800
     }
   }
  }
}
function App() {
  
  return (
    <div className="App">
      <Particles className="particles" params={particlesOptions}/>
      <Header sounds={sounds} />
      <CardList sounds={sounds} />
    </div>
        
  )
}

export default App;
