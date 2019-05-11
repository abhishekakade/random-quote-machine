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
      "#213a54",
      "#342224",
      "#472E32",
      "#4f121c",
      "#345920",
      "#125b91",
      "#5f276b",
      "#911f4c",
      "#543902",
      "#543902",
      "#005500",
      "#07005e",
      "#550055",
      "#3b0053",
      "#360036",
      "#3e3e3e",
      "#111111",
      "#554800",
      "#770303",
      "#600000"
    ];

    // grab color randomly
    let oneRandomColor = colors[Math.floor(Math.random() * colors.length)];

    // changing element colors
    document.getElementsByTagName("body")[0].style.background = oneRandomColor;
    document.getElementById("author").style.color = oneRandomColor;
    document.getElementById("text").style.color = oneRandomColor;
    document.getElementById("app-header").style.color = oneRandomColor;
  };

  render() {
    return (
      <div className='App tc ma0 v-mid'>
        <div id='divcenter'>
          <h1
            id='app-header'
            style={{
              display: "inline",
              fontFamily: "'Bree Serif', sans-serif",
              margin: "1rem",
              padding: "0.5rem 1rem",
              borderRadius: "5px",
              background: "whitesmoke",
              textDecoration: "underline",
              transition: "color 3s"
            }}
          >
            Random Quotes{" "}
          </h1>{" "}
          <QuoteBox
            quote={this.state.quote}
            author={this.state.author}
            newQuoteBtn={this.newQuote}
          />{" "}
        </div>{" "}
      </div>
    );
  }
}

export default App;
