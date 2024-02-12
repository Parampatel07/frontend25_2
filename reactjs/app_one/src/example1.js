import React, { Component } from 'react'
class Output extends React.Component {
     constructor(props) {
          super(props);
          this.state = {
               'name': this.props.name,
               'email': this.props.email,
               'phone': this.props.phone,
          }
     }
     render() {
          return (
               <>
                    <div className="container">
                         <div className="row">
                              <div className="col-12">
                                   <h1>
                                        Example of CLass Component
                                   </h1>
                                   <hr></hr>
                                   <h2>
                                        My name is {this.state.name}
                                   </h2>
                                   <h2>
                                        My email is {this.state.email}
                                   </h2>
                                   <h2>
                                        My phone number is {this.state.phone}
                                   </h2>
                              </div>
                         </div>
                    </div>
               </>
          );
     };
}

export default Output ;