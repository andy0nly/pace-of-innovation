import React from 'react';
import Video from './video/crowd.mp4';
import videoStill from './video/crowd.jpg';

export default function VideoBG(){

        return (
            <video
              autoPlay
              muted
              loop
              style={{
                position: "fixed",
                width: "100%",
                left: 0,
                top: 0,
             
                transition: "opacity, 2s ease-in-out"
              }}
            >
              <source src={Video} type="video/mp4" />
            </video>
          );

  }
