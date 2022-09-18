import React from 'react';

const NewQuote = ({ handleClick }) => {
  return (
    <div id="new-quote">
      <button onClick={() => handleClick()}>New Quote</button>
    </div>
  );
};

export default NewQuote;
