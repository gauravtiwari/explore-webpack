// New import syntax with Babel
import React, {Component} from 'react';
import Styles from './alert.css';

// React component
export class Alert extends Component {
  constructor(props) {
    super(props);
    this.showAlert = this.showAlert.bind(this);
    this.state = {
      text: 'Click to open alert',
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
      <div className={Styles.alert} onClick={this.showAlert}>
        {this.state.text}
      </div>
    );
  }
}
