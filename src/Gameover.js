import React, { Component } from "react";
import gameoverGif from "./gameover.gif";
import ballonwith from "./ballonwith.gif";
import replay from "./replay.png";
class Gameover extends Component {
  startAgain = () => {
    window.location.reload();
  };
  render() {
    return (
      <>
        <img src={ballonwith} alt="evil clown" height="200px" />

        <img src={gameoverGif} alt="gameover" />
        <br />

        <h1 className="gameoverText animated  rollIn">
          {" "}
          “You know what they say about Derry,”
        </h1>

        <h1 className="gameover1Text animated  jackInTheBox delay-1s	 ">
          {" "}
          “Nobody who dies here ever really dies.”
        </h1>

        {/* Try Again Button */}

        <br />
        <button
          className="border-0 animated infinite rotateIn delay-3s"
          style={{ backgroundColor: "transparent" }}
          onClick={() => this.startAgain()}
        >
          <img src={replay} alt="try Again icon" height="120px" />
        </button>
      </>
    );
  }
}

export default Gameover;
