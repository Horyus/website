import * as React from "react";
import Particles from 'react-particles-js';

export default class MagicParticles extends React.Component {

    constructor(props) {
        super(props);

        this.rendered = false;
    }

    shouldComponentUpdate() {
        if (!this.rendered) {
            this.rendered = true;
            return true;
        }
        return false;
    }

    render() {
        this.rendered = true;
        return (
            <Particles
                params={
                    {
                        "particles": {
                            "number": {"value": 8, "density": {"enable": true, "value_area": 1000}},
                            "color": {"value": ["#ffffff", "#188ae2"]},
                            "opacity": {
                                "value": 0.2,
                                "random": true,
                                "anim": {"enable": true, "speed": 0.25, "opacity_min": 0.1, "sync": false}
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
        );
    }
}
