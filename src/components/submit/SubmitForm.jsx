import axios from "axios";
import e from "cors";
import React, { useState } from "react";

function SubmitForm() {
  const [mile, setMile] = useState(""); //* what can I change this to to make handling data easier?
  const [pushUps, setPushUps] = useState("");
  const [pullUps, setPullUps] = useState("");

  const month = "december"; //* find how to make dynamic and change for each month

  const changeHandler = (e) => {
    const { id, value } = e.target;
    if (id === "mile") {
      setMile(value);
    }
    if (id === "pushUps") {
      setPushUps(value);
    }
    if (id === "pullUps") {
      setPullUps(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = { mile, pushUps, pullUps, month };
    axios
      .post("/submitsnap", body)
      .then((res) => console.log(res))
      .catch((error) => console.log("error on front end submit ", error));
  };

  return (
    <div>
      <h2>December</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="mile"
          id="mile"
          value={mile}
          onChange={(e) => changeHandler(e)}
        />
        <input
          type="text"
          placeholder="push ups"
          id="pushUps"
          value={pushUps}
          onChange={(e) => changeHandler(e)}
        />
        <input
          type="text"
          placeholder="pull ups"
          id="pullUps"
          value={pullUps}
          onChange={(e) => changeHandler(e)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SubmitForm;
