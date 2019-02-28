import React, { Component } from "react";
import QuoteBox from "../src/components/QuoteBox";
import "tachyons";

class App extends Component {
  constructor() {
    super();
    this.state = {
      switchVariable: false,
      quote:
        "If you are reading this, your device has probably lost access to the internet. Try refreshing or try again later.",
      author: "Developer"
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
    const oneRandomColor = colors[Math.floor(Math.random() * colors.length)];

    const authorVar = document.getElementById("author");
    const textVar = document.getElementById("text");
    // console.log(document.body.style.background);
    // console.log(oneRandomColor);

    // if(document.body.style.background) {

    // }
    // changing body background color
    document.getElementsByTagName("body")[0].style.background = oneRandomColor;
    // document.getElementsByTagName("body")[0].style.background = "#2c3e50";

    // loop to change color
    const htmlElemArray = [authorVar, textVar];
    htmlElemArray.forEach(elem => {
      elem.style.color = oneRandomColor;
      // elem.style.color = "#2c3e50";
    });
  };

  render() {
    return (
      <div className="App tc ma0 mt6 v-mid">
        {/* <h1 style={{ textShadow: "0 0 10px #ffffff" }}>Random Quote Machine</h1> */}
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
