import React, { Component } from "react";

import logo from './logo.svg';
import './App.css';
import Questions from './Questions'
import Intro from './Intro'
import Music from './music2.mp3'
import Sound from "react-sound"


class App extends Component {
  state = {
    isDone: false,
    playsound: Sound.status.PLAYING

  };



  render() {

    //const setView = () => {



    //     })

    // };


    return (

      <div className=" mybackground">
        <div className="App">
          {/* <h1 className="text-white ">Can Count</h1> */}
          {/* <header className="App-header"> */}
          <Sound url={Music} playStatus={this.state.playsound} loop={true} />


          {/* <audio src={Music}></audio> */}
          <Intro />
          {/* </header> */}
        </div>
      </div>

    );
  };
}

export default App;
