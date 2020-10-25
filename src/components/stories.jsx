import React, { useState } from "react";
import Story from "./Story";
import axios from "axios";

export default function Stories() {
  const [story, setStory] = useState({
    stories: [],
  });
  axios.get("/data/stories.json").then((response) => {
    setStory({ stories: response.data.stories });
  });
  const stories = story.stories.map((story) => {
    const data = {
      id: story.id,
      avatar: story.avatar,
      image: story.image,
      text: story.text,
    };
    return <Story data={data} />;
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
