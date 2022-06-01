import "./styles.css";
import React from "react";
import { login } from "./utils";

// 1. Do not use refs
// 2. Disable the login button if username/password is empty
//    and password is less than 6 chars
// 3. The page should not reload after form submit
// 4. Use the login function imported above to login (do not edit this function)
// 5. Show alert on success login or failed login
// 6. Clear the input boxes after clicking login

export default function App() {
  const submitForm = () => {};
  return (
    <div className="App">
      <h3>Login</h3>
      <form onSubmit={submitForm}>
        <div className="row">
          <label htmlFor="username">Username</label>
          <input id="username" type="text" />
        </div>
        <div className="row">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" />
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}
