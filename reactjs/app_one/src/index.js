import React from "react";
import ReactDOM from "react-dom/client";
import Output from "./example1";

const root = ReactDOM.createRoot(document.getElementById("root"));
let number = 10;

class Page extends React.Component {
  render() {
    return (
      <>
        <Output name='Param patel' phone='9016293308' email='iamparam102@gmail.com' ></Output>
        <Output name="Jhon Doe" email='jHonedoe@gmail.com' phone='9087456320' />
      </>
    )
  }
}

root.render(<Page />);