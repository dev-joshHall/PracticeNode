import React, { Component } from "react";

class NewItem extends Component {
  state = {
    nameVal: "",
  };

  render() {
    return (
      <React.Fragment>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            value={this.state.nameVal}
            onChange={(evt) => this.updateVal(evt)}
          />
          <div className="input-group-append">
            <button
              className="btn btn-primary btn-sm"
              onClick={() => {
                if (this.state.nameVal) {
                  const nameVal = "";
                  this.setState({ nameVal });
                  this.props.onAddItem(this.state.nameVal);
                }
              }}
            >
              Add
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }

  updateVal = (evt) => {
    const nameVal = evt.target.value;
    this.setState({ nameVal });
  };
}

export default NewItem;
