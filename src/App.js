import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

class App extends Component {
  render() {
  return (
    <>
    <Navbar />
    <div className="container">
      <h1>Quale pizza preferisci?</h1>
      <hr/>
      <div className="row">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
    </>
  );
}
}

export default App;
