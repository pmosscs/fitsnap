import React, { useState, useCallback, useEffect } from "react";
import "./Home.css";
import Posts from "../posts/Posts";
import axios from "axios";

const HomeBody = ({ userInfo }) => {
  const { userId } = userInfo;

  const [posts, setPosts] = useState([]);

  const getAllPosts = useCallback(() => {
    axios
      .get(`http://localhost:4000/getallposts`)
      .then((res) => setPosts(res.data));
  }, [userId]);

  useEffect(() => {
    getAllPosts();
  }, [getAllPosts]);

  console.log(posts);

  const profilePosts = posts.map((post) => {
    return <Posts post={post} userInfo={userInfo} />;
  });

  return (
    <div className="home">
      <div className="middle-bar"></div>
      <div className="home-feed">
        {}
        {profilePosts}
      </div>
      <div className="sidebar"></div>
    </div>
  );
};

export default HomeBody;
