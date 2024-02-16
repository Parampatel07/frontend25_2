import React from "react";
import { Tooltip } from "react-tooltip";
export default class Theater extends React.Component {
  render() {
    return (
      <>
        <div className="container mt-5">
          <div className="row">
            <div className="col-10 offset-1">
              <div className="card">
                <div className="card-body text-center text-bg-success">
                  <h3>Screen</h3>
                </div>
              </div>
              <Line price="200"></Line>
              <Line price="250"></Line>
              <Line price="400"></Line>
            </div>
          </div>
        </div>
      </>
    );
  }
}

class Line extends React.Component {
  render() {
    return (
      <>
        <div className="row mt-5">
          <Seats content={this.props.price}></Seats>
          <Seats content={this.props.price}></Seats>
          <Seats content={this.props.price}></Seats>
          <Seats content={this.props.price}></Seats>
          <Seats content={this.props.price}></Seats>
          <Seats content={this.props.price}></Seats>
          <Seats content={this.props.price}></Seats>
          <Seats content={this.props.price}></Seats>
          <Seats content={this.props.price}></Seats>
          <Seats content={this.props.price}></Seats>
          <Seats content={this.props.price}></Seats>
          <Seats content={this.props.price}></Seats>
        </div>
      </>
    );
  }
}

class Seats extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div
          className="col-1 mt-2 "
          data-tooltip-id="1"
          data-tooltip-content={this.props.content}
        >
          <div className="card">
            <div className="card-body text-center">
              <img
                src="image/seat.png"
                style={{ height: "30px", marginLeft: "-8px" }}
                alt=""
              />
            </div>
          </div>
        </div>
        <Tooltip id="1" place="bottom" content={this.props.content} />
      </>
    );
  }
}
