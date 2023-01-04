import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Submit.css";

function SubmitForm() {
  const [mileMin, setMileMin] = useState(""); //* what can I change this to to make handling data easier?
  const [mileSec, setMileSec] = useState("");
  const [pushUps, setPushUps] = useState("");
  const [pullUps, setPullUps] = useState("");
  const [comment, setcomment] = useState("");

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
    if (id === "comment") {
      setcomment(value);
    }
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = { mileMin, mileSec, pushUps, pullUps, month, comment };
    axios
      .post("http://localhost:4000/submitsnap", body)
      .then((res) => {
        console.log(res.data);
        alert(res.data);
        navigate("/profile");
      })
      .catch((error) => console.log("error on front end submit ", error));
  };

  return (
    <div className="submit-page">
      <div className="submit-section">
        <h2 className="submit-title">Submit a FitSnap</h2>
        <h2 className="month-title">January</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <table>
            <tr>
              <td>
                <label>Mile Time: </label>
              </td>
              <td>
                <input
                  type="number"
                  placeholder="00"
                  id="mileMin"
                  value={mileMin}
                  onChange={(e) => changeHandler(e)}
                />
                :
                <input
                  type="number"
                  placeholder="00"
                  id="mileSec"
                  value={mileSec}
                  onChange={(e) => changeHandler(e)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Push-Ups: </label>
              </td>
              <td>
                <input
                  type="number"
                  placeholder="0"
                  id="pushUps"
                  value={pushUps}
                  onChange={(e) => changeHandler(e)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Pull-Ups: </label>
              </td>
              <td>
                <input
                  type="number"
                  placeholder="0"
                  id="pullUps"
                  value={pullUps}
                  onChange={(e) => changeHandler(e)}
                />
              </td>
            </tr>
            <tr className="table-row">
              <td>
                <label id="comment-title">Comments:</label>
              </td>
            </tr>
          </table>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => changeHandler(e)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default SubmitForm;
