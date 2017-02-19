import React, { Component } from 'react';

export default class Clock extends Component {
  formatSeconds(totalSeconds) {
    let minutes, seconds;
    seconds = totalSeconds % 60;
    minutes = Math.floor(totalSeconds / 60);
    
    if (seconds < 10) {
      seconds = '0' + seconds;
    }

    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    return `${minutes}:${seconds}`;
  }
  
  render() {
    const { totalSeconds } = this.props;

    return (
      <div className="clock">
        <span className="clock-text">
          {this.formatSeconds(totalSeconds)}
        </span>
      </div>
    );
  }
}

Clock.defaultProps = {
  totalSeconds: 0
};

Clock.propTypes = {
  totalSeconds: React.PropTypes.number
};