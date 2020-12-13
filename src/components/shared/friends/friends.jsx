import React, { Component } from "react";
import Friend from "./friend";
import axios from "axios";
export default class friends extends Component {
  state = {
    contacts: [],
  };
  componentDidMount() {
    axios.get("/data/friends.json").then((response) => {
      this.setState({ contacts: response.data.friends });
      // console.log(response.data);
    });

    // setTimeout(() => {
    //   this.setState({ contacts: [] });
    // }, 4000);
  }
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
