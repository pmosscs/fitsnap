import axios from "axios";
import React, { useState, useContext } from "react";
import AuthContext from "../../store/AuthContext";

function SignInForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const inputChangeHandler = (e) => {
    const { id, value } = e.target;
    if (id === "username") {
      setUsername(value);
    }
    if (id === "password") {
      setPassword(value);
    }
  };

  const authCtx = useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault();
    const baseURL = `http://localhost:4000`;

    console.log(username, password);
    //This is where you will make a body object with the variables, then send that in an axios.post to a controller that performs the login function we create
    const body = { username, password };
    axios
      .post(`${baseURL}/login`, body)
      .then(({ data }) => {
        console.log(data);
        authCtx.login(data.token, data.exp, data.userId);
      })
      .catch((err) => console.log("login error ", err));
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
          type="password"
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
