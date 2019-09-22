import React, { Component } from "react";
import gameoverGif from "./gameover.gif"
import madwin from "./madWin.gif";
import replay from "./replay.png";
import time from "./time.gif";

class Win extends Component {
    startAgain = () => {
        window.location.reload();

    }
    render() {
        return (
            <>

                <img src={madwin} alt="evil clown" height="300px" />


                <h1 className="wonText animated  swing"> You Won </h1>


                {/* Try Again Button */}

                <br />
                <button className="border-0 animated infinite rotateIn delay-1s" style={{ backgroundColor: "transparent" }} onClick={() => this.startAgain()}>
                    <img src={replay} alt="try Again icon" height="120px" />

                </button>
            </>

        )

    }
}

export default Win;