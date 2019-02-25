import React, { Component } from "react";
import QuoteBox from "../src/components/QuoteBox";
import "tachyons";

class App extends Component {
  constructor() {
    super();
    this.state = {
      switchVariable: false,
      quote: "",
      author: ""
    };
  }

  componentDidMount() {
    this.newQuote();
    // this.fetchQuote();
  }

  // fetchQuote = () => {
  //   // let switchVar = false;
  //   do {
  //     fetch("https://favqs.com/api/qotd")
  //       .then(response => response.json())
  //       .then(data => {
  //         const { author, body } = data.quote;
  //         if (body.length + author.length <= 375) {
  //           // switchVar = true;
  //           this.setState({
  //             switchVariable: true,
  //             quote: body,
  //             author: author
  //           });
  //         }
  //       });
  //   } while (this.state.switchVariable === true);
  // };

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
