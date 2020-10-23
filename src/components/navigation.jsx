import React, { Component } from "react";

export default class navigation extends Component {
  state = {
    flag: '"5"',
    tv: '"3"',
    friends: '"6"',
    calendar: '"0"',
    meassages: '"5"',
    notifications: '"5"',
    profile: {
      avatar: "img/avatar/hero.png",
      name: "Yassine",
    },
  };

  componentDidMount() {
    if (this.state.flag !== '"0"') {
      document.documentElement.style.setProperty("--flag", this.state.flag);
    }
    if (this.state.tv !== '"0"') {
      document.documentElement.style.setProperty("--tv", this.state.tv);
    }
    if (this.state.friends !== '"0"') {
      document.documentElement.style.setProperty(
        "--friends",
        this.state.friends
      );
    }
    if (this.state.calendar !== '"0"') {
      document.documentElement.style.setProperty(
        "--calendar",
        this.state.calendar
      );
    }
    if (this.state.meassages !== '"0"') {
      document.documentElement.style.setProperty(
        "--messages",
        this.state.meassages
      );
    }
    if (this.state.notifications !== '"0"') {
      document.documentElement.style.setProperty(
        "--notif",
        this.state.notifications
      );
    }
    // console.log(document.documentElement.style);
  }
  render() {
    return (
      <nav>
        {/*logo and search*/}
        <div className="left-side">
          <div className="logo">
            <img src="img/icons/facebook.svg" alt="" />
          </div>
          <div className="search">
            <input type="text" placeholder="Search Facebook" />
          </div>
        </div>
        {/*tab icons*/}
        <div className="tabs">
          <div className="tab-icon active">
            <div className="icon">
              <img src="img/icons/home.svg" alt="" />
            </div>
          </div>
          <div className="tab-icon">
            <div className="icon has-notification flag">
              <img src="img/icons/flag.svg" alt="" />
            </div>
          </div>
          <div className="tab-icon">
            <div className="icon has-notification tv">
              <img src="img/icons/tv.svg" alt="" />
            </div>
          </div>
          <div className="tab-icon">
            <div className="icon has-notification users">
              <img src="img/icons/users.svg" alt="" />
            </div>
          </div>
          <div className="tab-icon">
            <div className="icon has-notification calendar">
              <img src="img/icons/calendar.svg" alt="" />
            </div>
          </div>
        </div>
        {/*right side*/}
        <div className="right-side">
          <div className="user">
            <div className="profile">
              <img src={this.state.profile.avatar} alt="" />
            </div>
            <h4>{this.state.profile.name}</h4>
          </div>
          {/*icons*/}
          <div className="user-icons">
            <div className="icon">
              <img src="img/icons/plus.svg" alt="" />
            </div>
            <div className="icon has-notification messenger">
              <img src=" img/icons/messenger.svg" alt="" />
            </div>
            <div className="icon has-notification notif">
              <img src="img/icons/bell.svg" alt="" />
            </div>
            <div className="icon">
              <img src="img/icons/arrow.svg" alt="" />
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
