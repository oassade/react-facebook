/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import Friends from "./shared/friends/friends";
import Profile from "./shared/profile/Profile";
import Post from "./Post";

export default class timeline extends Component {
  state = {
    posts: [
      {
        conn: true,
        header: "Travellimg to the future 🌟 , it's alraedy 2020' 🙋‍♂🌈🌴",
        image: "img/posts/1.jpg",
        avatar: "img/avatar/5.jpg",
        name: "Omar",
        ca: "1 hour ago",
      },
      {
        conn: true,
        header: "Travellimg to the future 🌟 , it's alraedy 2020' 🙋‍♂🌈🌴",
        image: "img/posts/1.jpg",
        avatar: "img/avatar/5.jpg",
        name: "Omar",
        ca: "1 hour ago",
      },
      {
        conn: false,
        header: "Travellimg to the future 🌟 , it's alraedy 2020' 🙋‍♂🌈🌴",
        image: "img/posts/1.jpg",
        avatar: "img/avatar/5.jpg",
        name: "Omar",
        ca: "1 hour ago",
      },
      {
        conn: true,
        header: "Travellimg to the future 🌟 , it's alraedy 2020' 🙋‍♂🌈🌴",
        image: "img/posts/1.jpg",
        avatar: "img/avatar/5.jpg",
        name: "Omar",
        ca: "1 hour ago",
      },
      {
        conn: false,
        header: "Travellimg to the future 🌟 , it's alraedy 2020' 🙋‍♂🌈🌴",
        image: "img/posts/1.jpg",
        avatar: "img/avatar/5.jpg",
        name: "Omar",
        ca: "1 hour ago",
      },
    ],
  };

  render() {
    const posts = this.state.posts.map((post) => {
      // console.log(post);
      return <Post data={post} />;
    });
    return (
      <div className="timeline">
        <div className="view create-post">
          <div className="input">
            <Profile />
            <input type="text" placeholder="What on your mind, Anne?" />
          </div>
          <div className="media">
            <div className="category">
              <div className="option">
                <div className="icon">
                  <img src="img/icons/video-live.svg" alt="" />
                </div>
                <span>Live video</span>
              </div>
              <div className="option">
                <div className="icon">
                  <img src="img/icons/photos.svg" alt="" />
                </div>
                <span>photo/video</span>
              </div>
              <div className="option">
                <div className="icon">
                  <img src="img/icons/smile.svg" alt="" />
                </div>
                <span>feeling/activity</span>
              </div>
            </div>
          </div>
        </div>
        <div className="create-post view smaller-margin">
          <div className="upper">
            <div className="title">
              <div className="icon">
                <img src="img/icons/video-room.svg" alt="" />
              </div>
              <span>Rooms</span>
            </div>
            <a>create</a>
          </div>
          <div className="owl-carousel owl-theme rooms">
            <Friends name={false} />
          </div>
        </div>
        {posts}
        {/*people you may know*/}
        <div className="view friends smaller-margin">
          <div className="upper">
            <h6>people you may know</h6>
            <div className="dots">
              <div className="dot" />
            </div>
          </div>
          <div className="owl-carousel owl-theme people">
            <div className="item">
              <div className="person-img">
                <div className="icon">×</div>
                <img src="img/avatar/1.jpg" alt="" />
              </div>
              <div className="info">
                <h4>rosie pie</h4>
                <span>4 mutual friend</span>
                <button>add friend</button>
              </div>
            </div>
            {/**/}
            <div className="item">
              <div className="person-img">
                <div className="icon">×</div>
                <img src="img/avatar/4.jpg" alt="" />
              </div>
              <div className="info">
                <h4>sarah jones</h4>
                <span>4 mutual friend</span>
                <button>add friend</button>
              </div>
            </div>
            {/**/}
            <div className="item">
              <div className="person-img">
                <div className="icon">×</div>
                <img src="img/avatar/3.jpg" alt="" />
              </div>
              <div className="info">
                <h4>chris doe</h4>
                <span>4 mutual friend</span>
                <button>add friend</button>
              </div>
            </div>
            {/**/}
            <div className="item">
              <div className="person-img">
                <div className="icon">×</div>
                <img src="img/avatar/2.jpg" alt="" />
              </div>
              <div className="info">
                <h4>katie adam</h4>
                <span>4 mutual friend</span>
                <button>add friend</button>
              </div>
            </div>
            {/**/}
          </div>
        </div>
      </div>
    );
  }
}
