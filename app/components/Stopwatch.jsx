import React, { Component } from 'react';
import Clock from 'Clock';
import Controls from 'Controls';

export default class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      stopwatchStatus: 'stopped'
    }
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleStart = this.handleStart.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.stopwatchStatus !== this.state.stopwatchStatus) {
      switch (this.state.stopwatchStatus) {
        case 'stopped':
          this.setState({
            count: 0
          });
        case 'paused':
          clearInterval(this.interval);
          this.interval = undefined;
          break;
        case 'started':
          this.handleStart();
          break;
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleStart() {
    this.interval = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

  handleStatusChange(newStatus) {
    this.setState({
      stopwatchStatus: newStatus
    });
  }

  render() {
    const { count, stopwatchStatus } = this.state;

    return (
      <div>
        <h1 className="page-title">Stopwatch</h1>
        <Clock totalSeconds={count} />
        <Controls status={stopwatchStatus} onStatusChange={this.handleStatusChange} />
      </div>
    );
  }
}
