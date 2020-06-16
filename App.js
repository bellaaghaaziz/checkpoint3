import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
       <div>
        <center><h2>sign up </h2></center>
        <br />
        <div className="container">
          <br />
          <form action="/action_page.php" />
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
          </div>
          <div className="container">
            <form action="/action_page.php">
              <div className="form-group">
                <label htmlFor="email">name:</label>
                <input type="email" className="form-control" id="email" placeholder="Enter name" name="email" />
              </div>
              <div className="container">
                <div className="form-group">
                  <label htmlFor="email">address</label>
                  <input type="email" className="form-control" id="email" placeholder="type in your address" name="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="pwd">Password:</label>
                  <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd" />
                </div>
                <div className="form-group">
                  <label htmlFor="pwd">confirm password :</label>
                  <input type="password" className="form-control" id="pwd" placeholder="confirm password" name="pwd" />
                </div>
                <div className="checkbox">
                  <label><input type="checkbox" name="remember" /> Remember me</label>
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
              </div>
            </form>
          </div></div></div>


          </div>
  );
}

export default App;
