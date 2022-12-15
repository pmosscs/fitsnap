import React from "react";

function SignInForm() {
  return (
    <div className="signIn-form">
      <h3>Sign In</h3>
      <form>
        <input type="text" placeholder="USERNAME" />
        <input type="text" placeholder="PASSWORD" />
        <button>SIGN IN</button>
      </form>
    </div>
  );
}

export default SignInForm;
