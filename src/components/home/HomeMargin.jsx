import { useNavigate } from "react-router-dom";
import "./Home.css";

const HomeMargin = ({ userInfo }) => {
  const { username, profile_URL } = userInfo;
  console.log(profile_URL);
  const navigate = useNavigate();

  return (
    <div className="margin">
      <div className="home-profile-pic">
        <img
          onClick={() => navigate("/profile")}
          src={
            userInfo.profile_URL
              ? userInfo.profile_URL
              : "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
          }
          alt="profile"
        />
      </div>
      <h2>{username}</h2>
    </div>
  );
};

export default HomeMargin;
