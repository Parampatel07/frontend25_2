import React from "react";
import ReactDOM from "react-dom/client";
import Output from "./example1";
import Example2 from "./example2";
import Game from "./example3";

const root = ReactDOM.createRoot(document.getElementById("root"));
let number = 10;

class Page extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <Game />
          </div>
        </div>
      </>
    )
  }
}

root.render(<Page />);