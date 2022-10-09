import React from "react";
import './Signup'

function Signup() {
    return(
    <div className="form">
          <form>
            <div className="input-container">
              <label>Name </label>
              <input type="text" name="uname" required />
            </div>
            <div className="input-container">
              <label>Email </label>
              <input type="email" name="email" required />
            </div>
            <div className="input-container">
              <label>Password </label>
              <input type="password" name="pass" required />
            </div>
            <div className="button-container">
              <input type="submit" />
            </div>
          </form>
        </div>
    );
}

export default Signup;