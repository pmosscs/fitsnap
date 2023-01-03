import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SubmitForm() {
  const [mileMin, setMileMin] = useState(""); //* what can I change this to to make handling data easier?
  const [mileSec, setMileSec] = useState("");
  const [pushUps, setPushUps] = useState("");
  const [pullUps, setPullUps] = useState("");

  const month = "january"; //* find how to make dynamic and change for each month

  const changeHandler = (e) => {
    const { id, value } = e.target;
    if (id === "mileMin") {
      setMileMin(value);
    }
    if (id === "mileSec") {
      setMileSec(value);
    }
    if (id === "pushUps") {
      setPushUps(value);
    }
    if (id === "pullUps") {
      setPullUps(value);
    }
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = { mileMin, mileSec, pushUps, pullUps, month };
    axios
      .post("http://localhost:4000/submitsnap", body)
      .then((res) => {
        console.log(res.data);
        alert(res.data);
        navigate("/");
      })
      .catch((error) => console.log("error on front end submit ", error));
  };

  return (
    <div>
      <h2>January</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="mileMin"
          id="mileMin"
          value={mileMin}
          onChange={(e) => changeHandler(e)}
        />
        <input
          type="text"
          placeholder="mileSec"
          id="mileSec"
          value={mileSec}
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
