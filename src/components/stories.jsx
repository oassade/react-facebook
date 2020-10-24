import React, { useState } from "react";
import Story from "./Story";

export default function Stories() {
  const [story, setStory] = useState({
    stories: [
      {
        id: 1,
        avatar: "img/avatar/2.jpg",
        image: "img/stories/st-2.jpeg",
      },
      {
        id: 2,
        avatar: "img/avatar/2.jpg",
        image: "img/stories/st-2.jpeg",
      },
      {
        id: 3,
        avatar: "img/avatar/2.jpg",
        image: "img/stories/st-2.jpeg",
      },
      {
        id: 4,
        avatar: "img/avatar/2.jpg",
        image: "img/stories/st-2.jpeg",
      },
      {
        id: 5,
        avatar: "img/avatar/2.jpg",
        image: "img/stories/st-2.jpeg",
      },
    ],
  });
  const stories = story.stories.map((x) => {
    return <Story />;
  });
  return (
    <div className="stories">
      <div className="owl-controls">
        <div className="owl-nav">
          <div className="controllers nxtBtn">
            <img src="img/icons/arrow-right.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="owl-carousel owl-theme slider">
        <div className="item">
          <div className="overlay first">
            <div className="create">
              <div className="icon">
                <img src="img/icons/plus.svg" alt="" />
              </div>
              <span>Create a Story</span>
            </div>
          </div>
          <div className="story-image">
            <img src="img/avatar/hero.png" alt="" />
          </div>
        </div>
        {/**/}
        {stories}
      </div>
    </div>
  );
}
