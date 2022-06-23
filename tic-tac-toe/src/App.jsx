import React, { Component } from "react";
import "./App.css";
import Board from "./components/ttt-board";

class App extends Component {
  state = {
    buttons: [...Array(9).keys()].map((x) => {
      return { key: x + 1, val: " ", color: "normal" };
    }),
    turn: "O",
    winner: "",
  };

  render() {
    return (
      <React.Fragment>
        <Board buttons={this.state.buttons} onPlayMove={this.playMove} />
      </React.Fragment>
    );
  }

  playMove = (squareKey) => {
    console.log("Playing " + this.state.turn + " for square " + squareKey);
    let buttons = [...this.state.buttons];
    buttons = buttons.map((x) => {
      return x.key === squareKey
        ? { key: x.key, val: x.val === " " ? this.state.turn : x.val }
        : x;
    });
    this.setState({ buttons });

    const turn = this.state.turn === "X" ? "O" : "X";
    this.setState({ turn }, this.checkWin);
  };

  checkWin = () => {
    const btnVals = this.state.buttons.map((x) => {
      return x.val;
    });
    console.log(btnVals);
    // complete all checks for each symbol
    for (const sym of ["X", "O"]) {
      // check for horizontal wins
      for (let i = 0; i < 9; i += 3) {
        if (
          btnVals[i] === sym &&
          btnVals[i + 1] === sym &&
          btnVals[i + 2] === sym
        ) {
          console.log(sym + "'s won!");
          this.setState({ winner: sym });
        }
      }
      // check for vertical wins
      for (let i = 0; i < 3; i++) {
        if (
          btnVals[i] === sym &&
          btnVals[i + 3] === sym &&
          btnVals[i + 6] === sym
        ) {
          console.log(sym + "'s won!");
          this.setState({ winner: sym });
        }
      }
      // check for diagonal wins
      if (btnVals[0] === sym && btnVals[4] === sym && btnVals[8] === sym) {
        console.log(sym + "'s won!");
        this.setState({ winner: sym });
      }
      if (btnVals[2] === sym && btnVals[4] === sym && btnVals[6] === sym) {
        console.log(sym + "'s won!");
        this.setState({ winner: sym });
      }
    }
  };
}

export default App;
