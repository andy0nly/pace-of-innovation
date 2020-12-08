import React from 'react';
import {useTransition, animated} from 'react-spring';


import data from './data';
import TimeBar from './TimeBar';
import Bar from './Bar';

function reverseTransition(arr) {
    const result = [];
    for (let idx = 0; idx < arr.length; idx++) {
      result.push({
        ...arr[idx],
        props: arr[arr.length - 1 - idx].props
      });
    }
    return result;
  }
  
export default function Bars(){
    const items = data;

const transitions = useTransition(items, item => item.key, {
from: { transform: 'translate3d(0,40px,0)', opacity:0 },
enter: { transform: 'translate3d(0,0px,0)', opacity:1 },
unique: true,
trail: 1000 / items.length,

})
return(
 <div className="bars">


{reverseTransition(transitions).map(({ item, props, key })=>
<animated.div key={item.key} style={props}>
<Bar length={item.length} icon={item.icon} label={item.name} />
</animated.div>
  )}


<TimeBar/>
<animated.div className="vert-bar"/>
    </div>

)
};