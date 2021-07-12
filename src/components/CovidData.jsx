import React from "react";
import {connect} from "react-redux";
import StateData from "./StateData";
import ColumnHeadings from "./ColumnHeadings";
import RefreshButton from "./RefreshButton";
import {fetchStateData} from "../redux/stateActions";
import stateData from "./StateData";


class CovidData extends React.Component {

  componentDidMount() {
    this.props.fetchStateData();
  }


  render() {
    console.log(this.props.stateData);
    return (
      <div>
        <RefreshButton />
        <ColumnHeadings type={"State"}/>
        {this.props.stateData.map((state) => (
          <StateData
            key={state.state}
            state={state.state}
            active={state.active}
            confirmed={state.confirmed}
            deaths={state.deaths}
            recovered={state.recovered}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => { 
  return {
     stateData: state.state.stateData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStateData: () => dispatch(fetchStateData()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CovidData);
