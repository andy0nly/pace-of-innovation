import React from 'react';
import {useSpring, animated, config} from 'react-spring';

export default function Bar({length, icon, label}){


const drawBar = useSpring({
    from:{flex:0},
    to:{flex:1},
    config: config.slow,
 });




return(



<div className="bar-two-col">
<div className="bar-first-col"><span className="label">{label}</span></div>
<div className="bar-outer" style={{width:length+`%`}}>

<animated.div className="bar" style={drawBar}><div className="icon"><img src={icon}/> </div></animated.div>
</div>
</div>


)
}