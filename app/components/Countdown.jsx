import React, { Component } from 'react';
import Clock from 'Clock';
import CountdownForm from 'CountdownForm';
import Controls from 'Controls';

export default class Countdown extends Component {
  // old style
  // constructor(props) {
  //   super(props);
  //   this.handleSetCountdown = this.handleSetCountdown.bind(this);
  //   this.state = { count: 0, countdownStatus: 'stopped' };
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
        case 'stopped':
          this.setState({
            count: 0
          });
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  }

  startTimer = () => {
    this.timer = setInterval(() => {
      const newCount = this.state.count - 1;
      if (newCount > 0) {
        this.setState({
          count: newCount
        });
      } else {
        this.setState ({
          count: 0,
          countdownStatus: 'stopped'
        });
      }
    }, 1000);
  }
  
  handleSetCountdown = (seconds) => {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  }

  handleStatusChange = (newStatus) => {
    this.setState({
      countdownStatus: newStatus
    });
  }
  
  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = undefined;
  }
  
  render() {
    const { count, countdownStatus } = this.state;
    const renderControlArea = () => {
      if (countdownStatus !== 'stopped') {
        return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange} />;
      } else {
        return <CountdownForm onSetCountdown={this.handleSetCountdown} />;
      }
    };
    
    return (
      <div>
        <Clock totalSeconds={count} />
        {renderControlArea()}
      </div>
    );
  }
}