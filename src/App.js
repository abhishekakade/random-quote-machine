import React, { Component } from "react";
import QuoteBox from "../src/components/QuoteBox";
import "tachyons";

class App extends Component {
  render() {
    return (
      <div className="App tc ma0 mt6 v-mid">
        <h1>Random Quote Machine</h1>
        <QuoteBox />
      </div>
    );
  }
}

export default App;
