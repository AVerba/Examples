import React from 'react';

class StopwatchDisplay extends React.Component {
  render() {
    return (
      <div className={'stopwatch__display'}>
        <h1>
          {this.props.formatTime(this.props.TimeMin)}:
          {this.props.formatTime(this.props.TimeSec)}:
          {this.props.formatTime(this.props.TimeMs, 'ms')}
        </h1>
      </div>
    );
  }
}

export default StopwatchDisplay;