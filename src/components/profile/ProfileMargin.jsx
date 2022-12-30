import axios from "axios";
import React, { useState, useContext } from "react";
import AuthContext from "../../store/AuthContext";
import "./Profile.css";

function ProfileMargin({ userInfo }) {
  const [isButton, setIsButton] = useState(true);
  const [imgLink, setImgLink] = useState("");
  console.log("from margin ", userInfo);

  const { token } = useContext(AuthContext);

  const changeHandler = (e) => {
    const { value } = e.target;
    setImgLink(value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submitHandler called");
    axios
      .put(
        `http://localhost:4000/userinfo/${userInfo.userId}`,
        { profile_URL: imgLink },
        {
          headers: {
            authorization: token,
          },
        }
      )
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
        console.log("error on update profile picture");
      });

    setImgLink("");
    setIsButton(true);
    console.log(imgLink);
  };

  return (
    <div>
      <div className="profile-pic">
        <img
          src={
            userInfo.profile_URL
              ? userInfo.profile_URL
              : "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
          }
          alt="profile"
        />
      </div>
      <div>
        {isButton ? (
          <button className="img-btn" onClick={() => setIsButton(false)}>
            Change Profile Picture
          </button>
        ) : (
          <div>
            <form onSubmit={(e) => submitHandler(e)}>
              <input
                className="img-input"
                type="text"
                placeholder="Paste Image Address"
                value={imgLink}
                onChange={(e) => changeHandler(e)}
              />
              <button className="img-btn2" type="submit">
                Update
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfileMargin;