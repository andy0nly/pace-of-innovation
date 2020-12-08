import React from 'react';
import {useSpring, animated, config} from 'react-spring';
import data from './data';

export default function TimeBar(){

// const dataItems = data.map((dataItem) =>
//     timeLength = dataItem.length,
//     return <span className="time-marker" style={{flex:timeLength}} key={dataItem.key} />


// );



const drawBar = useSpring({
    from:{flex:0},
    to:{flex:1},
    config: config.slow,
 });


console.log(data[11].length);

return(

<div>
<div className="bar-outer">
<animated.div className="time-bar" style={drawBar}>
{data.reverse().map((item) =>{
    return <div className="time-marker" style={{right:item.length+`%`}} key={item.key} />
}
)}
</animated.div>




</div>
</div>
)
}