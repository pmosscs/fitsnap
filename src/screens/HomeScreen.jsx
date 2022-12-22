import React, { useCallback, useEffect, useContext, useState } from "react";
import HomeBody from "../components/home/HomeBody";
import HomeMargin from "../components/home/HomeMargin";
import AuthContext from "../store/AuthContext";
import axios from "axios";

function HomeScreen() {
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
    <div>
      <HomeMargin userInfo={userInfo} />
      <HomeBody />
    </div>
  );
}

export default HomeScreen;
