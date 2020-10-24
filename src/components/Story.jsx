import React, { useState } from "react";

export default function Story(props) {
  return (
    <div className="item">
      <div className="overlay">
        <div className="person">
          <div className="profile">
            <img src={props.data.avatar} alt="" />
          </div>
        </div>
        <h5 style={{ color: "white" }}> {props.data.text}</h5>
      </div>
      <div className="story-image">
        <img src={props.data.image} alt="" />
      </div>
    </div>
  );
}
