import React, { Component } from "react";
import "./App.css";
import Intro from "./pages/Intro";
import Music from "./sounds/music2.mp3";
import Sound from "react-sound";

class App extends Component {
  state = {
    isDone: false,
    playsound: Sound.status.PLAYING
  };

  render() {
    return (
      <div className=" mybackground">
        <div className="App">
          <Sound url={Music} playStatus={this.state.playsound} loop={true} />
          <Intro />
        </div>
      </div>
    );
  }
}

export default App;
