import React from "react";

class StateHelpLine extends React.Component {
  render() {
    return (
      <div className="number-table">
        <span>{this.props.state}</span>
        <span>{this.props.number}</span>
        <hr />
      </div>
    );
  }
}

export default StateHelpLine;
