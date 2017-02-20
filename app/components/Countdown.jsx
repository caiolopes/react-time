import React, { Component } from 'react';
import Clock from 'Clock';
import CountdownForm from 'CountdownForm';

export default class Countdown extends Component {
  // constructor(props) {
  //   super(props);
  //   this.handleSetCountdown = this.handleSetCountdown.bind(this);
  //   this.state = { count: 0 };
  // }
  // alternative:

  state = {
    count: 0
  };
  
  handleSetCountdown = (seconds) => {
    this.setState({
      count: seconds
    });
  }
  
  render() {
    const { count } = this.state;
    
    return (
      <div>
        <Clock totalSeconds={count} />
        <CountdownForm onSetCountdown={this.handleSetCountdown} />
      </div>
    );
  }
}