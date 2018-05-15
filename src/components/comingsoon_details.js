import * as React from "react";
import Lottie from 'react-lottie';
import * as ComingSoonAnimation from '../animations/comingsoon.json';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: ComingSoonAnimation,
};

export default class ComingSoonDetails extends React.Component {
   render() {
       return (
           <div
               style={{
                   height: window.innerHeight * 0.4,
                   width: window.innerWidth * 0.3,
                   marginLeft: window.innerWidth * 0.2,
                   float: 'left'
               }}>
               <Lottie options={defaultOptions}/>
               <p className="projslogan">Coming Soon !</p>
           </div>
       );
   }
}
