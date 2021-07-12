import React from "react";
import Link from "react-router-dom";

class stateData extends React.Component {
  render() {
    return (
      <div className="state-data">
        <a href={"/" + this.props.state}>
          <span className="column1">{this.props.state}</span>
        </a>
        <span className="column2">{this.props.active}</span>
        <span className="column3">{this.props.confirmed}</span>
        <span className="column4">{this.props.deaths}</span>
        <span className="column5">{this.props.recovered}</span>
        <hr />
      </div>
    );
  }
}

export default stateData;
