import React, { Component } from 'react';
import Clock from 'Clock';
import TimerForm from 'TimerForm';
import Controls from 'Controls';

export default class Timer extends Component {
  // old style
  // constructor(props) {
  //   super(props);
  //   this.handleSetTimer = this.handleSetTimer.bind(this);
  //   this.state = { count: 0, timerStatus: 'stopped' };
  // }

  state = {
    count: 0,
    timerStatus: 'stopped'
  };
  
  // it is called everytime props or state updates
  componentDidUpdate(prevProps, prevState) {
    if (this.state.timerStatus !== prevState.timerStatus) {
      switch(this.state.timerStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({
            count: 0
          });
        case 'paused':
          clearInterval(this.interval);
          this.interval = undefined;
          break;
      }
    }
  }

  startTimer = () => {
    this.interval = setInterval(() => {
      const newCount = this.state.count - 1;
      if (newCount > 0) {
        this.setState({
          count: newCount
        });
      } else {
        this.setState ({
          count: 0,
          timerStatus: 'stopped'
        });
      }
    }, 1000);
  }
  
  handleSetTimer = (seconds) => {
    this.setState({
      count: seconds,
      timerStatus: 'started'
    });
  }

  handleStatusChange = (newStatus) => {
    this.setState({
      timerStatus: newStatus
    });
  }
  
  componentWillUnmount() {
    clearInterval(this.interval);
    this.interval = undefined;
  }
  
  render() {
    const { count, timerStatus } = this.state;
    const renderControlArea = () => {
      if (timerStatus !== 'stopped') {
        return <Controls timerStatus={timerStatus} onStatusChange={this.handleStatusChange} />;
      } else {
        return <TimerForm onSetTimer={this.handleSetTimer} />;
      }
    };
    
    return (
      <div>
        <h1 className="page-title">Timer</h1>
        <Clock totalSeconds={count} />
        {renderControlArea()}
      </div>
    );
  }
}