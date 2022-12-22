import React, { useState } from "react";
import "./Profile.css";

function ProfileMargin({ userInfo }) {
  const [isButton, setIsButton] = useState(true);
  console.log("from margin ", userInfo);
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
          <button onClick={() => setIsButton(false)}>
            Change Profile Picture
          </button>
        ) : (
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setIsButton(true);
              }}
            >
              <input type="text" />
              <button type="submit">Submit</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfileMargin;
