import React, { Component } from "react";
import Friend from "./friend";
export default class friends extends Component {
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
        conn: false,
        image: "img/avatar/1.jpg",
        name: "Omar",
      },
      {
        conn: true,
        image: "img/avatar/1.jpg",
        name: "Omar",
      },
      {
        conn: false,
        image: "img/avatar/1.jpg",
        name: "Omar",
      },
    ],
  };
  render() {
    var friends = this.state.contacts.map((contact) => {
      return this.props.name ? (
        <Friend name={contact.name} image={contact.image} conn={contact.conn} />
      ) : (
        <Friend conn={contact.conn} image={contact.image} />
      );
    });
    return <>{friends}</>;
  }
}
