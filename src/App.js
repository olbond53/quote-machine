import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TweetQuote from '../src/components/TweetQuote';
import Text from '../src/components/Text';
import Author from '../src/components/Author';
import NewQuote from '../src/components/NewQuote';
import './App.css';

const App = () => {
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');

  const fetchQuote = async () => {
    const result = await axios(`https://type.fit/api/quotes`);

    const quotes = await result.data;
    const quote = quotes[Math.floor(Math.random() * 1643)];
    if (quote.author === null) {
      quote.author = 'unknown';
    }
    setText(quote.text);
    setAuthor(quote.author);
  };
  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div id="quote-box">
      <Text text={text} />
      <Author author={author} />
      <div id="buttons">
        <NewQuote handleClick={fetchQuote} />
        <TweetQuote
          href={`https://twitter.com/intent/tweet?text= ${text}  
          --${author}`}
          target="blank"
        />
      </div>
    </div>
  );
};

export default App;
