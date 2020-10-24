import React, { Component } from "react";

export default class friend extends Component {
  state = {
    profil: {
      avatar: "img/avatar/hero.png",
      name: "Omar",
    },
  };
  render() {
    return (
      <div className="user item">
        <div className="profile">
          <img src="img/avatar/2.jpg" alt="" />
        </div>
        {this.props.name && <h4>{this.state.profil.name}</h4>}
      </div>
    );
  }
}
