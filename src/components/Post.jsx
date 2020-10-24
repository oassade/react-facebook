import React, { Component, lazy } from "react";
// const Profile = lazy(() =   > import ("./shared/profile/Profile"));
import Profile from "./shared/profile/Profile";

export default class Post extends Component {
  render() {
    return (
      <div className="view view-post-container smaller-margin">
        <div className="view-post">
          <div className="upper">
            <div className="d-flex">
              <div className="user">
                <div
                  className={
                    this.props.data.conn ? "profile conn" : "profile nconn"
                  }
                >
                  <img src={this.props.data.avatar} alt="" />
                </div>
              </div>
              <div className="info">
                <h6 className="name">{this.props.data.name}</h6>
                <span className="time">{this.props.data.ca}</span>
              </div>
            </div>
            <div className="dots">
              <div className="dot" />
            </div>
          </div>
          {/* post */}
          <div className="desc">
            <p>{this.props.data.header}</p>
          </div>
          <div className="post-img">
            <img src={this.props.data.image} alt="" />
          </div>
          {/* post-end */}
          <div className="actions-container">
            <div className="action">
              <div className="icon">
                <img src="img/icons/thumbs-up.svg" alt="" />
              </div>
              <span>like</span>
            </div>
            <div className="action">
              <div className="icon">
                <img src="img/icons/comment.svg" alt="" />
              </div>
              <span>comment</span>
            </div>
            <div className="action">
              <div className="icon">
                <img src="img/icons/share.svg" alt="" />
              </div>
              <span>share</span>
            </div>
          </div>
          <div className="write-comment">
            <Profile />
            <div className="input">
              <input type="text" placeholder="Write a comment" />
              <div className="media">
                <div className="icon">
                  <img src="img/icons/camera.svg" alt="" />
                </div>
                <div className="icon">
                  <img src="img/icons/image.svg" alt="" />
                </div>
                <div className="icon">
                  <img src="img/icons/smile-2.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
