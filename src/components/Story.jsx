import React, { useState } from "react";

export default function Story() {
  return (
    <div className="item">
      <div className="overlay">
        <div className="person">
          <div className="profile">
            <img src="img/avatar/2.jpg" alt="" />
          </div>
        </div>
        {/* <h4> samantha john</h4> */}
      </div>
      <div className="story-image">
        <img src="img/stories/st-2.jpeg" alt="" />
      </div>
    </div>
  );
}
