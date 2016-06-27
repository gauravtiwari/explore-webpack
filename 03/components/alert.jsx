// New import syntax with Babel
import React, {Component} from 'react';

// React component
export class Alert extends Component {
  constructor(props) {
    super(props);
    this.showAlert = this.showAlert.bind(this);
    this.state = {
      text: 'Open alert',
    };
  }

  showAlert() {
    alert('You clicked the alert');
    this.setState({
      text: 'You opened alert box',
    });
  }

  render() {
    return (
      <div onClick={this.showAlert}>
        {this.state.text}
      </div>
    );
  }
}
