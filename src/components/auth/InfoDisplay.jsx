import React from "react";
import graphexample from "./graphexample.png";
import postexample from "./postexample.png";
import "./SignInBody.css";

function InfoDisplay() {
  return (
    <div>
      <p className="signin-title">FitSnap</p>
      <p className="signin-subtitle">Track - Support - Improve</p>
      <div>
        <div className="graphimg">
          <img src={graphexample} alt="" />
        </div>
      </div>
    </div>
  );
}

export default InfoDisplay;
