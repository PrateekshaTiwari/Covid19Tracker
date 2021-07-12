import React from "react";

class DistrictHeading extends React.Component{
    render(){
        return(
        <div className="heading">
        <h1>{this.props.state} District Data </h1>
      </div>);
    }
}

export default DistrictHeading;