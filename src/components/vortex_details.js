import * as React from "react";
import * as VortexAnimation from '../animations/vortex.json';
import Lottie from 'react-lottie';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: VortexAnimation,
};

export default class VortexDetails extends React.Component {
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
               <p className="projslogan">VortΞx, the React Dapp Booster</p>
               <p className="subslogan">A Dapp-ready State Manager to enhance your Ethereum Dapps. Interact with the Blockchain in a whole new way !</p>
           </div>
       );
   }
}
