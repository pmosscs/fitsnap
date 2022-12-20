import axios from "axios";
import React, { useContext, useState } from "react";
import AuthContext from "../../store/AuthContext";

function RegisterFrom() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const inputChangeHandler = (e) => {
    const { id, value } = e.target;
    if (id === "username") {
      setUsername(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "rePassword") {
      setRePassword(value);
    }
  };

  const authCtx = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const baseURL = `http://localhost:3000`;
    const body = { username, email, password };

    if (password === rePassword) {
      console.log(username, email, password, rePassword);
      axios
        .post(`${baseURL}/register`, body)
        .then(({ data }) => {
          console.log(data);
          authCtx.login(data.token, data.exp, data.userId);
          //this is where you will access the login function within the authContext file
        })
        .catch((err) => console.log(err, "error on register react front end"));
      console.log("submit handler called");
    } else {
      alert("passwords do not match");
      setPassword("");
      setRePassword("");
    }
    //This is where you will make a body object with the variables, then send that in an axios.post to a controller that performs the register function we create
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
          type="password"
          id="password"
          placeholder="PASSWORD"
          value={password}
          onChange={(e) => inputChangeHandler(e)}
        />
        <input
          type="password"
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
