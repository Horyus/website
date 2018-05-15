import React, {Component} from 'react';
import './App.css';
import Particles from './components/magicparticles';
import horyus from './images/horyus.png';
import HoryusDetail from './components/horyus_details';
import VortexDetail from './components/vortex_details';
import ComingSoonDetails from "./components/comingsoon_details";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            details: HoryusDetail,
            vselected: "_",
            thselected: "_",
            tselected: "_"
        };

        this.setVortex = this.setVortex.bind(this);
        this.setThunder = this.setThunder.bind(this);
        this.setTicket = this.setTicket.bind(this);
        this.setHoryus = this.setHoryus.bind(this);

    }

    setHoryus() {

        let vortex = "_";
        if (this.state.vselected === 'vortex')
            vortex = "vnone";

        let thunder = "_";
        if (this.state.thselected === 'thunder')
            thunder = "thnone";

        let ticket = "_";
        if (this.state.tselected === 'ticket')
            ticket = "tnone";

        this.setState({
            details: HoryusDetail,
            vselected: vortex,
            thselected: thunder,
            tselected: ticket
        })
    }

    setVortex() {

        let thunder = "_";
        if (this.state.thselected === 'thunder')
            thunder = "thnone";

        let ticket = "_";
        if (this.state.tselected === 'ticket')
            ticket = "tnone";

        this.setState({
            details: VortexDetail,
            vselected: "vortex",
            thselected: thunder,
            tselected: ticket
        })
    }

    setThunder() {

        let vortex = "_";
        if (this.state.vselected === 'vortex')
            vortex = "vnone";

        let ticket = "_";
        if (this.state.tselected === 'ticket')
            ticket = "tnone";

        this.setState({
            details: ComingSoonDetails,
            vselected: vortex,
            thselected: "thunder",
            tselected: ticket
        })
    }

    setTicket() {

        let vortex = "";
        if (this.state.vselected === 'vortex')
            vortex = "vnone";

        let thunder = "";
        if (this.state.thselected === 'thunder')
            thunder = "thnone";

        this.setState({
            details: ComingSoonDetails,
            vselected: vortex,
            thselected: thunder,
            tselected: "ticket"
        })

    }

    render() {
        return <div id="particle-div">
            <Particles/>
            <div style={{
                width: '40%',
                marginLeft: window.innerWidth * 0.3,
            }}>
                <img src={horyus} style={{
                    width: '50%',
                    marginLeft: '25%'
                }} alt="Horyus" onMouseOver={this.setHoryus}/>
                <p className={"slogan"}>Blockchain Open Source Content Makers</p>
            </div>
            <div style={{
                marginLeft: window.innerWidth * 0.05,
                height: window.innerHeight * 0.7,
                width: window.innerWidth * 0.1,
                float: 'left'
            }}>
                <p className="describer">tools</p>
                <a href={"https://github.com/Horyus/vortex"}><p className="title" onMouseOver={this.setVortex}>Vort<span className={this.state.vselected}>Ξ</span>x</p></a>
                <a href={"https://google.com"}><p className="title" onMouseOver={this.setThunder}>Thund<span className={this.state.thselected}>Ξ</span>r</p></a>
                <p className="describer">projects</p>
                <a href={"https://google.com"}><p className="title" onMouseOver={this.setTicket}>Tick<span className={this.state.tselected}>Ξ</span>t<span className={this.state.tselected}>721</span></p></a>

            </div>
            <this.state.details/>
            <div style={{
                marginRight: window.innerWidth * 0.05,
                height: window.innerHeight * 0.7,
                width: window.innerWidth * 0.1,
                float: 'right'
            }}>
                <p className="describer_right">more</p>
                <p className="title_right">contact</p>
                <p className="title_right">blog</p>

            </div>
        </div>;
    }
}

export default App;
