import React from "react";
import styles from "../Scoreboard.module.css";

export class Stopwatch extends React.Component {
  tickRef;
  state = {
    isRunning: false,
    timer: 0
  };

  // 컴포넌트가 만들어지고 첫 렌더링을 다 마친 후 실행
  componentDidMount() {
    this.tickRef = setInterval(() => this.tick(), 1000);
  }

  // 컴포넌트가 DOM 에서 사라진 후 실행
  componentWillUnmount() {
    clearInterval(this.tickRef);
  }

  tick() {
    if(this.state.isRunning) {
      this.setState(prevState => prevState.timer += 1);
    }
  };

  handleStopwatch = () => {
    this.setState(prevState => ({
      isRunning: !prevState.isRunning
    }));
  };

  handleReset = () => {
    this.setState({
      isRunning: false,
      timer: 0
    })
  };

  render() {
    return (
      <div className={styles.stopwatch}>
        <h2>Stopwatch</h2>
        <span className={styles["stopwatch-time"]}>{this.state.timer}</span>
        <button onClick={this.handleStopwatch}>{this.state.isRunning ? 'Stop' : 'Start'}</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}