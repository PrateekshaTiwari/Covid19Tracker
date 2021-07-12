import React from "react";
import { connect } from "react-redux";
import {fetchStateData} from "../redux/stateActions";

class RefreshButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tipvisible: true };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ tipvisible: false });
    }, 3000);
  }

  handleClick() {
    this.setState({ refresh: true });
    this.props.fetchStateData();
    setTimeout(() => {
      this.setState({ refresh: false });
    }, 500);
  }

  render() {
    return (
      <div className="refresh-button">
        <button onClick={this.handleClick}>Refresh</button>
        <div
          className="tri"
          style={!this.state.tipvisible ? { display: "none" } : null}
        ></div>
        <span style={!this.state.tipvisible ? { display: "none" } : null}>
          Click here to reload data
        </span>
        <p style={!this.state.refresh ? { display: "none" } : null}>
          Refreshing...
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => { 
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStateData: () => dispatch(fetchStateData()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RefreshButton);
