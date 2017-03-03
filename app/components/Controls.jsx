import React, { Component } from 'react';

export default class Controls extends Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }
  
  handleOnClick(newStatus) {
    // this is what is called when the user clicks a button
    return () => {
      this.props.onStatusChange(newStatus); // newStatus is passed via closure
    }
  }

  render() {
    const { timerStatus } = this.props;
    const renderStartStopButton = (params) => {
      if (timerStatus === 'started') {
        return <button className="button secondary" onClick={this.handleOnClick('paused')}>Pause</button>
      } else if (timerStatus === 'paused') {
        return <button className="button primary" onClick={this.handleOnClick('started')}>Start</button>
      }
    };

    return (
      <div className="controls">
        {renderStartStopButton()}
        <button className="button alert hollow" onClick={this.handleOnClick('stopped')}>Clear</button>
      </div>
    );
  }
}

Controls.propTypes = {
  timerStatus: React.PropTypes.string.isRequired,
  onStatusChange: React.PropTypes.func.isRequired
};