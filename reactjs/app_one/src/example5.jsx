import React from "react";

class Example5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      data: [],
    };
  }

  changeName = (event) => {
    this.setState(
      {
        name: event.target.value,
      },
      function () {
        console.log(this.state.name);
      }
    );
  };

  changeEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  chnagePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleSubmit = (event) => {
    let singledata = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };
    this.state.data.push(singledata);
    this.setState({}, function () {
      console.log(this.state.data);
    });
  };
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-8 offset-2 ">
              <div className="card mt-5 shadow">
                <div className="card-header text-bg-success h2 ">
                  Example of Input in Reactjs
                </div>
                <div className="card-body">
                  <form action="">
                    <div className="form-group">
                      <label htmlFor="username" className="form-label">
                        Enter your name
                      </label>
                      <input
                        type="text"
                        id="username"
                        onChange={this.changeName}
                        name="username"
                        placeholder="Enter your name "
                        className="form-control"
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="email" className="form-label">
                        Enter your email
                      </label>
                      <input
                        type="email"
                        name="email"
                        onChange={this.changeEmail}
                        id="email"
                        placeholder="Enter your email "
                        className="form-control"
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="password" className="form-label">
                        Enter your password
                      </label>
                      <input
                        type="password"
                        name="password"
                        onChange={this.chnagePassword}
                        id="password"
                        placeholder="********"
                        className="form-control"
                      />
                    </div>
                    <div className="text-end mt-3">
                      <button
                        className="btn btn-success me-2"
                        type="button"
                        onClick={(event) => this.handleSubmit(event)}
                      >
                        Submit{" "}
                      </button>
                      <button className="btn btn-danger" type="reset">
                        Clear All{" "}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="card mt-5 shadow">
                <div className="card-header h2 text-bg-success">
                  Data Filled
                </div>
                <div className="card-body">
                  <table className="table table-striped table-hover table-bordered">
                    <thead>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Password</th>
                    </thead>
                    <tbody>
                      {this.state.data.map((student) => {
                        return (
                          <tr>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>{student.password}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Example5;
