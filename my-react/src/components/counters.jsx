import React, { Component, Fragment } from "react";
import Counter from "./counter";
import NewItem from "./newItem";

class Counters extends Component {
  render() {
    return (
      <Fragment>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        <button
          onClick={this.props.onDeleteAll}
          className="btn btn-danger btn-sm m-2"
        >
          Delete All
        </button>
        <br />
        <NewItem key={0} onAddItem={this.props.onAddItem} />
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            counter={counter}
          />
        ))}
      </Fragment>
    );
  }
}

export default Counters;
