import React, { useState } from "react";

function RegisterFrom() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const inputChangeHandler = (e) => {
    const { id, value } = e.target;
    if (id === "username") {
      setUsername(value);
      console.log(value);
    }
    if (id === "email") {
      setEmail(value);
      console.log(value);
    }
    if (id === "password") {
      setPassword(value);
      console.log(value);
    }
    if (id === "rePassword") {
      setRePassword(value);
      console.log(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, email, password, rePassword);
  };

  return (
    <div className="register-form">
      <h3>Create Account</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          id="username"
          placeholder="USERNAME"
          value={username}
          onChange={(e) => inputChangeHandler(e)}
        />
        <input
          type="email"
          id="email"
          placeholder="EMAIL"
          value={email}
          onChange={(e) => inputChangeHandler(e)}
        />
        <input
          type="text"
          id="password"
          placeholder="PASSWORD"
          value={password}
          onChange={(e) => inputChangeHandler(e)}
        />
        <input
          type="text"
          id="rePassword"
          placeholder="RE-ENTER PASSWORD"
          value={rePassword}
          onChange={(e) => inputChangeHandler(e)}
        />
        <button type="submit">JOIN</button>
      </form>
    </div>
  );
}

export default RegisterFrom;
