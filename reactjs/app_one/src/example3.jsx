import React from "react";

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number1: 0,
      number2: 0,
      number3: 0,
      message: "",
      color: "warning",
    };
  }

  playGame = () => {
    console.log("play game called ");
    this.setState(
      {
        number1: parseInt(Math.random() * 10),
        number2: parseInt(Math.random() * 10),
        number3: parseInt(Math.random() * 10),
      },
      function () {
        if (
          this.state.number1 === this.state.number2 &&
          this.state.number1 === this.state.number3
        ) {
          this.setState({
            message: (
              <div className="text-center mt-4 h2 text-bg-success p-3">
                Congratulations you win
              </div>
            ),
            color: "success",
          });
        } else {
          this.setState({
            message: "",
            color: "warning",
          });
        }
      }
    );
  };
  render() {
    return (
      <>
        <div className="col-6 offset-3 mt-5">
          <div className="card shadow">
            <div className={`card-header text-bg-` + this.state.color + ` h2`}>
              Lottery Game
            </div>
            <div
              className="card-body p-5"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Numbers number={this.state.number1} />
              <Numbers number={this.state.number2} />
              <Numbers number={this.state.number3} />
            </div>
          </div>
          <div className="text-center mt-4 ">
            <button
              className={`btn btn-` + this.state.color}
              onClick={this.playGame}
            >
              <h1>Play</h1>
            </button>
            {this.state.message}
          </div>
        </div>
      </>
    );
  }
}

class Numbers extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="card">
          <div className="card-body h2">{this.props.number}</div>
        </div>
      </>
    );
  }
}
