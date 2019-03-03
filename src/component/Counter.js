import React from "react";


export class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      score: 0
    }
  }

  incrementScore = () => {
    this.setState(prevState => ({score: prevState.score + 1}));
  };

  decrementScore = () => {
    this.setState(prevState => {
      if (prevState.score > 0) return {score: prevState.score - 1}
      else return alert("스코어는 0보다 커야 합니다.");
    });
  };

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScore}>-</button>
        <span className="counter-score">{ this.state.score }</span>
        <button className="counter-action increment" onClick={this.incrementScore}>+</button>
      </div>
    )
  }
}