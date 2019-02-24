import React, { Component } from "react";
import QuoteBox from "../src/components/QuoteBox";
import "tachyons";

class App extends Component {
  constructor() {
    super();
    this.state = {
      quote: "",
      author: ""
    };
  }

  componentDidMount() {
    fetch("https://favqs.com/api/qotd")
      .then(response => response.json())
      .then(data => {
        const { author, body } = data.quote;
        this.setState({
          quote: body,
          author: author
        });
      });
    // console.log(quotes);
  }

  newQuote = () => {
    fetch("https://favqs.com/api/qotd")
      .then(response => response.json())
      .then(data => {
        const { author, body } = data.quote;
        this.setState({
          quote: body,
          author: author
        });
      });
  };

  render() {
    return (
      <div className="App tc ma0 mt6 v-mid">
        <h1>Random Quote Machine</h1>
        <QuoteBox
          quote={this.state.quote}
          author={this.state.author}
          newQuoteBtn={this.newQuote}
        />
      </div>
    );
  }
}

export default App;
