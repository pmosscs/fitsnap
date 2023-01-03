import React from "react";
import Posts from "../posts/Posts";
import "./Profile.css";

const ProfileFeed = ({ userInfo }) => {
  return (
    <div className="profile">
      <div className="profile-middle-bar"></div>
      <div className="profile-feed">
        <Posts />
      </div>
    </div>
  );
};

export default ProfileFeed;
