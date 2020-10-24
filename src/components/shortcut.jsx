import React, { Component } from "react";
import Friends from "./shared/friends/friends";

export default class shortcut extends Component {
  state = {
    pages: [
      {
        image: "img/stories/st-2.jpeg",
        desc: "Script house",
      },
      {
        image: "img/stories/st-1.jpeg",
        desc: "Script house",
      },
    ],
    birthdays: [
      {
        image: "img/icons/gift.svg",
        desc: "it's diana berry's birthday",
      },
    ],
  };
  render() {
    return (
      <div className="shortcuts shortcuts-2">
        <div className="second-col first-col">
          <div className="menu-item">
            <div className="upper">
              <h6>Your pages</h6>
            </div>
          </div>
          <div className="menu-item">
            <div className="item-row">
              <div className="icon">
                <img src="img/stories/st-2.jpeg" alt="" />
              </div>
              <h4>Script house </h4>
            </div>
          </div>
          <div className="menu-item">
            <div className="item-row">
              <div className="icon">
                <img src="img/stories/st-1.jpeg" alt="" />
              </div>
              <h4>omar ui design </h4>
            </div>
          </div>
          <div className="menu-item">
            <div className="item-row  border">
              <div className="icon more">
                <img src="img/icons/arrow-down.svg" alt="" />
              </div>
              <h4>see more </h4>
            </div>
          </div>
        </div>
        <div className="second-col">
          <h6 className="title">birthdays</h6>
          <div className="menu-item">
            <div className="item-row">
              <div className="icon not-rounded">
                <img src="img/icons/gift.svg" alt="" />
              </div>
              <h4>it's diana berry's birthday </h4>
            </div>
          </div>
          <div className="online">
            <h6 className="title">contact</h6>
            <Friends name={true} />
          </div>
        </div>
      </div>
    );
  }
}
