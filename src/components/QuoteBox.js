import React from "react";
import "tachyons";

const QuoteBox = ({ quote, author, newQuoteBtn }) => {
  return (
    // <div className="flex justify-around h-auto v-mid" id="background">
    <div
      className="mw5 mw7-ns center bg-light-gray pa3 ph5-ns ma0"
      id="background"
    >
      <div className="ma4 pa4 ba bw1" id="quote-box wrapper-div">
        <p id="text">{quote}</p>
        <p id="author">{author}</p>
        <button id="new-quote" onClick={newQuoteBtn}>
          New Quote
        </button>
        <button id="tweet-quote">
          <a
            href="https://twitter.com/share?ref_src=twsrc%5Etfw"
            className="twitter-share-button"
            data-size="large"
            data-hashtags="quote"
            data-show-count="false"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tweet
          </a>
        </button>

        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charSet="utf-8"
        />
      </div>
    </div>
  );
};

export default QuoteBox;
