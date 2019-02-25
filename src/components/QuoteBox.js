import React, { Component } from "react";
import "tachyons";

class QuoteBox extends Component {
  // quoteLength = () => {
  //   const { quote, author } = this.props;
  //   if (quote.length + author.length >= 25) {
  //     document
  //       .getElementById("tweet-quote-main")
  //       .setAttribute(
  //         "href",
  //         `https://twitter.com/intent/tweet?text=${quote}%0A-${author}.`
  //       );
  //   } else {
  //     document
  //       .getElementById("tweet-quote-main")
  //       .setAttribute(
  //         "href",
  //         `https://twitter.com/intent/tweet?text=${quote}.`
  //       );
  //   }
  // };

  render() {
    const { quote, author, newQuoteBtn } = this.props;
    return (
      // <div className="flex justify-around h-auto v-mid" id="background">
      <div
        className="mw5 mw7-ns center bg-light-gray pa3 ph5-ns ma0"
        id="background"
      >
        <div className="ma4 pa4 ba bw1" id="quote-box">
          <p id="text">{quote}</p>
          <p id="author">{author}</p>
          <button id="new-quote" onClick={newQuoteBtn}>
            New Quote
          </button>
          {/* <button onClick={this.quoteLength} id="tweet-quote"> */}
          <a
            // href="https://twitter.com/share?ref_src=twsrc%5Etfw"

            href={
              "https://twitter.com/intent/tweet?text=" +
              quote +
              "%0A" +
              "- " +
              author +
              "."
            }
            onClick={this.quoteLength}
            // href="https://twitter.com/intent/tweet"
            id="tweet-quote"
            className="twitter-share-button"
            data-size="large"
            data-hashtags="quote"
            hashtags="quote"
            data-show-count="false"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tweet
          </a>
          {/* </button> */}

          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charSet="utf-8"
          />
          <p className="long-tweet" style={{ display: "none" }}>
            This quote is too long to tweet. Try another quote.
          </p>
        </div>
      </div>
    );
  }
}

export default QuoteBox;
