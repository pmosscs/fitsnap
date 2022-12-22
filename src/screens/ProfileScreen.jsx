import React, { useState, useCallback, useContext, useEffect } from "react";
import ProfileMargin from "../components/profile/ProfileMargin";
import axios from "axios";
import AuthContext from "../store/AuthContext";

function ProfileScreen() {
  const { userId } = useContext(AuthContext);

  const [userInfo, setUserInfo] = useState({});

  const getUserInfo = useCallback(() => {
    axios
      .get(`http://localhost:4000/userinfo/${userId}`)

      .then(({ data }) => {
        setUserInfo(data);
      })
      .catch((err) => console.log(err));
  }, [userId]);

  useEffect(() => {
    getUserInfo();
  }, [getUserInfo]);

  console.log(userInfo);
  return (
    <>
      <ProfileMargin userInfo={userInfo} />
    </>
  );
}

export default ProfileScreen;
