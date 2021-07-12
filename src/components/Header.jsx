import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <span>Covid-19 Tracker</span>
        <Link to="/">Tracker</Link>
        <Link to="/helpline">Helpline</Link>
      </div>
    );
  }
}

export default Header;