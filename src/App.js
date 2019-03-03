import React from "react";
import './App.css';

const Header = (props) => (
  <header>
    <h1>{ props.title }</h1>
    <span className="stats">Players : { props.totalPlayers }</span>
  </header>
);

const Player = (props) => (
  <div className="player">
    <span className="player-name">
      <button className="remove-player" onClick={() => props.removePlayer(props.id)}>x</button>
    </span>
    <span className="player-name">{ props.name }</span>
    <Counter score={ props.score } />
  </div>
);

class Counter extends React.Component {
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

class App extends React.Component {
  state = {
    players: [
      {name: "KIM", id: 1},
      {name: "LEE", id: 2},
      {name: "SEO", id: 3},
      {name: "CHO", id: 4}
    ]
  };

  handleRemovePlayer = (id) => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(item => item.id != id)
      }
    });
  };

  render() {
    return (
      <div className="scoreboard">
        <Header title="My Scoreboard" totalPlayers={ this.state.players.length } />
        {
          this.state.players.map(item =>
            <Player
              name={ item.name }
              score={ item.score }
              key={ item.id.toString() }
              removePlayer={ this.handleRemovePlayer }
              id={item.id}
            />)
        }
      </div>
    )
  }
}

export default App;