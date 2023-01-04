import React from "react";
import "./Posts.css";

function Posts({ post, userInfo }) {
  //* find how to manage dates
  console.log("in posts", post, post.user);
  return (
    <div className="post-container">
      <div className="post-header">
        <div className="post-pic">
          <img src={post.user.profile_URL} alt="profile pic" />
        </div>
        <h5 className="post-name">{post.user.username}</h5>
      </div>

      <p className="date">Jan 3, 2022</p>
      <div className="post-info">
        <h4 className="post-improve">Improvement</h4>
        <p className="post-categories">Push-Ups: {post.push_ups}</p>
        <p className="post-categories">Pull-Ups: {post.pull_ups}</p>
        <p className="post-categories">
          Mile: {post.mile_min}:{post.mile_sec}
        </p>
        <div>
          <h4 className="comments">Commments:</h4>
          <p className="comments-writing">{post.comment}</p>
        </div>
      </div>
    </div>
  );
}

export default Posts;
