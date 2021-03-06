// New import syntax with Babel
import React, {Component} from 'react';
import Styles from '../stylesheets/counter.css';

export class Counter extends Component {
  constructor(props) {
    super(props);
    // Bind events to this
    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
    // Set initial state
    this.state = {
      counter: 0,
    }
  }

  incrementCounter() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  decrementCounter() {
    if (this.state.counter >= 1) {
      this.setState({
        counter: this.state.counter - 1,
      });
    }
  }

  render() {
    return (
      <div className="counter">
        <div className="value">
          {this.state.counter}
        </div>
        <button className="increment" onClick={this.incrementCounter}>
          +
        </button>
        <button className="decrement" onClick={this.decrementCounter}>
          -
        </button>
      </div>
    )
  }
}
