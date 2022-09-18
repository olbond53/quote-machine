import React from "react";

const Quote = ({ quote }) => {
return (<div id="quote-box">
  <div id="text">{quote[0]}</div>
        <div id="author"></div>
        </div>
)
}

export default Quote;