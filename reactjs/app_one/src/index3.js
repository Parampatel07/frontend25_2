import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
let number = 10;
function displayName(student) {
  if (student)
    return "Hello " + student.name;
  else
    return "Hello Unknown";
}

function displayAge(student) {
  return student ? "Age is " + student.age : "Age is Unknown"
}

let student = {
  'name': 'Param Patel ',
  'age': 19
}
let output = (<>
  <div className="container">
    <div className="row">
      <div className="col-12" id={"one"}>
        <h1>
          {displayName(student) + displayAge(student)}
        </h1>
        <h1>
          {displayName() + displayAge(student) }
        </h1>
      </div>
    </div>
  </div>

</>);

root.render(output);