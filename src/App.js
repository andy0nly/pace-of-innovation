import React from 'react';
import {useSpring, animated} from 'react-spring';
import Bars from './Bars';
import VideoBG from './Video';
import Video from './video/crowd.mp4';


// import logo from './logo.svg';
import './App.css';

const App =()=>{



    const fade = useSpring({
        from:{
            opacity:0
        },
        to:{
            opacity:1
        }
    });


    return(
<div className="Wrapper" >
        <animated.div className="App" style={fade}>
           
            <header className="App-header">
           
          
<h1>Pace of Innovation</h1>

            </header>
            <Bars />
        
       

            <div>
 
        </div>
    
       
        </animated.div>
        <div className="darkenVideo" />
        <video
        autoPlay
        muted
        loop
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height:"100%",
          objectFit:"cover",
          transform: "translate(-50%, -50%)",
          zIndex:"-5"
        }}
      >
        <source src={Video}type="video/mp4" />
      </video>

        </div>
    );
}

export default App;

