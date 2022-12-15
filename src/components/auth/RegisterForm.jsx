import React from "react";

function RegisterFrom() {
  return (
    <div className="register-form">
      <h3>Create Account</h3>
      <form>
        <input type="text" placeholder="USERNAME" />
        <input type="text" placeholder="EMAIL" />
        <input type="text" placeholder="PASSWORD" />
        <input type="text" placeholder="RE-ENTER PASSWORD" />
        <button>JOIN</button>
      </form>
    </div>
  );
}

export default RegisterFrom;
