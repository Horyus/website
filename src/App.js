import React, {Component} from 'react';
import {Particles} from 'react-particles-js';
import './App.css';
import horyus from './images/horyus.png';
import Lottie from 'react-lottie';
import * as VortexAnimation from './animations/test.json';


class App extends Component {
    render() {
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: VortexAnimation,
        };
        return <div id="particle-div">

            <Particles
                params={
                    {
                        "particles": {
                            "number": {"value": 10, "density": {"enable": true, "value_area": 1000}},
                            "color": {"value": ["#ffffff", "#188ae2"]},
                            "opacity": {
                                "value": 0.5,
                                "random": true,
                                "anim": {"enable": true, "speed": 0.25, "opacity_min": 0.2, "sync": false}
                            },
                            "size": {
                                "value": 8,
                                "random": true,
                                "anim": {
                                    "enable": true,
                                    "speed": 1,
                                    "size_min": 6,
                                    "sync": false
                                }
                            },
                            "line_linked": {
                                "enable": false,
                            },
                            "move": {
                                "enable": true,
                                "speed": 1.5,
                                "speed_min": 1,
                                "direction": "top",
                                "random": true,
                                "straight": false,
                                "out_mode": "out",
                                "bounce": false

                            },
                            "retina_detect": true
                        }
                    }
                }

                width={window.innerWidth}

                height={window.innerHeight}

                style={{
                    position: 'fixed',
                    zIndex: -200
                }}

            />
            <div style={{
                width: '40%',
                marginLeft: window.innerWidth * 0.3,
            }}>
                <img src={horyus} style={{
                    width: '50%',
                    marginLeft: '25%'
                }} alt="Horyus"/>
                <p id={"slogan"}>Blockchain Open Source Content Makers</p>
            </div>
            <div style={{
                marginLeft: window.innerWidth * 0.05,
                height: window.innerHeight * 0.7,
                width: window.innerWidth * 0.1,
                float: 'left'
            }}>
                <p className="describer">tools</p>
                <a href={"https://github.com/Horyus/vortex"}><p className="title">VortΞx</p></a>
                <p className="title">ThundΞr</p>
                <p className="describer">projects</p>
                <p className="title">TickΞt721</p>

            </div>
            <div
            style={{
                height: window.innerHeight * 0.4,
                width: window.innerWidth * 0.4,
                marginLeft: window.innerWidth * 0.15,
                float: 'left'
            }}>
            <Lottie options={defaultOptions}
                    width={window.innerWidth * 0.4}/>
            </div>
            <div style={{
                marginRight: window.innerWidth * 0.05,
                height: window.innerHeight * 0.7,
                width: window.innerWidth * 0.1,
                float: 'right'
            }}>
                <p className="describer_right">more</p>
                <p className="title_right">Contact</p>
                <p className="title_right">Blog</p>

            </div>
        </div>;
    }
}

export default App;
