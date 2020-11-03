import React from "react";
import "../styles/jumbotron.css";

function Jumbotron() {
  return (
    <div className="jumbotron">
      <h1 className="directory">Employee Directory</h1>
      <p className="pTextJumbo">
        Search an employee by their name or sort employees by clicking on name, position, or office
      </p>
    </div>
  );
}

export default Jumbotron;
