import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Jumbotron from "./components/jumbotron";
import Table from "./components/dataTablePage";

function App() {
  return (
    <div className="container">
      <Jumbotron />
      <Table />
    </div>
  );
}

export default App;

