import React, { Component } from "react";
import "tachyons";
import "../../src/QuoteBox.css";

class QuoteBox extends Component {
  render() {
    const {
      quote,
      author,
      newQuoteBtn
      // quoteLengthCheck
    } = this.props;
    return (
      // <div className="flex justify-around h-auto v-mid" id="background">
      // <div className="mw5 mw7-ns center ph5-ns ma0" id="background"> original
      <div
        className="mh7 mw8 mw7-ns mw6-m center ph3 ph4-ns ph4-m ma0"
        id="background"
      >
        <div className="mt4 mb4 pa4" id="quote-box">
          <p id="text">
            <i className="fas fa-quote-left fa-2x pr3 pl3" />
            {quote}
          </p>
          <p id="author">{"- " + author}</p>
          <button
            className="ma2 f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-black"
            id="new-quote"
            onClick={newQuoteBtn}
          >
            New Quote
          </button>
          <a
            href={
              "https://twitter.com/intent/tweet?text=" +
              quote +
              "%0A" +
              "- " +
              author +
              "."
            }
            // onClick={quoteLengthCheck}
            id="tweet-quote"
            className="twitter-share-button ma2 f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-black"
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
          <p id="long-tweet" style={{ display: "none" }}>
            This quote is too long to tweet. Please try another quote or try
            shortening it manually.
          </p>
        </div>
      </div>
    );
  }
}

export default QuoteBox;
