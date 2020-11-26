import React from 'react';
import StopwatchDisplay from './StopwatchDisplay';
import './Stopwatch.css';
 


class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
                  running: false,
                  TimeMs: 0,
                  TimeSec: 0,
                  TimeMin: 0,
                 };
                  this.start=this.start.bind(this);
                  this.stop=this.stop.bind(this);
                  this.reset=this.reset.bind(this);
                  this.timePaceMaker=this.timePaceMaker.bind(this);
                     }

  formatTime = (val, ...rest) => {
    let value = val.toString();
    if (value.length < 2) {
      value = '0' + value;
    }
    if (rest[0] === 'ms' && value.length < 3) {
      value = '0' + value;
    }
    return value;
  };

  start = () => {
    if (!this.state.running) {
      this.setState({ running: true });
      this.watch = setInterval(() => this.timePaceMaker(), 10);
      console.log(this);
    }
  };

  stop = () => {
    this.setState({ running: false });
    clearInterval(this.watch);
  };

  timePaceMaker = () => {
    this.setState({ TimeMs: this.state.TimeMs + 10 });
    if (this.state.TimeMs >= 1000) {
      this.setState({ TimeSec: this.state.TimeSec + 1 });
      this.setState({ TimeMs: 0 });
    }
    if (this.state.TimeSec >= 60) {
      this.setState({ TimeMin: this.state.TimeMin + 1 });
      this.setState({ TimeSec: 0 });
    }
  };
  reset = () => {
    this.setState({
      TimeMs: 0,
      TimeSec: 0,
      TimeMin: 0,
    });
  };
  render() {
    return (
      <div className={'stopwatch'}>
        <StopwatchDisplay
                     {...this.state}
          formatTime={this.formatTime}
        />
        <button onClick={this.start}>START</button>
        <button onClick={this.stop}>STOP</button>
        <button onClick={this.reset}>RESET</button>

      </div>
    );
  }
}

export default Stopwatch;
