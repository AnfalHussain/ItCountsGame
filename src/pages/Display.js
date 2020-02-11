import React, { Component } from "react";

import "../index.css";
import OldQuestions from "./Questions";

//Components
import Gameover from "./Gameover";
import Win from "./Win";
import Navbar from "react-bootstrap/Navbar";
import wrongSound from "../sounds/wrong.mp3";
import correctSound from "../sounds/correct.mp3";

// Images and Gifs
import correct2 from "../images/correct2.png";
import wrong2 from "../images/wrong2.png";
import live from "../images/live.png";
import gameIcon from "../images/gameIcon.gif";

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// shuffling the Questions
const Questions = shuffle(OldQuestions);

class Display extends Component {
  state = {
    score: 0,
    done: false,
    currentQuestionIndex: 0,
    currentLives: 3
  };

  selectView = () => {
    let currentLives = this.state.currentLives;
    //gameover view

    if (currentLives === 0) return <Gameover />;
    //end of questions
    else if (this.state.currentQuestionIndex === Questions.length) {
      return <Win />;
    }

    // normal questions view
    else {
      let QuestionsArray = Questions.map(question => {
        return (
          <h1 className="questionText animated  flash"> {question.title} </h1>
        );
      });
      return (
        <div>
          <div style={{ paddingTop: 80, paddingBottom: 80 }}>
            {/* Displaying the Questions */}
            <div>
              <h1 class="questionText">
                {QuestionsArray[this.state.currentQuestionIndex]}
              </h1>
            </div>
          </div>

          <div style={{ paddingBottom: 40 }}>
            {/* wrong Button */}
            <button
              className="border-0"
              style={{ backgroundColor: "transparent" }}
              onClick={() => this.setScore(false)}
            >
              <img src={wrong2} alt="wrong icon" height="120px" />
            </button>

            {/* correct Button */}
            <button
              className="border-0"
              style={{ backgroundColor: "transparent" }}
              onClick={() => this.setScore(true)}
            >
              <img src={correct2} alt="correct icon" height="120px" />
            </button>
          </div>
        </div>
      ); // end of return
    }
  };

  //used to set the score of the user
  setScore = UserChoice => {
    let currentScore = this.state.score;
    let currentLives = this.state.currentLives;
    let currentQuestionIndex = this.state.currentQuestionIndex;

    //before increasing the array index check if we have reached the end of the array or the lives are greater than 0

    if (currentQuestionIndex !== Questions.length && currentLives > 0) {
      let newQuestionIndex = currentQuestionIndex + 1;

      if (UserChoice === Questions[currentQuestionIndex].result) {
        let sound = new Audio(correctSound);
        sound.play();

        let newScore = currentScore + 1;

        this.setState({
          score: newScore,
          currentQuestionIndex: newQuestionIndex
        });
      }
      // if (this.state.choice !== Questions[currentQuestionIndex].result)
      else {
        let sound = new Audio(wrongSound);
        sound.play();

        let newScore = currentScore - 1;
        let newLives = currentLives - 1;
        this.setState({
          score: newScore,
          currentQuestionIndex: newQuestionIndex,
          currentLives: newLives
        });
      }
    } else {
      // the end of Question has been reached
      // should print the score now on the app.js
      // the task of this component has finished
      let newDoneState = true;
      this.setState({
        done: newDoneState
      });
    }
  };

  render() {
    // const balloons = [];
    // let lives = this.state.currentLives;

    // while (lives) {
    //     balloons.push(<img key={lives} src={live} role="presentational" />)
    //     lives--;
    // }

    const balloons = Array.from({ length: this.state.currentLives }, (_, i) => (
      <img
        className="animated infinite heartBeat "
        key={i}
        src={live}
        height="65px"
        role="presentational"
        alt=""
      />
    ));

    return (
      <>
        <Navbar bg="dark">
          <div className="mx-auto">
            <Navbar.Brand className="text-white myNavText ">
              Score: {this.state.score} 
            </Navbar.Brand>

            <Navbar.Brand className="text-white">
              <img src={gameIcon} alt="evil clown" height="80px" />
            </Navbar.Brand>

            <Navbar.Brand className="text-white myNavText">
              Lives: {balloons} 
            </Navbar.Brand>
          </div>
        </Navbar>

        {this.selectView()}
      </>
    );
  }
}
export default Display;
