import React, { Component } from "react";
import Friend from "./friend";
export default class friends extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    contacts: [
      {
        conn: true,
        image: "img/avatar/1.jpg",
        name: "Omar",
      },
      {
        conn: true,
        image: "img/avatar/1.jpg",
        name: "Omar",
      },
      {
        conn: true,
        image: "img/avatar/1.jpg",
        name: "Omar",
      },
      {
        conn: true,
        image: "img/avatar/1.jpg",
        name: "Omar",
      },
      {
        conn: true,
        image: "img/avatar/1.jpg",
        name: "Omar",
      },
      {
        conn: true,
        image: "img/avatar/1.jpg",
        name: "Omar",
      },
    ],
  };
  render() {
    var friends = this.state.contacts.map((friend) => {
      return this.props.name ? <Friend name={friend.name} /> : <Friend />;
    });
    return <>{friends}</>;
  }
}
