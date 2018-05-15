import * as React from "react";
import logo from '../images/logo.png';
import './horyus_details.css';

export default class HoryusDetails extends React.Component {
   render() {
       return (
           <div
               style={{
                   height: window.innerHeight * 0.4,
                   width: window.innerWidth * 0.3,
                   marginLeft: window.innerWidth * 0.2,
                   float: 'left'
               }}>
               <img src={logo} alt={"Horyus"} style={{
                   width: '70%',
                   marginLeft: '15%',
                   opacity: 1
               }} className="hvr-bob"/>
           </div>
       );
   }
}
