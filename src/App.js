import React from 'react';
import 'tachyons';
import Particles from 'react-tsparticles';  
import { sounds } from './helpers/sounds';
import './App.css';
import CardList from './components/cardList/CardList.component';
import Header from './components/header/Header.component';
import { particlesOptions } from './helpers/particles';

function App() {
    return(
      <div className="App">
        <Particles className="particles" params={particlesOptions}/>
        <Header />
        <CardList sounds={sounds}/>
      </div>
    )
}
export default App;
