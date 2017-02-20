import React, { Component } from 'react';

export default class CountdownForm extends Component {
  constructor(props) {
    super(props);
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    const seconds = this._seconds.value;
    if (seconds.match(/^\d+$/)) {
      this._seconds.value = '';
      this.props.onSetCountdown(parseInt(seconds, 10));
      this._seconds.focus();
    }
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="countdown-form">
          <input ref={input => this._seconds = input} type="text" placeholder="Enter time in seconds" />
          <button className="button expanded">Start</button>
        </form>  
      </div>
    );
  }
}