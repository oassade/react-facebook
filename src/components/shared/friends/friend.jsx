import React, { Component } from "react";

export default class friend extends Component {
  state = { hide: false };
  supp() {
    this.setState({ hide: true });
  }
  render() {
    // function makeCalculation({ x, y: d, z = 4 }) {
    //   return Math.floor((x + d + z) / 3);
    // }
    // const obj = {
    //   x: 4,
    //   y: 5,
    // };
    // console.log(makeCalculation(obj));
    return (
      <div
        className={this.state.hide ? "hidde" : "user item"}
        onClick={this.supp.bind(this)}
      >
        <div className={this.props.conn ? "profile conn" : "profile nconn"}>
          <img src={this.props.image} alt="" />
        </div>
        {this.props.name && <h4>{this.props.name}</h4>}
      </div>
    );
  }
}
