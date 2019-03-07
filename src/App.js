import React, { Component } from "react";
import QuoteBox from "../src/components/QuoteBox";
import "tachyons";

const errorQuote =
  "If you are reading this, your device has probably lost access to the internet. Try refreshing or try again later.";
const errorQuoteAuthor = "Developer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      quote: errorQuote,
      author: errorQuoteAuthor
    };
  }

  componentDidMount() {
    this.newQuote();
    // this.quoteLength();
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
      })
      .catch(err => {
        this.setState({
          quote: errorQuote,
          author: errorQuoteAuthor
        });
        console.log(err);
      });
    this.changeColor();
  };

  changeColor = () => {
    const colors = [
      "#16a085",
      "#2c3e50",
      "#f39c12",
      "#e74c3c",
      "#9b59b6",
      "#342224",
      "#472E32",
      "#73A857",
      "#ceb20a",
      "#4997D0",
      "#2271e8",
      "#777777",
      "#733380",
      "#ff7caf",
      "#D27D46",
      "#db9b72",
      "#111111"
    ];

    // grab color randomly
    let oneRandomColor = colors[Math.floor(Math.random() * colors.length)];

    // changing element colors
    document.getElementsByTagName("body")[0].style.background = oneRandomColor;
    document.getElementById("author").style.color = oneRandomColor;
    document.getElementById("text").style.color = oneRandomColor;
  };

  // quoteLength = e => {
  //   console.log(e);

  //   if (this.state.quote.length > 26) {
  // const tweetText = document.getElementById("tweet").textContent;
  // console.log(tweetText);

  // document.getElementById("tweet-quote").setAttribute("href", "#");
  // document.getElementById("tweet-quote").removeAttribute("target");
  // document.getElementById("long-tweet").style.display = "block";

  // setTimeout(function() {
  // document
  //   .getElementById("tweet-quote")
  //   .setAttribute(
  //     "href",
  //     `https://twitter.com/intent/tweet?text=${
  //       this.state.quote
  //     }%0A-&nbsp${this.state.author}.`
  //   );
  // document.getElementById("tweet-quote").setAttribute("target", "_blank");
  //       document.getElementById("long-tweet").style.display = "block";
  //     }, 3000);
  //   }
  // };

  render() {
    return (
      <div className="App tc ma0 mt6 v-mid">
        {/* <h1>Random Quote Machine</h1> */}
        <QuoteBox
          quote={this.state.quote}
          author={this.state.author}
          newQuoteBtn={this.newQuote}
          // quoteLengthCheck={this.quoteLength}
        />
      </div>
    );
  }
}

export default App;
