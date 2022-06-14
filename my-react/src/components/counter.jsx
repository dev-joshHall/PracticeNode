import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <br />
          <span className={this.getBadgeClasses()}>
            {this.props.counter.item}
          </span>
          <div className="text-right col-sm">
            <button
              onClick={() => this.props.onDecrement(this.props.counter)}
              className="btn btn-secondary incBtn btn-sm m-2"
            >
              -
            </button>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button
              onClick={() => this.props.onIncrement(this.props.counter)}
              className="btn btn-secondary incBtn btn-sm m-2"
            >
              +
            </button>
            <button
              onClick={() => this.props.onDelete(this.props.counter.id)}
              className="btn btn-danger btn-sm m-2"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    return this.props.counter.value === 0 ? "0" : this.props.counter.value;
  }
}

export default Counter;
