import React, { Component } from "react";
import intro from "./intro.gif";
import play1 from "./play1.gif";

import it from "./it.png";
import counts from "./counts.png";
import Display from "./Display";

class Intro extends Component {
  state = {
    start: false
  };

  start = () => {
    //update state
    let newStartState = true;
    this.setState({
      start: newStartState
    });
  };

  chooseView = () => {
    if (this.state.start) return <Display />;
    else
      return (
        <>
          <img
            src={intro}
            alt="evil clown"
            height="300px"
            style={{ paddingBottom: 80 }}
          />

          <img src={it} alt="evil clown" height="100px" />
          <img
            src={counts}
            alt="evil clown"
            height="200px"
            className="questionText animated infinite flash"
            style={{ paddingBottom: 100 }}
          />
          <br />
          {/* play Button */}
          <button
            className="border-0 "
            style={{ backgroundColor: "transparent" }}
            onClick={() => this.start()}
          >
            <img
              src={play1}
              alt="play icon"
              height="120px"
              onClick={() => this.start()}
            />
          </button>
        </>
      );
  };

  render() {
    return <>{this.chooseView()}</>;
  }
}

export default Intro;
