import React, { Component } from "react";
import "./App.css";
import Counter from "./Counter";
import EventPractice from "./EventPractice";
import IterationSample from "./iterationSample";
import MyComponent from "./MyComponent";
import Say from "./Say";
import ValidationSample from "./WorldSample";

class App extends Component {
  render() {
    return (
      <div className="react">
        <MyComponent name="RRRR">react</MyComponent>
        <Counter></Counter>
        <Say />
        <EventPractice />
        <ValidationSample />
        <IterationSample />
      </div>
    );
  }
}

export default App;
