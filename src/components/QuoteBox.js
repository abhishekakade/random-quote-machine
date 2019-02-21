import React, { Component } from "react";
import "tachyons";

export default class QuoteBox extends Component {
  constructor() {
    super();
    this.state = {
      quote: "",
      author: ""
    };
  }

  componentDidMount() {
    let quotes = fetch("https://favqs.com/api/qotd")
      .then(response => response.json())
      .then(data => {
        const { author, body } = data.quote;
        this.setState({
          quote: body,
          author: author
        });
      });
    console.log(quotes);
  }

  render() {
    return (
      // <div className="flex justify-around h-auto v-mid" id="background">
      <div
        className="mw5 mw7-ns center bg-light-gray pa3 ph5-ns ma0"
        id="background"
      >
        <div className="ma4 pa4 ba bw1" id="quote-box wrapper-div">
          <p id="text">Some Quote...</p>
          <p id="author">Some Author...</p>
          <button id="new-quote">New Quote</button>
          <button id="tweet-quote">Tweet</button>
        </div>
      </div>
    );
  }
}
