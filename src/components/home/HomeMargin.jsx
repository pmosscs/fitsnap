import React, { useEffect } from "react";
import "./Home.css";

const HomeMargin = ({ userInfo }) => {
  const { username, profile_URL } = userInfo;
  console.log(profile_URL);

  return (
    <div>
      <div className="profile-placeholder"></div>
      <h2>{username}</h2>
    </div>
  );
};

export default HomeMargin;
