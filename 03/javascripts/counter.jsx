// New import syntax with Babel
import React, {Component} from 'react';

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
      <div className='counter'>
        <div class="value">
          {this.state.counter}
        </div>
        <button class="increment" onClick={this.incrementCounter}>
          +
        </button>
        <button class="decrement" onClick={this.decrementCounter}>
          -
        </button>
      </div>
    )
  }
}
