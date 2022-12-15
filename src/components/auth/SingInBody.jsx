import React, { useState } from "react";
import RegisterFrom from "./RegisterForm";
import "./SignInBody.css";
import SignInForm from "./SignInForm";

function SignInBody() {
  const [register, setRegister] = useState(true);
  const signInBtn = (
    <button className="sign-reg-btn" onClick={() => setRegister(false)}>
      Already a member? Sign in here
    </button>
  );
  const registerBtn = (
    <button className="sign-reg-btn" onClick={() => setRegister(true)}>
      Need an account? Create one here
    </button>
  );
  return (
    <div className="signin-page">
      <div className="signin-box">
        <div className="sign-reg-left">
          {register ? <RegisterFrom /> : <SignInForm />}
          {register ? signInBtn : registerBtn}
        </div>
        <div className="line"></div>
        <div className="sign-reg-right"></div>
      </div>
    </div>
  );
}

export default SignInBody;
