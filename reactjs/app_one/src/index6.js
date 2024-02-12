import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
let number = 10;

function Menu() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

function Page(props) {
  return (
    <>
      {/* <Menu /> */}
      <div className="container">
        <div className="row">
          <div className={props.colum}>
            <Card name="Param Patel" color='text-bg-danger' />
          </div>
          <div className={props.colum}>
            <Card name="Vivek " color='text-bg-dark' />
          </div>
          <div className={props.colum}>
            <Card name="Vishal" color='text-bg-warning' desc='this is paragraph ' />
          </div>
        </div>
      </div>
    </>
  );
}

function Card(props) {
  return (<>
    <div className="card mt-5 shadow">
      <div className={`card-header h2 ` + props.color} >{props.name}</div>
      <div className="card-body">
        <p>
          {props.desc}
        </p>
      </div>
    </div>
  </>)
}

function Footer() {
  return (
    <>
      <div className="container-fluid text-center text-bg-success p-5 ">
        <div className="row">
          <div className="col-12 ">
            <hr />
            Copyright @ Frontend 25
          </div>
        </div>
      </div>
    </>
  )
}

function Output() {
  return (
    <>
      <Menu />
      <Page colum='col-3' />
      <Page colum='col-4' />
      <Page colum='col-6' />
      <Footer />
    </>
  )
}

root.render(<Output />);