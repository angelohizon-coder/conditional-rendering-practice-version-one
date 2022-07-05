import React from "react";
import Form from "./Form.jsx";

var userIsRegistered = true;

function App() {
  return (
    <div className="container">
      <Form userIsRegistered={userIsRegistered} />
    </div>
  );
}

export default App;
