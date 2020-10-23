import React, { Component } from "react";

export default class sidebar extends Component {
  state = {
    profil: {
      avatar: "img/avatar/hero.png",
      name: "Omar",
    },
    first: {
      covid: {
        avatar: "img/icons/shield.svg",
        name: "Omar",
      },
      friends: {
        avatar: "img/icons/colored-people.svg",
        name: "Omar",
      },
      messenger: {
        avatar: "img/icons/colored-messenger.svg",
        name: "Omar",
      },
      pages: {
        avatar: "img/icons/colored-flag.svg",
        name: "Omar",
      },
      more: {
        avatar: "img/icons/arrow-down.svg",
        name: "Omar",
      },
    },
    second: {
      designers: {
        avatar: "img/stories/st-1.jpeg",
        name: "Omar",
      },
      script: {
        avatar: "img/stories/st-2.jpeg",
        name: "Omar",
      },
      ui: {
        avatar: "img/stories/st-3.jpeg",
        name: "Omar",
      },
      netflix: {
        avatar: "img/stories/st-4.jpg",
        name: "Omar",
      },
      future: {
        avatar: "img/stories/page-1.jpg",
        name: "Omar",
      },
      smart: {
        avatar: "img/stories/page-2.jpg",
        name: "Omar",
      },
    },
  };
  render() {
    const first = Object.keys(this.state.first).map((item) => {
      return (
        <div className="menu-item">
          <div className="item-row">
            <div className="icon">
              <img src={this.state.first[item].avatar} alt="" />
            </div>
            <h4>{this.state.first[item].name} </h4>
          </div>
        </div>
      );
    });
    const second = Object.keys(this.state.second).map((item) => {
      return (
        <div className="menu-item">
          <div className="item-row">
            <div className="icon">
              <img src={this.state.second[item].avatar} alt="" />
            </div>
            <h4>{this.state.second[item].name} </h4>
          </div>
        </div>
      );
    });
    return (
      <div className="shortcuts">
        <div className="first-col">
          <div class="user">
            <div class="profile">
              <img src={this.state.profil.avatar} alt="" />
            </div>
            <h4>{this.state.profil.name}</h4>
          </div>
          {first}
        </div>
        <div className="second-col">
          <h6 className="title">your shortcuts</h6>
          {second}
        </div>
      </div>
    );
  }
}
