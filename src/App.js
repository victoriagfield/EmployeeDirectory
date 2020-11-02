import React from "react";
import Jumbotron from "./components/jumbotron";
import Card from "./components/card";
import Search from "./components/searchForm";

function App() {
  return (
    <div className="container">
      <Jumbotron />
      <Search />
      <Card />
    </div>
  );
}

export default App;

