import React from "react";
import StateData from "./StateData";
import DistrictHeading from "./DistrictHeading";
import ColumnHeadings from "./ColumnHeadings";
import { fetchDistrictData } from "../redux/districtActions";
import { withRouter } from "react-router-dom";
import {connect} from "react-redux";

class DistrictData extends React.Component {
  
  componentDidMount() {
    this.props.fetchDistrictData(this.props.match.params.state);
  }

 

  render() {
    console.log(this.props.districts);
    return (
      <div>
        <DistrictHeading state={this.props.match.params.state} />
        <ColumnHeadings type={"District"} />
        {this.props.districts.map((key) => {
          console.log(key);
          return (
            <StateData
              state={key}
              active={this.props.districtData[key].active}
              confirmed={this.props.districtData[key].confirmed}
              deaths={this.props.districtData[key].deceased}
              recovered={this.props.districtData[key].recovered}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => { 
  return {
    districts: state.district.districts,
    districtData: state.district.districtData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDistrictData: (stateName) => dispatch(fetchDistrictData(stateName))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DistrictData));
