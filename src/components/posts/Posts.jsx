import React from "react";
import "./Posts.css";

function Posts() {
  return (
    <div className="post-container">
      <div className="post-header">
        <div className="post-pic"></div>
        <h5 className="post-name">Peyton Moss</h5>
      </div>
      <p className="date">Jan 3, 2022</p>
      <div className="post-info">
        <h4 className="post-improve">Improvement</h4>
        <p className="post-categories">Push-Ups: 5</p>
        <p className="post-categories">Pull-Ups: 3</p>
        <p className="post-categories">Mile: 7:55</p>
        <div>
          <h4 className="comments">Commments:</h4>
          <p className="comments-writing">
            These are my comments on the post here. Lalalalala Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Consectetur deserunt corrupti
            accusamus optio voluptatibus deleniti. Rem, accusantium iusto eos
            perferendis officia asperiores distinctio enim? Ea eos fugiat magnam
            doloribus? Dolor!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Posts;
