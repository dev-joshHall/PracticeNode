import React from "react";
import Square from "./square";

const Board = (props) => {
  return (
    <div className="board">
      <br />
      {props.buttons.map((x) => {
        if (x.key < 4) {
          return (
            <Square
              key={x.key}
              keyName={x.key}
              squareVal={x.val}
              onPlayMove={props.onPlayMove}
              winner={props.winner}
            ></Square>
          );
        }
        return null;
      })}
      <br />
      {props.buttons.map((x) => {
        if (x.key > 3 && x.key < 7) {
          return (
            <Square
              key={x.key}
              keyName={x.key}
              squareVal={x.val}
              onPlayMove={props.onPlayMove}
              winner={props.winner}
            ></Square>
          );
        }
        return null;
      })}
      <br />
      {props.buttons.map((x) => {
        if (x.key > 6) {
          return (
            <Square
              key={x.key}
              keyName={x.key}
              squareVal={x.val}
              onPlayMove={props.onPlayMove}
              winner={props.winner}
            ></Square>
          );
        }
        return null;
      })}
      <br />
      <button className="btn btn-info m-4" onClick={props.clearBoard}>
        Reset
      </button>
    </div>
  );
};

export default Board;
