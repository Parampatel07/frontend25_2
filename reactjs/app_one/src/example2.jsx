import React from "react";

export default class Example2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      photo: this.props.photo,
      age: this.props.age,
      count: 0,
    };
    this.array = [
      "Alice",
      "Bob",
      "Charlie",
      "David",
      "Eve",
      "Frank",
      "Grace",
      "Henry",
      "Ivy",
      "Jack",
      "Kate",
      "Liam",
      "Mia",
      "Nathan",
      "Olivia",
      "Peter",
      "Quinn",
      "Rachel",
      "Sam",
      "Tina",
      "Uma",
      "Victor",
      "Wendy",
      "Xavier",
      "Yara",
      "Zach",
    ];
  }

  changeData = () => {
    this.state.count = Math.random() * 100;
    let position = parseInt(Math.random() * 25);
    this.setState({
      photo: "https://picsum.photos/300/400?random=" + this.state.count,
      age: parseInt(Math.random() * 10),
      name: this.array[position],
    });
  };

  render() {
    return (
      <>
        <div className="col-4">
          <div className="card shadow mt-5">
            <div className="card-header h2 text-bg-success">
              <div className="row">
                <div className="col-8">
                  {this.state.name} - {this.state.age}
                </div>
                <div className="col-4">
                  <button className="btn btn-primary" onClick={this.changeData}>
                    Change
                  </button>
                </div>
              </div>
            </div>
            <div className="card-body">
              <img src={this.state.photo} alt="" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

// export default Example2;
