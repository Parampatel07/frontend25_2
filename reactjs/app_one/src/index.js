import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
let number = 10;
let output = (<>
  <h1>
    Answer : - {number * number / 10}
  </h1>
  <hr />
</>);

root.render(output);

