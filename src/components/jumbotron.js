import React from "react";
import "../styles/jumbotron.css";

function Jumbotron() {
  return (
    <div className="jumbotron">
      <h1 className="directory">Employee Directory</h1>
      <p className="pTextJumbo">
        Search an employee by their name or sort all employees by ....
      </p>
    </div>
  );
}

export default Jumbotron;
