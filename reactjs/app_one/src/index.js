import React from "react";
import ReactDOM from "react-dom/client";
import Output from "./example1";
import Example2 from "./example2";

const root = ReactDOM.createRoot(document.getElementById("root"));
let number = 10;

class Page extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <Example2 name='Jhon' age='19' photo='https://picsum.photos/300/300?random=1' />
            <Example2 name='Tyler' age='20' photo='https://picsum.photos/300/300?random=2' />
            <Example2 name='RDJ' age='21' photo='https://picsum.photos/300/300?random=3' />
          </div>
        </div>
      </>
    )
  }
}

root.render(<Page />);