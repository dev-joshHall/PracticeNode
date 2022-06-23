import React, { Fragment } from "react";
const Square = (props) => {
  return (
    <Fragment>
      <button
        className="btn btn-light m-1 square"
        onClick={() => {
          props.onPlayMove(props.keyName);
        }}
      >
        {props.squareVal}
      </button>
    </Fragment>
  );
};

export default Square;
