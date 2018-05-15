import React, {Component} from 'react';
import {Particles} from 'react-particles-js';
import './App.css';
import horyus from './images/horyus.png';

class App extends Component {
    render() {
        return (
            <div id="particle-div">

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
                        position: 'fixed'
                    }}

                />
                <img src={horyus} style={{
                    width: '20%'
                }}/>
            </div>
        );
    }
}

export default App;
