import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="login-wrapper">
            <form>
              <input type="text" className="text-field" placeholder="Username" />
              <input type="text" className="text-field" placeholder="Password" />
              <input type="submit" value="Login" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
