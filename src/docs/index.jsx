import React from "react";
import { render } from "react-dom";
import Quiz from "../../lib/Quiz";
import { quiz } from "./quiz";

function App() {
  return (
    <div>
      <div className="content">
        <h1>Hello world</h1>
      </div>
      <Quiz quiz={quiz} shuffle={true} />
    </div>
  );
}

render(<App />, document.getElementById("app"));
