import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
let number = 10;
let output = (<>
  <div className="container">
    <div className="row">
      <div className="col-12">
        <h1>
          Example of Bootstrap
        </h1>
        <hr></hr>
        <form action="" className="row shadow p-5">
          <div className="form-group">
            {/* this is comment  */}
            <label for="" className="form-label">Enter your name </label>
            <input type="text" name="name" className="form-control" placeholder="Enter your Name " required />
          </div>
          <div className="form-group mt-3">
            <label for="" className="form-label">Enter your Email </label>
            <input type="email" name="email" className="form-control" placeholder="Enter your Email" required />
          </div>
          <div className='text-end mt-3' >
            <button type='submit' className='btn btn-success me-3'>Submit</button>
            <button type='reset' className='btn btn-danger'>Reset</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</>);

root.render(output);