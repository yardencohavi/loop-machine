import Bass from '../src/assets/sounds/Bass.mp3';
import FUD from '../src/assets/sounds/FUD.mp3';
import funk from '../src/assets/sounds/funk.mp3';
import guitar from '../src/assets/sounds/guitar.mp3';
import MazePolitics from '../src/assets/sounds/MazePolitics.mp3';
import PAS3GROOVE from '../src/assets/sounds/PAS3GROOVE.mp3';
import SilentStar from '../src/assets/sounds/SilentStar.mp3';
import stutter from '../src/assets/sounds/stutter.mp3';
import Tanggu from '../src/assets/sounds/Tanggu.mp3';

import image1 from "../src/assets/images/image1.png";
import image2 from "../src/assets/images/image2.png";
import image3 from "../src/assets/images/image3.png";
import image4 from "../src/assets/images/image4.png";
import image5 from "../src/assets/images/image5.png";
import image6 from "../src/assets/images/image6.png";
import image7 from "../src/assets/images/image7.png";
import image8 from "../src/assets/images/image8.png";
import image9 from "../src/assets/images/image9.png";


export const sounds =[
    {
        id:1,
        audio: new Audio(Bass),
        img: image1
    },
    {
        id:2,
        audio: new Audio(FUD),
        img:  image2
    },
    {
        id:3,
        audio: new Audio(funk),
        img:  image3
    },
    {
        id:4,
        audio: new Audio(guitar),
        img:  image4
    },
    {
        id:5,
        audio: new Audio(MazePolitics),
        img:  image5
    },{
        id:6,
        audio: new Audio(SilentStar),
        img:  image6
    },
    {
        id:7,
        audio: new Audio(PAS3GROOVE),
        img:  image7
    },
    {
        id:8,
        audio: new Audio(Tanggu),
        img:  image8
    },
    {
        id:9,
        audio: new Audio(stutter),
        img:  image9
    }

];
