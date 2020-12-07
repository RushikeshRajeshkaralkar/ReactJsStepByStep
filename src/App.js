import "./App.css";
import React, { Component } from "react";
import User from "./User";
class App extends Component {
  constructor() {
    super();
    this.state = {
      newdata: 1,
    };
  }

  updateData() {
    this.setState({ newdata: this.state.newdata + 1 });
  }
  render() {
    return (
      <div>
        <h1>{this.state.newdata}</h1>
        <button onClick={() => this.updateData()}>Click Me</button>
      </div>
    );
  }
}

export default App;
