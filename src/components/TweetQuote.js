import React from 'react';

export const TweetQuote = ({ href }) => {
  return (
    <div id="tweet-box">
      <a
        className="twitter-share-button"
        href={href}
        id="tweet-quote"
        target="_blank"
        rel="noopener noreferrer"
      >
        Tweet
      </a>
    </div>
  );
};

export default TweetQuote;
