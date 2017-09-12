import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted");
    this.props.history.push('/list-apps');
  }

  render() {
    return (
      <div>
        <div>
          <div className="login-wrapper">
            <form onSubmit={this.handleSubmit}>
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
