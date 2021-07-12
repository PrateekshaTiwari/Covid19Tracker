import React from "react";
import { connect } from "react-redux";
import { sortDistrictData } from "../redux/districtActions";
import {sortStateData} from "../redux/stateActions";

class Button extends React.Component {
  

  render() {
    return (
      <span>
        <button name="desc" onClick={(event)=>{this.props.type === "State"?this.props.sortStateData("desc",this.props.sortKey):this.props.sortDistrictData("desc",this.props.sortKey);
          }}>
          ↑
        </button>
        <button name="asc" onClick={()=>{this.props.type === "State"?this.props.sortStateData("asc",this.props.sortKey):this.props.sortDistrictData("asc",this.props.sortKey)}}>
          ↓
        </button>
      </span>
    );
  }
}

const mapStateToProps = (state) => { 
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sortStateData: (type,sortKey) => dispatch(sortStateData(type,sortKey)),
    sortDistrictData: (type,sortKey) => dispatch(sortDistrictData(type,sortKey))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Button);