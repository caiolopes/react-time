import React, { Component } from 'react';
import Clock from 'Clock';
import CountdownForm from 'CountdownForm';

export default class Countdown extends Component {
  // old style
  // constructor(props) {
  //   super(props);
  //   this.handleSetCountdown = this.handleSetCountdown.bind(this);
  //   this.state = { count: 0 };
  // }

  state = {
    count: 0,
    countdownStatus: 'stopped'
  };
  
  // it is called everytime props or state updates
  componentDidUpdate(prevProps, prevState) {
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch(this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
      }
    }
  }

  startTimer = () => {
    this.timer = setInterval(() => {
      const newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });
    }, 1000);
  }
  
  handleSetCountdown = (seconds) => {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
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