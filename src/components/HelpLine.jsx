import numbers from "../HelpLineNumbers";
import StateHelpLine from "./StateHelpLine";
import React from "react";

function createHelpEntry(entry) {
  return (
    <StateHelpLine
      key={entry.state}
      state={entry.state}
      number={entry.number}
    />
  );
}

function HelpLine() {
  console.log(numbers);
  return (
    <div>
      <h1 className="help-heading">HelpLine Numbers in India</h1>
      {numbers.map(createHelpEntry)}
    </div>
  );
}

export default HelpLine;