import React from "react";
import Input from "./Input.jsx";
import { login, register } from "./input.js";

function eventHandler(userIsRegistered) {
  return (
    <div>
      <Input type="text" placeholder="Username" />
      <Input type="text" placeholder="Password" />
      {userIsRegistered ? null : (
        <Input type="text" placeholder="ConfirmPasword" />
      )}
    </div>
  );
}

function Form(prop) {
  return (
    <form className="form">
      {eventHandler(prop.userIsRegistered)}
      <button type="submit">Register</button>
    </form>
  );
}

export default Form;
