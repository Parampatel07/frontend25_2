import React from "react";
import { Tooltip } from "react-tooltip";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default class Theater extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectSeat: 0,
      showBill: 0,
    };
  }
  changeSeat = (price) => {
    console.log(price);
    this.setState({
      selectSeat: price,
    });
  };

  message = () =>
    toast.success("Seat Booked Successfully !", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  displayBill(price) {
    return (
      <div className="col-4 mt-5">
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          
        />
        <div className="card mt-5 shadow">
          <div className="card-header text-bg-success">
            <h2 className="text-center mt-4 ">Booked Seats</h2>
          </div>
          <div className="card-body p-3">
            <table
              className="table table-striped table-hover table-bordered"
              cellPadding={5}
            >
              <thead>
                <th>Seat</th>
                <th>price</th>
              </thead>
              <tr>
                <td>Seat 1</td>
                <td>{price}</td>
              </tr>
            </table>
            <div className="text-center">
              <button className="btn btn-primary mt-3" onClick={this.message}>
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  handleBookNow = (status) => {
    console.log("check");
    if (this.state.selectSeat !== 0) {
      this.setState({
        showBill: status,
      });
    }
  };

  render() {
    return (
      <>
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-8">
              <div className="row">
                <div className="col-12 ">
                  <div className="card">
                    <div className="card-body text-center text-bg-success">
                      <div className="row">
                        <div className="col-10 text-center">
                          <h3>Screen - {this.state.selectSeat}</h3>
                        </div>
                        <div className="col-2">
                          <button
                            className="btn btn-primary"
                            onClick={() => this.handleBookNow(1)}
                          >
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Line selectSeat={this.changeSeat} price="200"></Line>
                  <Line selectSeat={this.changeSeat} price="250"></Line>
                  <Line selectSeat={this.changeSeat} price="400"></Line>
                </div>
              </div>
            </div>
            {this.state.showBill == 0
              ? ""
              : this.displayBill(this.state.selectSeat)}
          </div>
        </div>
      </>
    );
  }
}

class Line extends React.Component {
  changeSeat = (price) => {
    this.props.selectSeat(price);
  };
  render() {
    return (
      <>
        <div className="row mt-5">
          <Seats
            content={this.props.price}
            selectSeat={this.changeSeat}
          ></Seats>
          <Seats
            content={this.props.price}
            selectSeat={this.changeSeat}
          ></Seats>
          <Seats
            content={this.props.price}
            selectSeat={this.changeSeat}
          ></Seats>
          <Seats
            content={this.props.price}
            selectSeat={this.changeSeat}
          ></Seats>
          <Seats
            content={this.props.price}
            selectSeat={this.changeSeat}
          ></Seats>
          <Seats
            content={this.props.price}
            selectSeat={this.changeSeat}
          ></Seats>
          <Seats
            content={this.props.price}
            selectSeat={this.changeSeat}
          ></Seats>
          <Seats
            content={this.props.price}
            selectSeat={this.changeSeat}
          ></Seats>
          <Seats
            content={this.props.price}
            selectSeat={this.changeSeat}
          ></Seats>
          <Seats
            content={this.props.price}
            selectSeat={this.changeSeat}
          ></Seats>
          <Seats
            content={this.props.price}
            selectSeat={this.changeSeat}
          ></Seats>
          <Seats
            content={this.props.price}
            selectSeat={this.changeSeat}
          ></Seats>
        </div>
      </>
    );
  }
}

class Seats extends React.Component {
  constructor(props) {
    super(props);
  }
  setSeat(price) {
    this.props.selectSeat(price);
  }
  render() {
    return (
      <>
        <div
          className="col-1 mt-2 "
          data-tooltip-id="1"
          data-tooltip-content={this.props.content}
        >
          <div
            className="card"
            id="seat"
            onClick={() => this.setSeat(this.props.content)}
          >
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
