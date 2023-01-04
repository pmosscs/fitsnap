import React, { useCallback, useEffect, useState } from "react";
import Posts from "../posts/Posts";
import "./Profile.css";
import axios from "axios";

const ProfileFeed = ({ userInfo }) => {
  const { userId } = userInfo;

  const [posts, setPosts] = useState([]);

  const getUserPosts = useCallback(() => {
    axios
      .get(`http://localhost:4000/getuserposts/${userId}`)
      .then((res) => setPosts(res.data));
  }, [userId]);

  useEffect(() => {
    getUserPosts();
  }, [getUserPosts]);

  console.log(posts);

  const profilePosts = posts.map((post) => {
    return <Posts post={post} userInfo={userInfo} />;
  });

  return (
    <div className="profile">
      <div className="profile-middle-bar"></div>
      <div className="profile-feed">{profilePosts}</div>
    </div>
  );
};

export default ProfileFeed;

// const getUserPosts = useCallback(() => {
//   axios
//     .get(`/userposts/${userId}`)
//     .then((res) => setPosts(res.data))
//     .catch((err) => console.log(err));
// }, [userId]);

// useEffect(() => {
//   getUserPosts();
// }, [getUserPosts]);
