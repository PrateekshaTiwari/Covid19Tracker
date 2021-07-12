import React from "react";
import Buttons from "./Buttons";

class ColumnHeadings extends React.Component {
  constructor(props) {
    super(props);
    this.headings = ["Active", "Confirmed", "Deaths", "Recovered"];
  }

  render() {
    return (
      <div className="column-headings">
        <span className="column1">{this.props.type}</span>
        {this.headings.map((heading, idx) => {
          return (
            <span className={"column" + (idx + 2)}>
              {heading}{" "}
              <Buttons type={this.props.type} sortKey={heading} />
            </span>
          );
        })}
        <br />
        <br />
      </div>
    );
  }
}

export default ColumnHeadings;
