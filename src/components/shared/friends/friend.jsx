import React, { Component } from "react";

export default class friend extends Component {
  render() {
    return (
      <div className="user item">
        <div className={this.props.conn ? "profile conn" : "profile nconn"}>
          <img src={this.props.image} alt="" />
        </div>
        {this.props.name && <h4>{this.props.name}</h4>}
      </div>
    );
  }
}
