import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
let number = 10;

function displayOutput() {
  let now = new Date();
  let output = <>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>
            {now.toLocaleTimeString()}
          </h1>
        </div>
      </div>
    </div>
  </>
  root.render(output);
}

setInterval(displayOutput, 1000)