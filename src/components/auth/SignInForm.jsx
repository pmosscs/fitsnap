import React, { useState } from "react";

function SignInForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const inputChangeHandler = (e) => {
    const { id, value } = e.target;
    if (id === "username") {
      setUsername(value);
      console.log(value);
    }
    if (id === "password") {
      setPassword(value);
      console.log(value);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(username, password);
  };

  return (
    <div className="signIn-form">
      <h3>Sign In</h3>
      <form onSubmit={(e) => submitHandler(e)}>
        <input
          type="text"
          id="username"
          placeholder="USERNAME"
          value={username}
          onChange={(e) => inputChangeHandler(e)}
        />
        <input
          type="text"
          id="password"
          placeholder="PASSWORD"
          value={password}
          onChange={(e) => inputChangeHandler(e)}
        />
        <button>SIGN IN</button>
      </form>
    </div>
  );
}

export default SignInForm;
