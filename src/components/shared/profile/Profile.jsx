import React, { Component } from "react";

export default class Profile extends Component {
  state = {
    profil: {
      avatar: "img/avatar/4.jpg",
      name: "Omar",
    },
  };
  render() {
    return (
      <div class="user">
        <div class="profile conn">
          <img src={this.state.profil.avatar} alt="" />
        </div>
        {this.props.name && <h4>{this.state.profil.name}</h4>}
      </div>
    );
  }
}
