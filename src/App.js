import React, { Component, isValidElement } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: ""
    }
  }

  count = (e) => {
    this.setState({
      counter: e.target.value
    });
  }

  render() {
    return (
      <div className="container">
        <textarea rows="3" onChange={this.count}></textarea>
        <div className="counter">{this.state.counter.length}</div>
      </div>
    );
  }
}

export default App;
